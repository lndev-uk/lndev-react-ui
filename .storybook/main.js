const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs/register'
  ],
  stories: ['../src/**/*.story.(js|mdx)', '../src/**/story.(js|mdx)'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.module.rules.push({
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx']
          }
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})]
          }
        }
      ]
    });

    config.module.rules.push({
      test: /(story)\.js?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre'
    });

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: 'style-loader', options: {} },
        { loader: 'css-loader', options: {} },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['./node_modules']
            }
          }
        }
      ],
      include: [path.resolve(__dirname, '../')]
    });

    // Return the altered config
    return config;
  }
};
