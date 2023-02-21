// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from '@ethersproject/bignumber';
import clsx from 'clsx';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams, useRoutes } from 'react-router';
import { NoIndexers, ProjectHeader, ProjectOverview, Spinner, TabButtons } from '../../../components';
import IndexerDetails from '../../../components/IndexerDetails';
import {
  ProjectProgressProvider,
  useDeploymentsQuery,
  useIndexersQuery,
  useIPFS,
  useProjectMetadata,
  useProjectProgress,
  useSpecificServiceAgreements,
} from '../../../containers';
import { useAsyncMemo, useDeploymentMetadata, useProjectFromQuery, useRouteQuery } from '../../../hooks';
import { getDeploymentMetadata, notEmpty, parseError, renderAsync } from '../../../utils';
import styles from './Project.module.css';
import { ServiceAgreementsTable } from '../../plans/ServiceAgreements/ServiceAgreementsTable';
import { FlexPlans } from '../FlexPlans';
import { ROUTES } from '../../../utils';

const { OVERVIEW, INDEXERS, SERVICE_AGREEMENTS, FLEX_PLANS } = ROUTES;

const ProjectInner: React.VFC = () => {
  const { id } = useParams();
  const query = useRouteQuery();
  const navigate = useNavigate();
  const location = useLocation();

  const [offset, setOffset] = React.useState(0);
  const { t } = useTranslation();
  const { getVersionMetadata } = useProjectMetadata();
  const { catSingle } = useIPFS();
  const { updateIndexerStatus } = useProjectProgress();

  const asyncProject = useProjectFromQuery(id ?? '');
  const { data: deployments } = useDeploymentsQuery({ projectId: id ?? '' });

  const deploymentId = query.get('deploymentId') || asyncProject.data?.currentDeployment;

  const asyncIndexers = useIndexersQuery({ deploymentId: deploymentId ?? '', offset });
  const fetchMore = (offset: number) => {
    setOffset(offset);
  };

  const indexers = React.useMemo(
    () => asyncIndexers.data?.deploymentIndexers?.nodes.filter(notEmpty),
    [asyncIndexers.data],
  );
  const hasIndexers = React.useMemo(() => !!indexers?.length, [indexers]);

  // Populate data from gql for total progress, less accurate than when indexers tab visible
  React.useEffect(() => {
    if (!indexers) {
      return;
    }

    indexers.forEach((indexer) => {
      updateIndexerStatus(indexer.indexerId, BigNumber.from(indexer.blockHeight).toNumber());
    });

    if (indexers.length) {
      const indexer = indexers[0];

      (async function fetchMeta() {
        let indexerMeta;
        try {
          const { url: indexerEndpoint } = indexer.indexer?.metadata ?? {};

          if (!indexerEndpoint) return;
          indexerMeta = await getDeploymentMetadata({
            proxyEndpoint: indexerEndpoint,
            deploymentId,
            indexer: indexer.indexerId,
          });
        } catch (error) {
          console.error(parseError(error));
        }

        if (!indexerMeta) return;
        updateIndexerStatus(indexer.indexerId, indexerMeta.lastProcessedHeight, indexerMeta.targetHeight);
      })();
    }
  }, [catSingle, indexers, updateIndexerStatus, deploymentId]);

  const { data: deploymentVersions } = useAsyncMemo(async () => {
    const deploymentsWithSemver = await Promise.all(
      (deployments?.project?.deployments.nodes ?? [])
        .filter(notEmpty)
        .map((d) => getVersionMetadata(d.version).then((versionMeta) => ({ id: d.id, version: versionMeta.version }))),
    );

    return deploymentsWithSemver.reduce((acc, cur) => ({ ...acc, [cur.id]: cur.version }), {});
  }, [deployments]);

  const asyncDeploymentMetadata = useDeploymentMetadata(deploymentId);

  const handleChangeVersion = (value: string) => {
    navigate(`${location.pathname}?deploymentId=${value}`);
  };

  const indexerDetails = renderAsync(asyncIndexers, {
    loading: () => <Spinner />,
    error: (e) => <div>{`Failed to load indexers: ${e.message}`}</div>,
    data: (data) => {
      if (!indexers?.length) {
        return <NoIndexers />;
      }
      return (
        <IndexerDetails
          indexers={indexers}
          deploymentId={deploymentId}
          totalCount={data?.deploymentIndexers?.totalCount}
          onLoadMore={fetchMore}
          offset={offset}
        />
      );
    },
  });

  // const renderPlayground = () => {
  //   if (!hasIndexers) {
  //     return <Redirect from="/:id" to={`overview`} />;
  //   }

  //   return <div>Coming soon</div>;
  //   // return <Playground/>
  // };

  const tabList = [
    { link: `${OVERVIEW}${location.search}`, label: t('explorer.project.tab1') },
    { link: `${INDEXERS}${location.search}`, label: t('explorer.project.tab2') },
    { link: `${SERVICE_AGREEMENTS}${location.search}`, label: t('explorer.project.tab3') },
    { link: `${FLEX_PLANS}${location.search}`, label: t('explorer.project.tab4') },
    // { link: `${ROUTE}/${id}/playground${history.location.search}`, label: t('explorer.project.tab3') },
  ];

  return renderAsync(asyncProject, {
    loading: () => <Spinner />,
    error: (e) => <span>{`Failed to load project: ${e.message}`}</span>,
    data: (project) => {
      if (!project) {
        // Should never happen
        return <span>Project doesn't exist</span>;
      }

      return (
        <div className={styles.container}>
          <div className={styles.upper}>
            <div className={styles.projectHeader}>
              <ProjectHeader
                project={project}
                versions={deploymentVersions}
                currentVersion={deploymentId}
                onChangeVersion={handleChangeVersion}
              />
            </div>
            <TabButtons tabs={tabList} />
          </div>
          <div className={clsx('content-width')}>
            <Routes>
              <Route
                path={OVERVIEW}
                element={
                  <ProjectOverview
                    metadata={project.metadata}
                    deploymentDescription={asyncDeploymentMetadata?.data?.description}
                    createdAt={project.createdTimestamp}
                    updatedAt={project.updatedTimestamp}
                  />
                }
              />
              <Route path={INDEXERS} element={indexerDetails} />
              <Route
                path={SERVICE_AGREEMENTS}
                element={
                  <ServiceAgreementsTable queryFn={useSpecificServiceAgreements} queryParams={{ deploymentId }} />
                }
              />
              <Route path={FLEX_PLANS} element={<FlexPlans />} />
              {/* <Route path={`${ROUTE}/:id/playground`}>
                {renderPlayground()}
              </Route> */}
              <Route path={'/'} element={<Navigate replace to={`${OVERVIEW}${location.search}`} />} />
            </Routes>
          </div>
        </div>
      );
    },
  });
};

export const Project: React.VFC = () => {
  return (
    <ProjectProgressProvider>
      <ProjectInner />
    </ProjectProgressProvider>
  );
};
