import * as React from "react"
import Gallery from "react-photo-gallery" 
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Call from "../components/call"

const photos = [
  {
    src: '/images/santehnik-lviv.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/drain-pipes-3.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/drain-pipes-4.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/drain-pipes-2.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/drain-pipes.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/water-pipes.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/prochistka-kanalizatsii-2.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/santehnichniy-tros.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/kanalizatsiyne-obladnanya.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/toilet-2.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/2.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/1.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/3.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/5.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/8.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/boiler-31.jpg',
    width: 1600,
    height: 900
  },
  {
    src: '/images/drain/1.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/drain/2.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/drain/3.jpg',
    width: 525,
    height: 700
  },
  {
    src: '/images/drain/4.jpg',
    width: 525,
    height: 700
  }
];

const GallerPage = () => (
  <Layout>
    <SEO title="Прочистка каналізації"
      description="Пропонуємо механічний, вакуумний та гідродинамічний 
      способи очищення каналізаційних труб" />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Галерея сантехнічних робіт</h1>
          <p className="lead"><strong>До ваших послуг сантехнік у Львові та околицях. Телефонуйте!</strong>
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
          <Gallery photos={photos} />
          <br />
          <br />
          <p className="text-center">
            <Link to="/" className="button hollow">Перелік сантехнічних послуг</Link>
          </p>
        </div>
      </div>
    </Content>
  </Layout>
)

export default GallerPage
