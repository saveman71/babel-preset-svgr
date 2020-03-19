module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    ['../../index', {
      mimicCreateReactApp: {
        pathsRelativeTo: __dirname,
      },
    }],
  ],
};
