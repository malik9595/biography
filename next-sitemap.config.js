
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://biography-gilt.vercel.app/', // Replace with your site's URL
  generateRobotsTxt: true,           // Generates a robots.txt file
  changefreq: 'daily',               // How frequently your pages are updated
  priority: 0.7,                     // Priority of your pages (0.1 to 1.0)
  sitemapSize: 5000,                 // Maximum number of URLs per sitemap file
  exclude: ['/admin/*', '/secret'],  // Exclude specific pages or routes
};
