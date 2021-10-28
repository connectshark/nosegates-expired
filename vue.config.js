module.exports = {
  css: {
    sourceMap: false
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/nosegates/'
    : '/',

  pluginOptions: {
    i18n: {
      locale: 'tw',
      fallbackLocale: 'tw',
      localeDir: 'i18n',
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
