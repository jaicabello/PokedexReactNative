module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        ['react-native-paper/babel'],
        ['module:react-native-dotenv'],
        [
          'module-resolver',
          {
            root: ['./src'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
            ],
            alias: {
              '*': '.',
              '@root': './',
              '@src': './src',
            },
          },
        ],
      ],
    },
  },
};
