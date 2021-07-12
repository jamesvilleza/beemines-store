const withLess = require("next-with-less");

module.exports = withLess({
  reactStrictMode: true,
  env: {
    // PUBLIC_URL: 'https://www.beemines.ml',
    PUBLIC_URL: "http://localhost:3000",
    // wpURL: "http://wpecommerce.local",
    consumerKey: "ck_7d7bda92f5ef41b3d0aa2619a790b02344af2e27",
    consumerSecret: "cs_51e665d38dba7968515bc789694aa286bdb0337c",
    sessionSecret: "5EBE2294ECD0E0F08EAB7690D2A6EE69",
  },
  lessVarsFilePath: "./styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
