import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const PlumbingWorkPage = () => (
  <Layout>
    <Seo
      title="Сантехнічні роботи у Львові"
      description="Якщо потрібно виконати сантехнічні роботи у Львові, зв'яжіться з
      нами й ми з радістю Вам допоможемо."
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Сантехнічні роботи у Львові</h1>
          <p className="lead">
            <strong>
              Потрібно виконати сантехнічні роботи у Львові – звертайтеся до
              нас!
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
            Сантехнічні роботи − один із найважливіших та необхідних видів
            ремонтних робіт, що проводиться з метою забезпечення безпеки та
            комфорту мешканців квартир та приватних будинків. Сантехніка включає
            безліч різноманітних операцій, від дуже простих до найскладніших,
            починаючи від встановлення нових сантехнічних приладів до ремонту
            наявних пристроїв.
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Сантехнічні роботи</h2>
          <p>
            Основні типи сантехнічних робіт − установка і ремонт системи
            водопостачання, каналізації, і опалення. Водопостачання забезпечує
            достатню кількість холодної та гарячої води для приготування їжі та
            інших домашніх потреб.
          </p>
          <p>
            Каналізація виконує функцію збирання та передавання відходів у місце
            їх відведення.
          </p>
          <p>
            Опалення надає тепло для забезпечення комфортних умов
            життєдіяльності у зимовий період.
          </p>
          <p>
            При проведенні сантехнічних робіт важливо, щоб роботи виконувалися
            професійно. Також треба дотримуватись всіх відповідних
            санітарно-епідеміологічних норм та вимог. Неправильно зроблені
            сантехнічні роботи можуть призвести до втрати ресурсів, а також
            негативних наслідків для здоров'я та безпеки.
          </p>
          <p>
            Сантехнічні роботи вимагають уваги, досвіду та професійних умінь.
            Вони повинні виконуватися з високим рівнем якості, а для цього
            необхідно довірити роботу професійним сантехнікам. Тільки досвідчені
            фахівці зможуть правильно оцінити складність роботи та якісно
            виконати сантехнічні роботи.
          </p>
          <p>
            Телефонуйте нам, щоб викликати досвідченого сантехніка, який виконає
            сантехнічні роботи у Львові якісно, швидко, недорого. Також
            пропонуємо інші послуги сантехніка:{" "}
            <Link to="/drain-cleaning">прочистка каналізації</Link> Львів,{" "}
            <Link to="/shower-cabin-installation">
              установка душової кабіни
            </Link>
            , монтаж теплої водяної підлоги, встановлення біде,{" "}
            <Link to="/bathtub-installation">установка ванної</Link> та{" "}
            <Link to="/installing-toilet">унітазу</Link>,{" "}
            <Link to="/water-meter-installation">лічильника води</Link>.
            Звертайтеся у будь-який час. Сантехнічні роботи у Львові виконуються
            щоденно, включно у вихідні та святкові дні.
          </p>
          <p>
            Також ми займаємося установкою та під’єднанням посудомийних та
            пральних машин.
          </p>
          <p>
            Наша компанія працює з професійними сантехніками, які мають
            багаторічний досвід виконання сантехнічних робіт у Львові. Ми завжди
            узгоджуємо з клієнтом розклад та пропонуємо конкурентоспроможні ціни
            на сантехнічні роботи.
          </p>
          <p>
            Працюємо з найкращими матеріалами та забезпечуємо дотримання всіх
            необхідних стандартів якості. Пропонуємо великий вибір сантехніки та
            приладів, які використовуються для заміни або ремонту. Ми завжди
            готові до допомоги та забезпечуємо кваліфікований сервіс.
          </p>
          <p>
            Якщо потрібно виконати сантехнічні роботи у Львові, зв'яжіться з
            нами й ми з радістю Вам допоможемо.
          </p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default PlumbingWorkPage
