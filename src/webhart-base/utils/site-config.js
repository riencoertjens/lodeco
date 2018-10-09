const base = {
  name: `Website name`,
  shortName: `shortname`,
  tagline: `Non laborum ex anim duis velit ullamco.`,
  url: `https://web-hart.netlify.com`, // no trailing slash!
  // url: `https://web-hart.com`,
  description: `site description Est dolore duis exercitation in quis excepteur culpa eu ut Lorem incididunt. Elit pariatur nostrud deserunt adipisicing voluptate commodo tempor ad. Sunt ut duis exercitation labore dolor excepteur dolore quis duis ut cillum minim. Fugiat Lorem deserunt ad in et minim tempor exercitation sint.`,
  primaryColor: '#E67E00',
  primaryBgColor: '#1e3a4a',
}

const config = {
  /* meta tags */
  siteTitle: ` ${base.name} ❤️ ${base.tagline}`,
  siteTitlePostfix: ` ❤️ ${base.name}`,
  siteDescription: base.description,
  siteImage: `preview.jpg`,
  siteLanguage: `en`,

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: `${base.tagline}`,

  /* url */
  siteUrl: base.url,
  // pathPrefix: ``,

  manifest: {
    name: base.name,
    short_name: base.shortName,
    start_url: '/',
    background_color: base.primaryBgColor,
    theme_color: base.primaryColor,
    display: 'minimal-ui',
    icon: 'static/images/favicon.png', // This path is relative to the root of the site.
  },
}

module.exports = config
