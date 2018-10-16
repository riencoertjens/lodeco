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
import StampVers from '../../static/images/stamp1.svg'
import StampGratis from '../../static/images/stamp2.svg'

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
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
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
                <h1
                  className={css`
                    position: relative;
                    display: inline-block;
                    font-size: 48px;
                  `}
                >
                  <img
                    src={StampVers}
                    alt="50 jaar vers"
                    className={css`
                      position: absolute;
                      ${mediaQueries({
                        width: ['75px', 'auto'],
                        top: ['-60px', '-40px', '-40px'],
                        left: ['-20px', '0', '-70px'],
                      })} z-index: 9999;
                      margin: 0;
                    `}
                  />
                  Elke dag met zorg gebracht
                </h1>
                <p
                  className={css`
                    font-weight: 300;
                    font-size: 24px;
                    color: #bdbdbd;
                    padding: 0 5px;
                    ${mediaQueryLT['mobile']} {
                      font-size: 20px;
                    }
                  `}
                >
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
            <Section
              background={colors.primaryBG}
              className={css`
                color: white;
                h2 {
                  font-size: 32px;
                  &:after {
                    background-image: linear-gradient(
                      to right,
                      white 33%,
                      rgba(255, 255, 255, 0) 0%
                    );
                  }
                }
              `}
            >
              <Container>
                <h2
                  className={css`
                    font-size: 32px;
                  `}
                >
                  Specifiek aanbod voor slagers, delicatessenzaken,
                  broodjeszaken en horeca
                </h2>
                <p
                  className={css`
                    color: #bdbdbd;
                    font-weight: 300;
                    font-size: 24px;
                    max-width: 625px;
                    margin-left: auto;
                    margin-right: auto;
                  `}
                >
                  Vooral broodbeleg, zoals fijne vleeswaren, kazen, en salades.
                  Maar ook bereide gerechten en tapas, of exclusieve gerookte,
                  gedroogde of gekookte specialiteiten. Met onze eigen import en
                  persoonlijke service mag u rekenen op een zeer individuele
                  ondersteuning.
                </p>
                <Columns
                  className={css`
                    ${mediaQueries({
                      alignItems: ['center', 'center', 'stretch'],
                      flexDirection: ['column', 'column', 'row'],
                    })};
                    p {
                      color: #d7d6d3;
                      font-size: 15px;
                      ${mediaQueryLT['tablet']} {
                        margin: 0;
                      }
                    }
                    h3 {
                      font-family: ${fonts.sansSerif};
                      padding: 0 ${rhythm(3 / 4)};
                      font-size: 18px;
                      font-weight: 600;
                    }
                  `}
                >
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

              <Container
                className={css`
                  margin-top: ${rhythm(2)};
                `}
              >
                <h2>Kazen en bereide gerechten</h2>
                <Columns
                  className={css`
                    margin-bottom: ${rhythm()};

                    p {
                      color: #d7d6d3;
                      font-size: 15px;
                      ${mediaQueryLT['tablet']} {
                        margin: 0;
                      }
                    }
                    h3 {
                      font-family: ${fonts.sansSerif};
                      padding: 0 ${rhythm(3 / 4)};
                      font-size: 18px;
                      font-weight: 600;
                    }
                  `}
                >
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
                background: #bfbeb8;
                h2 {
                  font-size: 32px;
                  color: black;
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

                {data.deliflash.edges.length > 0 && (
                  <a
                    href={
                      data.deliflash.edges[0].node.frontmatter.pdf.publicURL
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css`
                      width: 100%;
                      max-width: 350px;
                      display: block;
                      margin: ${rhythm()} auto;
                      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                    `}
                  >
                    <Image
                      alt="deliflash magazine"
                      fluid={
                        data.deliflash.edges[0].node.frontmatter.image
                          .childImageSharp.fluid
                      }
                    />
                  </a>
                )}

                <LinkButton href="/#contact">blijf op de hoogte</LinkButton>
              </Container>
            </Section>
            <Section
              name="aanbod"
              className={css`
                background: white;
              `}
            >
              <Container>
                <h2
                  className={css`
                    font-size: 32px;
                  `}
                >
                  onze producenten
                </h2>
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
                <div
                  className={css`
                    display: flex;
                    max-width: 900px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-evenly;
                  `}
                >
                  {data.featuredLeveranciers.edges.map(({ node }, i) => (
                    <OutboundLink
                      className={css`
                        flex: 0 0 250px;
                        margin: ${rhythm(1)};
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
              name="contact"
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
                    color: #d1d1d1;
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
                        ${mediaQueryLT['tablet']} {
                          text-align: center;
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
                        font-size: 20px;
                        color: #d1d1d1;
                        font-weight: 300;
                      `}
                    >
                      Een familiezaak met 50 jaar ervaring. Groothandel met
                      persoonlijke service en kwaliteitsproducten. Gericht op de
                      kleinhandel die zich wil onderscheiden.
                    </p>
                    <p
                      className={css`
                        margin: 0;
                        font-size: 15px;
                        a {
                          text-decoration: none;
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
                        padding: ${rhythm(2)};
                        align-items: stretch;
                        h3 {
                          font-size: 20px;
                          color: white;
                        }
                        ${mediaQueryLT['tablet']} {
                          padding: ${rhythm(2)} 0;
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
