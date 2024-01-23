// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AppTypography } from '@components/Typography';
import { Button } from 'antd';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';

import { tipsChainIds } from 'src/config/rainbowConf';

import { ECOSYSTEM_NETWORK } from '../../containers/Web3';
import styles from './ChainStatus.module.css';

export const ChainStatus: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { t } = useTranslation();

  if (isConnected && !tipsChainIds.includes(chain?.id || 0)) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <AppTypography className={styles.title}>{t('unsupportedNetwork.title')}</AppTypography>
          <div className={styles.switchContainer}>
            <AppTypography className={styles.description}>
              {t('unsupportedNetwork.subtitle', { supportNetwork: ECOSYSTEM_NETWORK })}
            </AppTypography>
            <Button
              onClick={() => {
                switchNetwork?.(chains[0].id);
              }}
              type="primary"
              size="large"
              shape="round"
            >
              {t('unsupportedNetwork.button')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
