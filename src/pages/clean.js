import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const CleanPage = () => (
  <Layout>
    <SEO
      title="Прочистка каналізації"
      description="Пропонуємо механічний, вакуумний та гідродинамічний 
      способи очищення каналізаційних труб"
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Прочистка каналізації · Львів</h1>
          <p className="lead">
            <strong>
              Прочистка каналізації у Львові – звертайтеся до нас!
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
        <div className="columns small-12 medium-11 large-10">
          <p className="text-center">
            
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">

          <Link to="/drain-cleaning">послуги з прочистки каналізації</Link>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default CleanPage
