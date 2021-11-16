module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-react-i18next'
  ],
  webpackFinal: (config) => {
    config.node = {
      ...config.node,
      fs: 'empty',
    }

    return config;
  }
}
