const base = {
  name: `Lodeco Eeckhout`,
  shortName: `Lodeco`,
  tagline: `Specifiek aanbod voor slagers, delicatessenzaken, broodjeszaken en horeca`,
  url: `https://www.lodeco-eeckhout.com`, // no trailing slash!
  // url: `https://web-hart.com`,
  description: `Specifiek aanbod voor slagers, delicatessenzaken, broodjeszaken en horeca. Vooral broodbeleg, zoals fijne vleeswaren, kazen, en salades. Maar ook bereide gerechten en tapas, of exclusieve gerookte, gedroogde of gekookte specialiteiten. Met onze eigen import en persoonlijke service mag u rekenen op een zeer individuele ondersteuning.`,
  primaryColor: '#E30613',
  primaryBgColor: '#5F5C4D',
}

const config = {
  /* meta tags */
  base: base,
  siteTitle: ` ${base.name} | ${base.tagline}`,
  siteTitlePostfix: ` | ${base.name}`,
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
