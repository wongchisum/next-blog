/** @type {import('next-sitemap').IConfig} */
const config = {
  // siteUrl: process.env.SITE_URL || 'https://www.xiaojun.im',
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}

module.exports = config
