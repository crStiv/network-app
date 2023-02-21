// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';
import { useAsyncMemo, useNetworkClient } from '.';
import { AsyncMemoReturn } from './useAsyncMemo';

export function useDelegating(address: string): AsyncMemoReturn<BigNumber | undefined> {
  const networkClient = useNetworkClient();

  return useAsyncMemo(async () => {
    const delegating = await networkClient?.getDelegating(address);
    return delegating;
  }, [address, networkClient]);
}
