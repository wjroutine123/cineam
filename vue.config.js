module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      },
      '/ajax2': {
        target: 'https://m2.maoyan.com',
        changeOrigin: true
      },
      '/ajax3': {
        target: 'https://m3.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
