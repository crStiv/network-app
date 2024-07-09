// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';
import { indexingProgress } from '@subql/network-clients';
import { IndexerDeploymentNodeFieldsFragment as DeploymentIndexer, ServiceStatus } from '@subql/network-query';
import {
  useGetAllocationRewardsByDeploymentIdAndIndexerIdQuery,
  useGetDeploymentIndexersByIndexerQuery,
  useGetIndexerAllocationProjectsQuery,
} from '@subql/react-hooks';

import { useProjectMetadata } from '../containers';
import { ProjectMetadata } from '../models';
import { AsyncData, getDeploymentMetadata } from '../utils';
import { useAsyncMemo } from './useAsyncMemo';
import { useEra } from './useEra';
import { useIndexerMetadata } from './useIndexerMetadata';

export interface UseSortedIndexerDeploymentsReturn extends Pick<DeploymentIndexer, 'deployment'> {
  id?: string;
  status: ServiceStatus | undefined;
  indexingErr?: string;
  deploymentId?: string;
  projectId?: string;
  projectName?: string;
  projectMeta: ProjectMetadata;
  isOffline?: boolean | undefined;
  lastHeight: number;
  indexingProgress: number;
  allocatedAmount?: string;
  lastEraAllocatedRewards?: string;
  lastEraBurnt?: string;
}

// TODO: apply with query hook
export function useSortedIndexerDeployments(indexer: string): AsyncData<Array<UseSortedIndexerDeploymentsReturn>> {
  const { getMetadataFromCid } = useProjectMetadata();
  const { currentEra } = useEra();
  const indexerDeployments = useGetDeploymentIndexersByIndexerQuery({
    variables: { indexerAddress: indexer },
    fetchPolicy: 'network-only',
  });

  const allocatedProjects = useGetIndexerAllocationProjectsQuery({
    variables: {
      id: indexer || '',
    },
    fetchPolicy: 'network-only',
  });

  const lastEraAllocatedRewardsAndBurned = useQuery<{
    indexerAllocationRewards: {
      groupedAggregates: Array<{
        keys: Array<string>;
        sum: {
          reward: string;
          burnt: string;
        };
      }>;
    };
  }>(
    gql`
      query GetAllocationRewardsByDeploymentIdAndIndexerId($indexerId: String!, $eraIdx: Int!) {
        indexerAllocationRewards(filter: { indexerId: { equalTo: $indexerId }, eraIdx: { equalTo: $eraIdx } }) {
          groupedAggregates(groupBy: DEPLOYMENT_ID) {
            sum {
              reward
              burnt
            }
            keys
          }
        }
      }
    `,
    {
      variables: {
        indexerId: indexer || '',
        eraIdx: (currentEra.data?.index || 0) - 1,
      },
    },
  );

  const { indexerMetadata } = useIndexerMetadata(indexer);
  const proxyEndpoint = indexerMetadata?.url;

  const sortedIndexerDeployments = useAsyncMemo(async () => {
    if (!indexerDeployments?.data?.indexerDeployments?.nodes) return [];

    const filteredDeployments = indexerDeployments?.data?.indexerDeployments?.nodes?.filter(
      (deployment) => deployment?.status !== ServiceStatus.TERMINATED,
    );

    // merge have allocation but not indexing project
    const mergedDeployments = filteredDeployments;

    return await Promise.all(
      mergedDeployments.map(async (indexerDeployment) => {
        const metadata: ProjectMetadata = indexerDeployment?.deployment?.project
          ? await getMetadataFromCid(indexerDeployment.deployment.project.metadata)
          : {
              name: '',
              image: '',
              description: '',
              websiteUrl: '',
              codeUrl: '',
              versionDescription: '',
              categories: [],
            };

        const deploymentId = indexerDeployment?.deployment?.id;
        // TODO: get `offline` status from external api call
        const isOffline = false;
        let indexingErr = '';
        let sortedIndexingProcess = 0;
        let lastHeight = 0;
        try {
          if (indexerDeployment?.__typename === 'IndexerDeployment') {
            const res = await getDeploymentMetadata({
              indexer,
              proxyEndpoint,
              deploymentId,
            });
            lastHeight = res?.lastHeight || 0;
            sortedIndexingProcess = indexingProgress({
              currentHeight: res?.lastHeight || 0,
              startHeight: res?.startHeight || 0,
              targetHeight: res?.targetHeight || 0,
            });
          }
        } catch (e) {
          indexingErr = "Failed to fetch metadata from deployment's Query Service.";
        }

        const allocatedAmount = allocatedProjects.data?.indexerAllocationSummaries?.nodes
          .find((i) => i?.deploymentId === deploymentId)
          ?.totalAmount.toString();
        const allocationInfo = lastEraAllocatedRewardsAndBurned.data?.indexerAllocationRewards?.groupedAggregates?.find(
          (i) => {
            return i?.keys?.[0] === deploymentId;
          },
        );
        const lastEraAllocatedRewards = allocationInfo?.sum?.reward?.toString();
        const lastEraBurnt = allocationInfo?.sum?.burnt?.toString();

        const projectId = indexerDeployment?.deployment?.project?.id;

        return {
          status: indexerDeployment?.status,
          indexingErr,
          indexingProgress: sortedIndexingProcess,
          lastHeight,
          isOffline,
          deploymentId,
          projectId,
          projectName: metadata.name ?? projectId,
          projectMeta: {
            ...metadata,
          },
          allocatedAmount,
          lastEraAllocatedRewards,
          lastEraBurnt,
          id: indexerDeployment?.id,
          deployment: indexerDeployment?.deployment || null,
        };
      }),
    );
  }, [indexerDeployments.loading, proxyEndpoint, allocatedProjects.data, lastEraAllocatedRewardsAndBurned.data]);

  return {
    ...sortedIndexerDeployments,
    refetch: async () => {
      await indexerDeployments.refetch();
      await allocatedProjects.refetch();
      await lastEraAllocatedRewardsAndBurned.refetch();
    },
  };
}
