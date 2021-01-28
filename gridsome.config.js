module.exports = {
  siteName: 'Dillon Lara',
  siteDescription: 'Colorado Springs Web Developer and ecommerce Consultant',
  siteUrl: 'https://dillonlara.me',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}