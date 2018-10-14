import React from 'react'

import Link from 'gatsby-link'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { StaticQuery, graphql } from 'gatsby'

import Obfuscate from 'react-obfuscate'

import Hero from 'components/Hero'
import ContactForm from 'webhart-base/ContactForm'
import {
  Container,
  Section,
  LinkButton,
  Button,
  Column,
  Columns,
} from 'webhart-base'
import {
  colors,
  rhythm,
  fonts,
  mediaQuery,
  mediaQueryGT,
  mediaQueryLT,
  mediaQueries,
} from '../webhart-base/utils/style'
import styled, { css } from 'react-emotion'

import Logo from '../../static/images/logo.svg'

const ColumnImageStyle = css`
  border: 1px solid white;
  border-radius: 5px;
  margin: ${rhythm()} auto;
  width: 100%;
  ${mediaQueryLT['tablet']} {
    max-width: 300px;
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
                        fixed(width: 200) {
                          ...GatsbyImageSharpFixed_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
            leveranciers: allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "leverancier" } } }
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
          }
        `}
        render={data => (
          <React.Fragment>
            <Hero image={data.HeroImage.childImageSharp.fixed}>
              <div
                className={css`
                  background: rgba(255, 255, 255, 0.5);
                  box-shadow: 0 0 150px white;
                  width: 100%;
                `}
              >
                <h1>Elke dag met zorg gebracht</h1>
                <p>
                  voor slagers, bakkers, delicatessenzaken, broodjeszaken,
                  tavernes, zorgcentra en rusthuizen
                </p>
              </div>
              <div
                className={css`
                  margin-bottom: 50px;
                `}
              >
                <Button large="true">contact</Button>
                <Button large="true" black>
                  aanbod
                </Button>
              </div>
            </Hero>
            <Section
              background={colors.primaryBG}
              className={css`
                color: white;
              `}
            >
              <Container>
                <h2>
                  Specifiek aanbod voor slagers, delicatessenzaken,
                  broodjeszaken en horeca
                </h2>
                <p
                  className={css`
                    font-weight: 300;
                    color: ${colors.grey1};
                    font-size: ${rhythm(3 / 4)};
                  `}
                >
                  Vooral broodbeleg, zoals fijne vleeswaren, kazen, en salades.
                  Maar ook bereide gerechten en tapas, of exclusieve gerookte,
                  gedroogde of gekookte specialiteiten. Met onze eigen import en
                  persoonlijke service mag u rekenen op een zeer individuele
                  ondersteuning.
                </p>
                <Columns
                  columnBase="300px"
                  className={css`
                  ${mediaQueries({
                    alignItems: ['center', 'center', 'stretch'],
                    flexDirection: ['column', 'column', 'row'],
                  })};
                    p {
                      color: ${colors.grey2};
                      font-size: 14px;
                      /* padding: 0 ${rhythm(2)}; */
                    }
                    h3 {
                      font-family: ${fonts.sansSerif};
                      padding: 0 ${rhythm(1)};
                      font-size: ${rhythm(2 / 3)};
                      font-weight: 600;
                    }
                  `}
                >
                  <Column>
                    <Image
                      fluid={data.voorverpakt.childImageSharp.fluid}
                      className={ColumnImageStyle}
                    />
                    <div>
                      <h3>voorverpakt en voorgesneden</h3>
                      <p>
                        Een zeer uitgebreid assortiment
                        <br />
                        gesneden en verpakte producten
                        <br />
                        voor bakkers en kleinhandel.
                      </p>
                    </div>
                    <Button clear="true">vraag ernaar</Button>
                  </Column>
                  <Column>
                    <Image
                      fluid={data.zaken.childImageSharp.fluid}
                      className={css`
                        ${ColumnImageStyle};
                        z-index: 999;
                        ${mediaQueryGT['tablet']} {
                          margin: 0 -40px ${rhythm()};
                          width: calc(100% + 80px);
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
                    <Button clear="true">ons aanbod</Button>
                  </Column>
                  <Column>
                    <Image
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
                        Of bel ons gewoon even ☺
                      </p>
                    </div>
                    <Button clear="true">contact</Button>
                  </Column>
                </Columns>
              </Container>
            </Section>
            <Section
              background={colors.primaryBG}
              className={css`
                color: white;
              `}
            >
              <Container>
                <h2>Kazen en bereide gerechten</h2>
                <Columns
                  className={css`
                    margin-bottom: ${rhythm()};

                    p {
                      color: ${colors.grey2};
                      font-size: 14px;
                    }
                    h3 {
                      font-family: ${fonts.sansSerif};
                      margin-bottom: ${rhythm(3 / 4)};
                      font-size: ${rhythm(2 / 3)};
                      font-weight: 600;
                    }
                  `}
                >
                  <Column>
                    <Image
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
                    <Button clear="true">ons aanbod</Button>
                  </Column>

                  <Column>
                    <Image
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
                    <Button clear="true">vraag ernaar</Button>
                  </Column>
                </Columns>
                <h2>
                  We leveren dagelijks in de volledige provincie Antwerpen en
                  haar omgeving.
                </h2>
              </Container>
            </Section>
            <Section
              className={css`
                background: #bfbeb8;
                h2 {
                  color: white;
                }
              `}
            >
              <Container>
                <h2>2-wekelijkse promoties</h2>
                <p
                  className={css`
                    color: black;
                    font-weight: 300;
                    font-size: ${rhythm(1)};
                  `}
                >
                  Onze tweewekelijkse folder geeft u steeds nieuwe ideeën
                  <br />
                  en mogelijkheden om uw klanten aan te trekken en te animeren.
                </p>
              </Container>
            </Section>
            <Section
              className={css`
                background: white;
              `}
            >
              <Container>
                <h2>onze producenten</h2>
                <p
                  className={css`
                    color: black;
                    font-weight: 300;
                    font-size: ${rhythm(1)};
                  `}
                >
                  Een uitgebreid aanbod van kwaliteitsproducten
                  <br />
                  van gerenommeerde leveranciers.
                </p>
                <div>
                  <div
                    className={css`
                      display: flex;
                      flex-wrap: wrap;
                      align-items: center;
                      justify-content: space-evenly;
                    `}
                  >
                    {data.featuredLeveranciers.edges.map(({ node }, i) => (
                      <OutboundLink
                        className={css`
                          flex: 0 0 200px;
                          margin: ${rhythm(1 / 2)};
                        `}
                        href={`//${node.frontmatter.site
                          .replace('http://', '')
                          .replace('https://', '')}`}
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          alt={node.frontmatter.title}
                          className={css`
                            transition: 0.1s;
                            filter: saturate(0);
                            &:hover {
                              filter: saturate(1);
                            }
                          `}
                          fixed={node.frontmatter.image.childImageSharp.fixed}
                        />
                      </OutboundLink>
                    ))}
                  </div>
                </div>
                <Button
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
                </div>
              </Container>
            </Section>
            <Section
              withComponent="footer"
              className={css`
                background: #404040;
                color: white;
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
                      flex: 1 1 350px;
                      padding: 150px ${rhythm(2)} ${rhythm(2)};
                      position: relative;
                      &&& {
                        align-items: flex-start;
                        justify-content: space-between;
                      }
                    `}
                  >
                    <img
                      className={css`
                        position: absolute;
                        top: 0;
                        width: 200px;
                      `}
                      src={Logo}
                    />
                    <p>
                      Een familiezaak met 50 jaar ervaring. Groothandel met
                      persoonlijke service en kwaliteitsproducten. Gericht op de
                      kleinhandel die zich wil onderscheiden.
                    </p>
                    <p
                      className={css`
                        margin: 0;
                        font-size: ${rhythm(1 / 2)};
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
                        padding: ${rhythm(2)};
                        align-items: stretch;
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
