require('regenerator-runtime/runtime')
const config = require(`./src/webhart-base/utils/site-config.js`)

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    titleTemplate: `%s${config.siteTitlePostfix}`,
    description: config.siteDescription,
    url: config.siteUrl, // no trailing slash!
    image: '/images/site-image.jpg',
    owner: 'WEBhart',
    twitterUsername: '@riencoertjens',
    facebookAppID: '',
  },

  plugins: [
    `gatsby-plugin-resolve-src`,
    //ui
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/webhart-base/utils/typography.js`,
      },
    },

    //source
    {
      // Add static assets before markdown files
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `heroImages`,
        path: `${__dirname}/static/images/heroImages`,
      },
    },
    {
      // Add static assets before markdown files
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/portfolio`,
      },
    },
    //transform
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-embed-video`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,

    //seo / accessibility
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.manifest,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `${config.siteUrl}`,
        sitemap: `${config.siteUrl}/sitemap.xml`,
      },
    },
    `gatsby-plugin-offline`,

    // analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.analyticsID,
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },

    // cms
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        headers: {
          '/*': [
            "Content-Security-Policy: frame-ancestors 'self' https://*.storyblok.com/",
            'X-Frame-Options: ALLOW-FROM https://app.storyblok.com/',
          ],
        },
        mergeSecurityHeaders: true,
      },
    },
    `gatsby-plugin-netlify`, //keep last
  ],
}
