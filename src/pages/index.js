import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

export const pageQuery = graphql`
  query IndexPageQuery {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "gallery-home" }
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

const IndexPage = ({ data }) => {
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    caption: `Фото ${index}`,
  }))
  return (
    <Layout>
      <Seo
        title="Послуги сантехніка: Аварійна прочистка каналізації у Львові"
        description="Швидко, якісно і надійно виконаємо сантехнічні роботи у Львові. Аварійна прочистка каналізації."
      />

      <section className="banner-container">
        <div className="row">
          <div className="columns small-12">
            <h1>Послуги сантехніка · Львів</h1>
            <p className="lead">
              <strong>
                Надаємо повний спектр якісних сантехнічних послуг. При аварійній
                ситуації звоніть цілодобово
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
              <strong>
                Надаємо послуги сантехніка у Львові та інших населених
                пунктах&nbsp;області. Сантехнічні&nbsp;роботи будь-якого
                рівня&nbsp;складності.
              </strong>
            </p>
            <p className="text-center">
              Працюємо щоденно, включно неділя та субота. Адже
              санітарно-технічні комунікації є обов’язковим елементом будь-якого
              житлового, або виробничого приміщення. Їх потрібно постійно
              підтримувати у функціональному стані. Наші майстри забезпечують
              це. Вони завжди готові виїхати на виклик.
            </p>
            <hr className="margin-bottom-2x margin-top-2x" />
          </div>
        </div>

        <div className="row align-center">
          <div className="columns small-12 medium-8 large-8">
            <h2>Які послуги сантехніка надаємо</h2>
            <p>
              Сфера діяльності сантехніків велика. Професіонали забезпечують
              роботу водопостачання, каналізації та опалення, здійснюють
              монтування сантехнічного обладнання. Послуги сантехніка:
            </p>

            <table className="text-small hover">
              <tbody>
                <tr>
                  <td>заміна труб водопостачання</td>
                </tr>
                <tr>
                  <td>
                    ремонт сантехніки, усіх без винятку сантехнічних пристроїв
                  </td>
                </tr>
                <tr>
                  <td>
                    встановлення: ванни (акрилової, сталевої, чавунної,
                    пластикової), душової кабіни, гідробоксу
                  </td>
                </tr>
                <tr>
                  <td>
                    установка раковини на кухні, у ванних кімнатах, у туалеті
                  </td>
                </tr>
                <tr>
                  <td>ремонт, заміна змішувача, крана, сифону</td>
                </tr>
                <tr>
                  <td>під’єднання пралки, посудомийної машинки</td>
                </tr>
                <tr>
                  <td>установка кухонної мийки</td>
                </tr>
                <tr>
                  <td>демонтаж, монтаж водяного стояка</td>
                </tr>
                <tr>
                  <td>
                    встановлення, ремонт гідромасажної ванни (кутової, прямої)
                  </td>
                </tr>
                <tr>
                  <td>
                    розводка водопровідних труб (металопластик прес,
                    поліпропіленових, поліетиленових, мідь, сталевих)
                  </td>
                </tr>
                <tr>
                  <td>
                    встановлення умивальника (звичайного, тюльпан, з тумбою)
                  </td>
                </tr>
                <tr>
                  <td>монтаж душа гігієнічного (прихованого, видимого)</td>
                </tr>
                <tr>
                  <td>
                    зняття та встановлення лічильника води, фільтра очищення
                  </td>
                </tr>
                <tr>
                  <td>заміна фільтрувальних елементів у фільтрі води</td>
                </tr>
                <tr>
                  <td>
                    встановлення, ремонт інсталяції (вбудованих бачків унітазу)
                  </td>
                </tr>
                <tr>
                  <td>ремонт душової кабіни</td>
                </tr>
                <tr>
                  <td>демонтаж, монтаж біде</td>
                </tr>
                <tr>
                  <td>
                    штроблення цегляних, бетонних стін під каналізаційну,
                    водопровідну трубу
                  </td>
                </tr>
                <tr>
                  <td>
                    вибивання, свердління отворів, ніш у стінах (цегляних,
                    панельних), у фундаменті
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>
              <span className="show-for-sr">
                Послуги сантехніка у Львові ·{" "}
              </span>
              Каналізаційна система
            </h3>
            <table className="text-small hover">
              <tbody>
                <tr>
                  <td>монтаж каналізації</td>
                </tr>
                <tr>
                  <td>
                    профілактична та аварійна{" "}
                    <Link to="/drain-cleaning">прочистка каналізації</Link>{" "}
                    (багатоповерхівках та приватних будинках, закладах
                    харчування, на виробництвах)
                  </td>
                </tr>
                <tr>
                  <td>прочищення соло ліфту, жировловлювача</td>
                </tr>
                <tr>
                  <td>
                    <Link to="/installing-toilet">установка унітазу</Link>{" "}
                    (звичайного, навісного, компакту)
                  </td>
                </tr>
                <tr>
                  <td>заміна арматури, зливного бачка унітазу, гофри</td>
                </tr>
                <tr>
                  <td>установка, ремонт, прочищення пісуару</td>
                </tr>
                <tr>
                  <td>встановлення підлогового унітаза (чаша Генуя)</td>
                </tr>
                <tr>
                  <td>заміна каналізаційної труби</td>
                </tr>
              </tbody>
            </table>

            <h3>
              <span className="show-for-sr">
                Послуги сантехніка у Львові ·{" "}
              </span>
              Oпалення
            </h3>
            <table className="text-small hover">
              <tbody>
                <tr>
                  <td>монтаж системи опалення</td>
                </tr>
                <tr>
                  <td>встановлення рушникосушки</td>
                </tr>
                <tr>
                  <td>заміна стояка опалення</td>
                </tr>
                <tr>
                  <td>
                    перепакування різьби, пробки, контргайки батареї опалення
                  </td>
                </tr>
                <tr>
                  <td>монтаж водяної теплої підлоги (електричної)</td>
                </tr>
                <tr>
                  <td>встановлення крану Маєвського</td>
                </tr>
                <tr>
                  <td>
                    монтаж газового котла опалення, колонки, бойлеру, усіх типів
                    водонагрівачів
                  </td>
                </tr>
                <tr>
                  <td>ремонт змійовика рушникосушки</td>
                </tr>
                <tr>
                  <td>заміна батарей опалення</td>
                </tr>
                <tr>
                  <td>промивання, навішування радіатору опалення</td>
                </tr>
              </tbody>
            </table>

            <h3>
              <span className="show-for-sr">
                Послуги сантехніка у Львові ·{" "}
              </span>
              Гідроізоляція
            </h3>
            <table className="text-small hover">
              <tbody>
                <tr>
                  <td>
                    гідроізоляція стін, фундаментів, терас, балконів, підлог
                    матеріалами провідних німецьких виробників (Koster, Weber)
                  </td>
                </tr>
                <tr>
                  <td>
                    попередній виїзд на об'єкт кваліфікованого працівника,
                    оцінка та консультація
                  </td>
                </tr>
                <tr>
                  <td>
                    балкон, тераса: очистка та грунтування поверхні грунтом
                    TG-2, наклеювання ізоляційної стрічки по примиканню за
                    допомогою weber.tec 822, нанесення weber.tec 822 у два шари{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    зовнішня гідроізоляція стін та фундаментів: очистка поверхні
                    від бруду, заповнення вибоїн Deiterman HKS або рем сумішшю,
                    нанесення бітумного водоемульсійного грунту Eurolan 3K
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="columns small-12 medium-4 large-4">
            <Nav></Nav>
          </div>
        </div>

        <div className="row align-center">
          <div className="columns small-12 medium-11 large-10">
            <hr className="margin-bottom-2x" />
            <p className="text-center">
              Замовлення на послуги сантехніка у Львові приймається швидко, при
              потребі сантехнік відразу виїжджає на об’єкт (або домовляєтеся на
              який день, котру годину). При необхідності залучається бригада
              наших співробітників. Фахівець, який надає послуги сантехніка
              Львів має високий рівень підготовки, багаторічний практичний
              досвід виконання сантехнічних робіт. На його озброєнні професійний
              сучасний інструмент. Kran.lviv застосовує демократичні розцінки на
              послуги сантехніка. Вони максимально доступні для всіх верств
              населення. Залежать від складності та умов виконання сантехнічних
              робіт. Існує система знижок, акційні пропозиції.
            </p>
            <p className="text-center">
              Дзвоніть! Усі сантехнічні роботи. Ремонт «під ключ» ванної та
              туалету у квартирах та будинках у приватному секторі. Якість,
              адекватні ціни на послуги сантехніка Львів гарантуємо.
            </p>
            <p className="text-center margin-bottom-4x">
              <a
                className="button hollow margin-bottom-0"
                href="tel:0981798393"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="18px"
                  height="18px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>{" "}
                (098) 179 83 93
              </a>
            </p>
          </div>
        </div>
        <div className="row align-center">
          <div className="columns small-10">
            <Gallery images={images} colWidth="25" />
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default IndexPage
