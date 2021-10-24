module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@screens': './screens',
          '@components': './components',
          '@types': './types',
          '@routes': './routes',
          '@constants': './constants',
        },
      },
    ],
  ],
};
