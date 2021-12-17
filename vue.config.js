module.exports = {
  outputDir: 'docs',
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/sd4/'
  : '/'
}