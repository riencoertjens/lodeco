import React from 'react'

import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { StaticQuery, graphql } from 'gatsby'

import Obfuscate from 'react-obfuscate'

import Hero from '../components/Hero'
import ContactForm from '../webhart-base/ContactForm'
import {
  Container,
  Section,
  LinkButton,
  Button,
  Column,
  Columns,
} from '../webhart-base'
import {
  colors,
  rhythm,
  mediaQueryGT,
  mediaQueryLT,
  mediaQueries,
  styles,
} from '../webhart-base/utils/style'
import { css } from 'react-emotion'

import Logo from '../../static/images/logo.svg'
import StampVers from '../../static/images/stamp1.svg'
import StampGratis from '../../static/images/stamp2.svg'
import moment from 'moment'

const isFuture = dateString => {
  const now = new Date()
  const compareDate = new Date(dateString)
  return compareDate > now
}

const ColumnImageStyle = css`
  border: 1px solid white;
  border-radius: 5px;
  margin: ${rhythm()} auto;
  width: 100%;
  ${mediaQueryLT['tablet']} {
    max-width: 300px;
    max-height: 200px;
  }
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showSuppliers: false }
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
            HeroImage: file(base: { eq: "vlees.jpg" }) {
              childImageSharp {
                fixed(width: 1800, height: 1016, cropFocus: NORTH) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            voorverpakt: file(base: { eq: "voorverpakt.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 250, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            zaken: file(base: { eq: "zaken.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 350, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            advies: file(base: { eq: "advies.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 250, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            gerechten: file(base: { eq: "gerechten.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 250, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            kazen: file(base: { eq: "kazen.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 250, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            deliflash: allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "deliflash" } } }
              sort: { fields: [frontmatter___title], order: ASC }
              limit: 2
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    date
                    image {
                      childImageSharp {
                        fluid(maxWidth: 350) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    pdf {
                      publicURL
                    }
                  }
                }
              }
            }
            featuredLeveranciers: allMarkdownRemark(
              filter: {
                frontmatter: {
                  templateKey: { eq: "leverancier" }
                  featured: { eq: true }
                }
              }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    site
                    image {
                      childImageSharp {
                        fluid(maxWidth: 200) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
            leveranciers: allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "leverancier" } } }
              sort: { fields: [frontmatter___title], order: ASC }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    site
                    image {
                      childImageSharp {
                        fixed(width: 200) {
                          ...GatsbyImageSharpFixed_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
            leverancierLogos: allFile(
              filter: { sourceInstanceName: { eq: "leverancierlogos" } }
            ) {
              edges {
                node {
                  name
                  childImageSharp {
                    fluid(maxWidth: 200) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Hero image={data.HeroImage.childImageSharp.fixed}>
              <div
                className={css`
                  background: white;
                  background: linear-gradient(
                    rgba(255, 255, 255, 0.8) 75%,
                    transparent
                  );
                  width: 100%;
                  padding-bottom: 50px;
                `}
              >
                <h1>
                  <img
                    src={StampVers}
                    alt="50 jaar vers"
                    className={css`
                      position: absolute;
                      z-index: 9999;
                      margin: 0;
                      ${mediaQueries({
                        width: ['75px', 'auto'],
                        top: ['-50px', '-70px'],
                        left: ['0', '0'],
                      })};
                    `}
                  />
                  Elke dag met zorg gebracht
                </h1>
                <p>
                  voor slagers, bakkers, delicatessenzaken, broodjeszaken,
                  tavernes, zorgcentra en rusthuizen
                </p>
              </div>
              <div
                className={css`
                  ${mediaQueries({
                    marginBottom: ['00px', '50px'],
                  })};
                `}
              >
                <LinkButton href="#contact" large="true">
                  contact
                </LinkButton>
                <LinkButton href="#aanbod" large="true" black>
                  aanbod
                </LinkButton>
              </div>
            </Hero>
            <Section background={colors.primaryBG}>
              <Container>
                <h2>
                  Specifiek aanbod voor slagers, delicatessenzaken,
                  broodjeszaken en horeca
                </h2>
                <p>
                  Vooral broodbeleg, zoals fijne vleeswaren, kazen, en salades.
                  Maar ook bereide gerechten en tapas, of exclusieve gerookte,
                  gedroogde of gekookte specialiteiten. Met onze eigen import en
                  persoonlijke service mag u rekenen op een zeer individuele
                  ondersteuning.
                </p>
                <Columns className={styles.columns}>
                  <Column>
                    <Image
                      alt="charcuterie"
                      fluid={data.voorverpakt.childImageSharp.fluid}
                      className={ColumnImageStyle}
                    />
                    <div>
                      <h3>voorverpakt en voorgesneden</h3>
                      <p>
                        Een zeer uitgebreid assortiment gesneden en verpakte
                        producten voor bakkers en kleinhandel.
                      </p>
                    </div>
                    <LinkButton href="/#contact" clear="true">
                      vraag ernaar
                    </LinkButton>
                  </Column>
                  <Column>
                    <Image
                      alt="slager"
                      fluid={data.zaken.childImageSharp.fluid}
                      className={css`
                        ${ColumnImageStyle};
                        z-index: 999;
                        ${mediaQueryGT['tablet']} {
                          margin: 0 -60px ${rhythm()};
                          width: calc(100% + 60px);
                        }
                      `}
                    />
                    <div>
                      <h3>delicatessenzaken en slagers</h3>
                      <p>
                        Een groot aanbod van kwaliteitsproducten van
                        gerenomeerde leveranciers en een uitgebreid assortiment
                        exclusieve importproducten.
                      </p>
                    </div>
                    <LinkButton href="/#aanbod" clear="true">
                      ons aanbod
                    </LinkButton>
                  </Column>
                  <Column>
                    <img
                      src={StampGratis}
                      alt="gratis starterspakket"
                      className={css`
                        position: absolute;
                        top: 0;
                        right: 50%;
                        margin-right: -80px;
                        z-index: 9999;
                      `}
                    />
                    <Image
                      alt="starters"
                      fluid={data.advies.childImageSharp.fluid}
                      className={ColumnImageStyle}
                    />
                    <div>
                      <h3>persoonlijk advies voor starters</h3>
                      <p>
                        Voor starters maken we tijd voor persoonlijk advies en
                        individuele begeleiding. Laat ons even een bericht, en
                        we nemen zeer snel contact met u op.
                        <br />
                        <br />
                        Of bel ons gewoon even
                      </p>
                    </div>
                    <LinkButton href="/#contact" clear="true">
                      contact
                    </LinkButton>
                  </Column>
                </Columns>
              </Container>
            </Section>
            <Section background={colors.primaryBG}>
              <Container>
                <h2>Kazen en bereide gerechten</h2>
                <Columns className={styles.columns}>
                  <Column>
                    <Image
                      alt="kazen"
                      fluid={data.kazen.childImageSharp.fluid}
                      className={ColumnImageStyle}
                    />
                    <div>
                      <h3>kazen</h3>
                      <p>
                        een volledig assortiment kaas voor alle gelegenheden en
                        smaken
                      </p>
                    </div>
                    <LinkButton href="/#aanbod" clear="true">
                      ons aanbod
                    </LinkButton>
                  </Column>

                  <Column>
                    <Image
                      alt="gerechten"
                      fluid={data.gerechten.childImageSharp.fluid}
                      className={ColumnImageStyle}
                    />
                    <div>
                      <h3>bereide gerechten</h3>
                      <p>
                        Maaltijdsalades, maaltijdcomponenten, warm en koude
                        gerechten, pastas en tapas. Voor slagers,
                        delicatessenwinkels, algemene voedingswinkel, rusthuizen
                        en verzorgingstehuizen.
                      </p>
                    </div>
                    <LinkButton href="/#contact" clear="true">
                      vraag ernaar
                    </LinkButton>
                  </Column>
                </Columns>
                <h2>
                  We leveren dagelijks in de volledige provincie Antwerpen en
                  haar omgeving.
                </h2>
              </Container>
            </Section>
            <Section
              name="promoties"
              className={css`
                p {
                  color: black;
                }
              `}
              background="#BDBDBD"
            >
              <Container width="wide">
                <h2>2-wekelijkse promoties</h2>
                <p>
                  Onze tweewekelijkse folder geeft u steeds nieuwe ideeën
                  <br />
                  en mogelijkheden om uw klanten aan te trekken en te animeren.
                </p>
                <div
                  className={css`
                    display: flex;
                    justify-content: center;
                    & > div {
                      margin: ${rhythm(1 / 2)};
                      flex: 0 1 250px;
                    }
                  `}
                >
                  {data.deliflash.edges.length > 0 &&
                    data.deliflash.edges.map(({ node }, i) => (
                      <div key={i}>
                        <h4
                          className={css`
                            margin-bottom: ${rhythm(1 / 2)};
                          `}
                        >
                          {isFuture(node.frontmatter.date)
                            ? 'volgende promotie'
                            : node.frontmatter.title}
                        </h4>
                        <a
                          href={node.frontmatter.pdf.publicURL}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={css`
                            width: 100%;
                            max-width: 350px;
                            display: block;
                            margin: ${rhythm(1 / 2)} auto;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                            background: white;
                          `}
                        >
                          <Image
                            alt={`deliflash magazine ${node.frontmatter.date}`}
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                          />
                        </a>
                      </div>
                    ))}
                </div>
                <LinkButton href="/#contact">blijf op de hoogte</LinkButton>
              </Container>
            </Section>
            <Section name="aanbod">
              <Container>
                <h2
                  className={css`
                    color: black;
                  `}
                >
                  onze producenten
                </h2>
                <p>
                  Een uitgebreid aanbod van kwaliteitsproducten
                  <br />
                  van gerenommeerde leveranciers.
                </p>
                <div
                  className={css`
                    display: flex;
                    max-width: 900px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-evenly;
                    a {
                      display: block;
                      flex: 0 1 140px;
                      margin: 10px 5px;
                      ${mediaQueryGT['mobile']} {
                        margin: 15px 10px;
                        flex: 0 1 170px;
                      }
                    }
                  `}
                >
                  {data.leverancierLogos.edges.map(({ node }, i) => (
                    <OutboundLink
                      href={`http://${node.name
                        .replace('http://', '')
                        .replace('https://', '')}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {console.log(node)}
                      <Image
                        alt={node.name}
                        fluid={node.childImageSharp.fluid}
                        style={{ width: '100%' }}
                      />
                    </OutboundLink>
                  ))}
                  {/* {data.featuredLeveranciers.edges.map(({ node }, i) => (
                    <OutboundLink
                      href={`//${node.frontmatter.site
                        .replace('http://', '')
                        .replace('https://', '')}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        alt={node.frontmatter.title}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                        style={{ width: '100%' }}
                      />
                    </OutboundLink>
                  ))} */}
                </div>
                {/* <Button
                  onClick={() =>
                    this.setState({ showSuppliers: !this.state.showSuppliers })
                  }
                >
                  volledige lijst leveranciers
                </Button>
                <div
                  className={css`
                    margin: ${rhythm()};
                    display: flex;
                    flex-direction: column;
                    height: 0;
                    overflow: hidden;
                    transition: 0.2s;
                    align-items: center;
                    ${this.state.showSuppliers &&
                      `
                        height: ${24 * data.leveranciers.edges.length}px;
                    `};
                  `}
                >
                  {data.leveranciers.edges.map(({ node }, i) => (
                    <OutboundLink
                      href={`//${node.frontmatter.site
                        .replace('http://', '')
                        .replace('https://', '')}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {node.frontmatter.title}
                    </OutboundLink>
                  ))}{' '}
                </div> */}
              </Container>
            </Section>
            <Section
              name="contact"
              background="#404040"
              className={css`
                color: #d1d1d1;
                padding: 0;
              `}
            >
              <Container>
                <Columns
                  className={css`
                    text-align: left;
                  `}
                >
                  <Column
                    className={css`
                      && {
                        flex: 1 1 350px;
                        padding: 150px ${rhythm(2)} ${rhythm(1)};
                        position: relative;
                        margin-top: 0;
                        align-items: flex-start;
                        justify-content: space-between;
                        text-align: center;
                        ${mediaQueryGT['tablet']} {
                          text-align: left;
                          padding-bottom: ${rhythm(2)};
                        }
                      }
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0;
                        width: 200px;
                        ${mediaQueryLT['tablet']} {
                          left: 50%;
                          margin-left: -100px;
                        }
                      `}
                      src={Logo}
                      alt="logo"
                    />
                    <p
                      className={css`
                        && {
                          font-size: 20px;
                          color: #d1d1d1;
                          font-weight: 300;
                        }
                      `}
                    >
                      Een familiezaak met 50 jaar ervaring. Groothandel met
                      persoonlijke service en kwaliteitsproducten. Gericht op de
                      kleinhandel die zich wil onderscheiden.
                    </p>
                    <p
                      className={css`
                        && {
                          margin: 0;
                          font-size: 15px;
                          a {
                            text-decoration: none;
                          }
                        }
                      `}
                    >
                      <OutboundLink
                        href="https://goo.gl/maps/DK9KkEx3bJM2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Maasstraat 38, 2060 Antwerpen
                      </OutboundLink>
                      <br />
                      tel{' '}
                      <Obfuscate tel="(+32)03/234.12.66">
                        03/234.12.66
                      </Obfuscate>{' '}
                      fax{' '}
                      <Obfuscate tel="(+32)03/234.12.72">
                        03/234.12.72
                      </Obfuscate>
                      <br />
                      <Obfuscate
                        email="mich.lodeco@scarlet.be"
                        headers={{
                          subject: 'website contact',
                        }}
                      >
                        mich.lodeco@scarlet.be
                      </Obfuscate>
                      <br />
                    </p>
                  </Column>
                  <Column
                    className={css`
                      && {
                        flex: 1 1 500px;
                        position: relative;
                        align-items: stretch;
                        h3 {
                          font-size: 20px;
                          color: white;
                        }
                        margin: 0;
                        padding: 0 0 ${rhythm(2)};
                        ${mediaQueryGT['tablet']} {
                          padding: ${rhythm(2)};
                        }
                      }
                    `}
                  >
                    <h3>verstuur bericht</h3>
                    <ContactForm name="contact-form" />
                  </Column>
                </Columns>
              </Container>
            </Section>
          </React.Fragment>
        )}
      />
    )
  }
}

export default IndexPage
