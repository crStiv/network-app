// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

const en = {
  translation: {
    header: {
      explorer: 'Explorer',
      studio: 'Studio',
      staking: 'Stake & Delegate',
      plans: 'Plan & Offer',
      missions: 'Missions',
      documentation: 'Documentation',
      forum: 'Forum',
      github: 'Github',
      connectWallet: 'Connect',
      hosted: 'Frontier (Testnet)',
    },
    globalBanner: {
      title: 'Season 3 Frontier Testnet has started 🔥',
      duration: 'Duration',
    },
    footer: {
      title: 'Join The Future',
      copyright: 'SubQuery © ',
    },
    projectCard: {
      noDescription: 'No description',
    },
    studio: {
      create: {
        name: 'Name',
        image: 'Upload Logo',
        subtitle: 'Subtitle',
        description: 'Description',
        websiteUrl: 'Website URL',
        codeUrl: 'Code URL',
      },
      project: {
        tab1: 'Details',
        tab2: 'Deployments',
      },
      wallet: {
        connect: 'Connect wallet to use the studio',
        subTitle:
          'Use the studio to create and manage your SubQuery projects. <br> Learn how to create a SubQuery project <1>here</1>.',
      },
    },
    explorer: {
      project: {
        tab1: 'Overview',
        tab2: 'Indexers',
        tab3: 'Playground',
      },
      home: {
        header: 'SubQuery projects',
      },
    },
    deployment: {
      create: {
        title: 'Create New Deployment',
        version: 'Version',
        description: 'Description',
        deploymentId: 'Deployment ID',
        explainer: 'You can get a deployment id by running `subqul publish` from the command line',
        submit: 'Deploy New Version',
      },
    },
    noIndexers: {
      preTitle: 'no indexers available',
      title: 'Start indexing this project',
      subtitle: 'Learn how to index a SubQuery <1>here</1>',
    },
    indexers: {
      head: {
        indexers: 'Indexers',
        progress: 'Progress',
        status: 'Status',
        url: 'Query URL',
        plans: 'Plans',
      },
    },
    create: {
      title: 'Create your first SubQuery project',
      subtitle: 'Learn how to create a SubQuery project <1>here</1>.',
      button: 'Create a project',
      step1: {
        name: 'Step 1',
        title: 'Create',
        subtitle: 'Give your SubQuery project a name.',
      },
      step2: {
        name: 'Step 2',
        title: 'Install',
        subtitle: 'Install the SubQuery CLI.',
      },
      step3: {
        name: 'Step 3',
        title: 'Define & Deploy',
        subtitle: 'Define and deploy your SubQuery project in the CLI.',
      },
      step4: {
        name: 'Step 4',
        title: 'Publish',
        subtitle:
          'Fill out metadata and deployment details, then when you are ready, publish your SubQuery project to the Explorer.',
      },
    },
    edit: {
      submitButton: 'Save',
      cancelButton: 'Cancel',
    },
    createInsturctions: {
      button: 'View Documentation',
      title1: 'Install Subql CLI',
      content1_1: 'The @subql/cli (opens new window)tool helps to create define and deploy a subquery project.',
      content1_2: 'Install SubQuery CLI globally on your terminal by using NPM:',
      title2: 'Deployment Version',
      content2: 'A semver for the deployment. e.g. 1.0.0',
      title3: 'Deployment ID',
      content3: 'The deployment id, this can be acquired by running <1>subql publish</1> with the CLI',
      installCommand: 'npm i -g @subql/cli',
    },
    newProjectModal: {
      title: 'Create a SubQuery project',
      subtitle: `Project name doesn't need to be unique and you can change the project name later.`,
      button: 'Continue',
      placeholder: 'Project Name',
    },
    projectOverview: {
      createdAt: 'Created',
      updatedAt: 'Last Updated',
      deploymentDescription: 'Deployment Description',
    },
    projectDetail: {
      description: 'Description',
      websiteUrl: 'Website URL',
      sourceUrl: 'Source Code URL',
      button: 'Edit',
    },
    projectHeader: {
      id: 'Project ID',
      deploymentId: 'Deployment ID',
    },
    connectWallet: {
      title: 'Connect wallet',
      subtitle: 'To participate in our test network, please start by connecting your wallet first.',
      connectWith: 'Connect With:',
      metamaskDesc: 'Connect with Metamask browser extension',
    },
    unsupportedNetwork: {
      title: 'Unsupported network',
      subtitle: 'Please switch networks to use the Studio',
      button: 'Switch Network',
    },
    indexerProgress: {
      blocks_one: '1 block behind',
      blocks_other: '{{count}} blocks behind',
    },
    deployments: {
      header1: 'Version',
      header2: 'Deployment ID',
      header3: 'Description',
      header4: 'Created',
    },
    errors: {
      transactionRejected: 'User rejected the request',
    },
    indexer: {
      title: 'Indexer',
      indexers: 'Indexers',
      profile: 'My profile',
      currentEra: 'Current Era',
      indexing: 'Indexing',
      totalStakeAmount: 'Total Stake amount',
      rewards: 'Rewards',
      locked: 'Locked',
      totalStake: 'total stake',
      ownStake: 'own stake',
      commission: 'commission',
      delegated: 'delegated',
      capacity: 'capacity',
      stake: 'Stake',
      unstake: 'Unstake',
      disabledStakeBeforeRewardCollect: `You can't stake until you collect all early era's rewards. Please check the indexer admin app to ensure the lastClaimedEra = ‘currentEra - 1’.`,
      disabledUnstakeBeforeRewardCollect: `You can't unstake until you collect all early era's rewards. Please check the indexer admin app to ensure the lastClaimedEra = ‘currentEra - 1’.`,
      enterStakeAmount: 'Enter Staking Amount',
      confirmOnMetamask: 'Confirm On MetaMask',
      stakeValidNextEra: 'Once confirm, your tokens will be staked from next era.',
      stakeInputTitle: 'Enter the amount of SQT you want to stake',
      confirmStake: 'Confirm Stake',
      enterUnstakeAmount: 'Enter Unstake Amount',
      unstakeValidNextEra:
        'Tokens will be unstaked from next era. They will then be locked for {{duration}} before you can withdraw. During this period, tokens do not earn any rewards.',
      unstakeInputTitle: 'Enter the amount of SQT you want to unstake',
      confirmUnstake: 'Confirm Unstake',
      updateCommissionRate: 'Change commission rate',
      setNewCommissionRate: 'Set new commission rate',
      disabledSetCommissionBeforeRewardClaim: `You can't change commission rate until you collect all early era's rewards. Please check the indexer admin app to ensure the lastClaimedEra = ‘currentEra - 1’.`,
      newRateValidNext2Era: 'Once confirm, the new rate will take 2 full eras to be effective.',
      enterCommissionRate: 'Enter the commission rate',
      currentRate: 'Current rate',
      confirmRate: 'Confirm Rate',
      action: 'action',
      approveToken: 'Allow the SubQuery Network to use your SQT',
      approveTokenToProceed: 'You must give the SubQuery Network smart contracts permission to use your SQT.',
      confirmApproval: 'Approve on MetaMask',
      notRegister: 'You haven’t registered as an indexer yet.',
      doStake: 'You haven’t staked yet. Stake to become an indexer.',
      learnMore: 'Learn how to become an indexer',
      topRowData: 'Top row of the data represents the data in current era.',
      secondRowData:
        'Data displayed after <returnRightIcon /> means the data that will take into effect from next era.',
      here: 'here',
      amount: ' There are {{count}} indexer.',
      amount_other: ' There are {{count}} indexers.',
    },

    delegate: {
      title: 'Delegate',
      delegating: 'Delegating',
      to: 'To',
      from: 'From',
      redelegate: 'You can delegate from wallet or choose an indexer to redelegate from',
      totalDelegation: 'Total Delegation to indexer(s)',
      amount: 'Delegation amount',
      delegator: 'Delegator',
      currentEra: 'Current Era',
      nextEra: 'Next Era',
      undelegate: 'Undelegate',
      enterAmount: 'Enter Amount',
      delegateValidNextEra: 'Once confirm, your tokens will be delegated from next era.',
      delegateAmount: 'Delegation amount',
      confirmDelegate: 'Confirm Delegation',
      undelegateValidNextEra:
        'Tokens will be undelegated from next era. They will then be locked for 28 days before you can withdraw. During this period, tokens do not earn any rewards. ',
      undelegateAmount: 'Enter the amount of SQT you want to undelegate',
      confirmUndelegate: 'Confirm Undelegation',
      delegateFailure: 'Sorry, the delegation has been failed.',
      delegateSuccess: 'Success! Your delegation has been done.',
      approveTokenToDelegate: 'Approve your token for staking',
      noDelegating: 'No delegation available',
      yourDelegateAmount: 'Your Delegation Amount',
      none: 'No delegator available',
      viewProfile: 'View indexer profile',
      totalAmount: 'You have total {{count}} delegation',
      totalAmount_other: 'You have total {{count}} delegations',
      invalidDelegateBeforeRewardCollect: `This indexer cannot be delegated to until they collect all the early era's rewards. Please contact the indexer to resolve the issue.`,
      invalidUndelegateBeforeRewardCollect: `This indexer cannot be undelegated from until they collect all the early era's rewards. Please contact the indexer to resolve the issue.`,
    },

    withdrawals: {
      unlockedAsset: 'You can withdraw total of {{count}} unlocked asset.',
      unlockedAsset_other: 'You can withdraw total of {{count}} unlocked assets.',
      amount: 'amount',
      startAt: 'start at',
      lockedUntil: 'locked until',
      status: 'status',
      locked: 'Locked',
      unlocked: 'Unlocked',
      noWithdrawals: 'No withdrawals available.',
      withdrawToken: 'Withdraw all unlocked assets',
      withdraw: 'Withdraw',
      confirm: 'Confirm withdrawal amount',
      enterWithdrawAmount: 'Enter the amount of SQT you want to withdraw',
      confirmWithdraw: 'Confirm Withdrawal',
      aboutToWithdraw: 'You are about to withdraw {{amount}} SQT.',
    },

    projects: {
      deploymentId: 'Deployment ID',
      nonDeployments: 'No deployed projects available.',
    },
    rewards: {
      none: 'No rewards available.',
      header1: 'Indexer',
      header2: 'Amount',
      header3: 'Action',
      claim: {
        title: 'Claim Rewards',
        step1: 'Confirm claim',
        desription: 'You are about to claim {{amount}} SQT',
        button: 'Claim',
        submit: 'Confirm Claim',
      },
      totalUnclaimReward: 'You have {{count}} unclaimed reward',
      totalUnclaimReward_other: 'You have {{count}} unclaimed rewards',
    },

    missions: {
      missions: 'Missions',
      leaderboard: 'Leaderboard',
      indexing: {},
      delegating: {},
      totalPoint: 'Total point:',
      point: 'point',
      point_other: '{{count}} points',
    },

    plans: {
      category: {
        myServiceAgreement: 'My Service Agreements',
        myPlan: 'My Plans',
        manageMyPlans: 'Manage My Plans',
        myOffers: 'Manage My Offers',
        offerMarketplace: 'Offer Marketplace',
      },
      default: {
        title: 'You can create maximum 5 default plans',
        createPlans: `Create plans for projects you're indexing. <br> Learn how to create a plan <1>here</1>.`,
        query: '{{count}} query',
        query_other: '{{count}} queries',
        requestPerMin: 'requests/min',
      },
      specific: {
        title: 'You can create maximum 5 specific plans',
        nonPlans:
          'You are not indexing any deployments to have specific plan.<br> Learn how to create a specific plan <1>here</1>.',
        nonDeployment: 'You have no plans specific to this deployment',
      },
      headers: {
        id: 'Id',
        price: 'Price',
        period: 'Period',
        dailyReqCap: 'Daily Request Cap',
        rateLimit: 'Rate Limit',
        action: 'Action',
        deploymentId: 'Deployment Id',
      },
      create: {
        action: 'Create',
        title: 'Create a Plan',
        step1: 'Set parameters',
        description: 'Template',
        failureText: 'Failed to create plan',
        priceTitle: 'Set a price for this plan',
        cancel: 'Cancel',
        submit: 'Create',
      },
      remove: {
        action: 'Remove',
        title: 'Are you sure you want to remove this plan?',
        description: 'Plan Details',
        failureText: 'Failed to remove plan',
        submit: 'Confirm Removal',
        cancel: 'Not now',
      },
      purchase: {
        action: 'purchase',
        title: 'Purchase Plan',
        step1: 'Confirm details',
        description: 'Plan Details',
        failureText: 'Failed to purchase plan',
        submit: 'Purchase',
        cancel: 'Cancel',
        yourBalance: 'Your balance ',
        failToLoadBalance: 'Failed to load balance.',
        noPlansForPurchase: 'There is no plan available to purchase.',
        failureFetchPlans: 'Failed to get plans for indexer',
        notReadyToBePurchased: 'The plan purchase feature is not available until READY status.',
      },
    },
    serviceAgreements: {
      headers: {
        project: 'Project',
        deployment: 'Version - Deployment ID',
        consumer: 'Consumer',
        indexer: 'Indexer',
        expiry: 'Expires In',
        expired: 'Expired',
        price: 'Price',
      },
      playground: {
        title: 'Playground',
        requireSessionToken: 'You need a session token to start querying on playground.',
        requestToken: 'Request token',
        ongoingAgreements: 'My Ongoing Service Agreements',
        auctionAndCrowdloan: 'Polkadot auction & crowdloan',
        sessionToken: 'Session Token',
        tokenExpireIn: 'Token expires in',
        comingSoon: 'Playground coming soon.',
      },
      non: 'You don’t have any ongoing service agreement yet. <br> Learn more from <1>here</1>.',
    },
    myOffers: {
      title: 'My offers',
      open: 'Open',
      openTooltip: 'Offers that are still open to indexers to accept',
      closed: 'Closed',
      closedTooltip: 'Offers that have reached the indexer cap and can no longer be accepted',
      closedDescription: 'Here you can find the offers that have reached indexer cap',
      expired: 'Expired',
      expiredDescription:
        'Here you can find the expired offers which did not reach the required number of indexers. \n  You can withdraw your unspent balance from these offers.',
      expiredUnspent: 'You can withdraw your unspent balance from these offers.',
      expiredTooltip:
        'You can find offers that have expired or cancelled without reaching the indexer cap. You can withdraw any unspent balance here',
      createOffer: 'Create an Offer',
      non: 'There is no offers available.',
      table: {
        versionDeployment: 'Version - Deployment ID',
        indexerAmount: 'No. of indexers',
        accepted: 'Accepted',
        acceptedTooltip: 'This is the number of indexers that have already accepted this offer',
        cap: 'Cap',
        capTooltip: 'This is the maximum number of indexers that can accept this offers',
        dailyRewardsPerIndexer: 'Daily Rewards Per indexer',
        dailyRewardsPerIndexerTooltip: 'This is the daily amount a indexer will receive from accepting the offer',
        totalRewardsPerIndexer: 'Total Rewards per indexer',
        totalRewardsPerIndexerTooltip:
          'This is the total amount a indexer will receive from accepting the offer. This amount is calculated as the daily rewards per indexer multiplied by the period.',
        depositAmount: 'Total deposit',
        period: 'Period',
        periodTooltip:
          'This is the duration the indexer who has accepted this offer will be receiving their rewards for',
        minIndexedHeight: 'min indexed height',
        minIndexedHeightTooltip:
          'Only the indexer that has indexed to this block height or above can accept this offer',
        expired: 'Expire',
        unspendBalance: 'Unspent balance',
        amount: 'Amount',
        totalOpenOffer: 'You have {{count}} open offer',
        totalOpenOffer_other: 'You have {{count}} open offers',
      },
      steps: {
        step_0: 'Choose Deployment ID',
        step_1: 'Choose Template',
        step_2: 'Set Details',
        step_3: 'Confirm',
      },
      step_0: {
        title: 'Step 1: Find the SubQuery Project Deployment ID for this offer',
        description:
          'You can copy & paste the deployment ID of your desired project by entering their project detail page from  <1>explorer<1>.',
        search: 'Search deployment ID',
        selectedId: 'Selected ID',
      },
      step_1: {
        title: 'Step 2: Choose an offer template from below',
      },
      step_2: {
        title: 'Step 3: Set the details for your offer',
        rewardPerIndexer: 'Total rewards per indexer',
        rewardPerIndexerTooltip: 'This is the total amount a indexer will receive from accepting the offer.',
        rewardPerIndexerErrorMsg: 'Please put a valid reward for an indexer.',
        indexerCap: 'Indexer cap',
        indexerCapWithCount_one: '{{count}} Indexer',
        indexerCapWithCount_other: '{{count}} Indexers',
        indexerCapTooltip: 'This is the maximum number of indexers that can accept this offers',
        indexerCapErrorMsg: 'Please put a valid indexer cap.',
        totalDeposit: 'Required deposit',
        totalDepositTooltip: `This amount is calculated as the rewards per indexer multiplied by the indexer cap that you have stated above. \n
        You will need to deposit this amount when you confirm the creation of this offer on MetaMask. Any unspent balance can be withdrawn when the offer expires or if you cancel the offer prior to expiration`,
        totalDepositErrorMsg: 'Not enough balance. Lower the numbers set up above or deposit more to the wallet.',
        minimumIndexedHeight: 'Minimum indexed height',
        minimumIndexedHeightTooltip:
          'Only the indexer that has indexed to this block height or above can accept this offer.',
        minimumIndexedHeightErrorMsg: 'Please put a valid block height.',
        expireDate: 'Expiration time',
        expireDateTooltip:
          'Indexer cannot accept this offer after the expiration time. However, the indexer that have already accepted the offer will not be affected.',
        cancelWarning:
          'Cancelling an offer before it expires will result in 10% of the unspent balance being charged as a cancellation fee.',
      },
      step_3: {
        title: 'Step 4: Confirm offer summary',
        consumer: 'Consumer',
        deploymentId: 'Deployment ID',
        offerTemplate: 'Offer Template',
        detailSettings: 'Detail settings',
      },
      cancel: {
        title: 'Cancel this offer',
        description:
          'By cancelling this open offer, you will be able to withdraw the unspent balance. Cancellation fee will be applied and be deducted from the unspent balance.',
        failureText: 'Sorry, failed to cancel offer',
        cancelFee: 'Cancellation fee',
        unSpent: 'Unspent balance',
        youWillReceive: 'You will receive',
      },
      withdraw: {
        title: 'withdraw',
        modalTitle: 'Withdraw from the offer',
        description: 'You are about to withdraw {{bigNumAmount}} SQT from this offer to your wallet',
        failureText: 'Sorry, failed to withdraw offer',
      },
    },
    offerMarket: {
      header: 'Offer Marketplace',
      viewAsIndexer: 'If you are an indexer, here is where you can explore and accept offers. ',
      totalOffer: 'Total {{count}} offer',
      totalOffer_other: 'Total {{count}} offers',
      accept: 'Accept',
      searchByDeploymentId: 'Search by deployment Id',
      acceptModal: {
        moveFromSummary: 'Move to the next step to check you meet the criteria for this offer.',
        title: 'Accept the offer',
        check: 'Check criteria',
        offerSummary: 'Offer summary',
        consumer: 'Consumer',
        passCriteria: 'You have passed {{count}} criteria',
        criteria: 'Criteria',
        yourProject: 'Your Project',
        indexingStatus: 'Indexing progress',
        indexingStatusError: 'Your project needs to be 100% indexed.',
        projectStatus: 'Project status',
        projectStatusError: 'You can announce ‘Ready’ for the project from the indexer admin app.',
        blockHeight: 'Block height',
        blockHeightError: 'Your project is currently behind the minimum blockheight.',
        dailyRewards: 'Daily Rewards',
        dailyRewardsError: 'Please stake more SQT or get more delegation to increase daily reward capacity.',
        failureText: 'Failed to accept offer',
        afterAcceptOffer:
          'By accepting the offer, a service agreement will be created between you and the consumer after you confirm on MetaMask.',
      },
    },

    general: {
      action: 'action',
      current: 'current',
      next: 'next',
      cancel: 'cancel',
      status: 'Status',
      back: 'Back',
      active: 'Active',
      inactive: 'Inactive',
      comingSoon: 'Coming soon.',
      choose: 'choose',
      confirm: 'Confirm',
      confirmOnMetamask: 'Confirm On MetaMask',
      confirmCancellation: 'Confirm Cancellation',
      day: 'day',
      day_other: '{{count}} days',
      block: 'Block',
      blocks: 'Blocks',
      blockWithCount_one: '{{count}} Block',
      blockWithCount_other: '{{count}} Blocks',
      balance: 'Balance',
    },
    status: {
      success: 'Success!',
      error: 'Sorry, there is something wrong',
      txSubmitted: 'Transaction has been submitted. Please wait for the transaction confirmed.',
      changeValidIn15s: 'Change will be reflected on dashboard in 15s.',
    },
  },
};

export type Translations = typeof en;

export default en;
