import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import SvgComponent from "../images/SVG/background-image";

const IndexPage = () => (
  <Layout>
    <SvgComponent />
    <SEO title="Home" />
    <div className="container mx-auto flex flex-wrap p-5 justify-between flex-col md:flex-row items-center">
    <Hero />
    </div>
  </Layout>
)

export default IndexPage
