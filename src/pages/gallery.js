import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Call from "../components/call"

const GalleryPage = ({ data }) => {
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    caption: `Фото ${index}`,
  }))

  return (
    <Layout>
      <Seo
        title="Прочистка каналізації"
        description="Пропонуємо механічний, вакуумний та гідродинамічний 
      способи очищення каналізаційних труб"
      />

      <section className="banner-container">
        <div className="row">
          <div className="columns small-12">
            <h1>Галерея сантехнічних робіт</h1>
            <p className="lead">
              <strong>
                До ваших послуг сантехнік у Львові та околицях. Телефонуйте!
              </strong>
            </p>
            <p>
              <Call />
            </p>
          </div>
        </div>
      </section>

      <Content>
        <div className="row align-center">
          <div className="columns small-12">
            <Gallery images={images} />
            <br />
            <br />
            <p className="text-center">
              <Link to="/" className="button hollow">
                Перелік сантехнічних послуг
              </Link>
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryPageQuery {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "gallery" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
              transformOptions: { cropFocus: EAST }
              quality: 100
            )
            full: gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`

export default GalleryPage
