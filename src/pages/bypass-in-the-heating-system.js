import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const BypassInTheHeatingSystemPage = () => (
  <Layout>
    <Seo
      title="Байпас у системі опалення приватного будинку"
      description="Влаштування байпасу на опалення. Виконуємо монтаж опалення у Львові"
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Байпас у системі опалення приватного будинку</h1>
          <p className="lead">
            <strong>Виконуємо монтаж опалення у Львові.</strong>
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
            На сьогодні великий попит мають автономні опалювальні системи. Люди
            все частіше не хочуть ні від кого залежати і розуміють, яку перевагу
            вони від цього одержують. Однак, щоб система опалення справно
            функціонувала, її потрібно правильно зібрати. У статті досвідчений
            львівський сантехнік розповідає, як встановити байпас у систему
            опалення приватного будинку.
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Влаштування байпасу на опалення</h2>
          <p>
            <strong>
              Байпас на опалення – спеціальна перемичка, зварена найчастіше з
              двох шматків сталевої труби
            </strong>
            . На кінцях перемички знаходиться запірна арматура, між якою
            встановлений циркуляційний насос.{" "}
            <strong>
              Головне призначення байпасу – регулювання теплоносія в автономній
              системі опалення
            </strong>
            .
          </p>
          <p>
            Окрім регулювання теплоносія та повернення його назад у стояк
            опалення, коли це необхідно, у байпасу на опалення також є дуже
            важлива функція при раптовому зникненні в будинку електрики. Без неї
            неможлива робота циркуляційних насосів, і тоді, щоб теплоносій
            самопливом перетікав би по трубах опалення, байпас переводиться в
            ручний режим.
          </p>
          <h2>Як вибрати байпас на опалення</h2>
          <p>
            <strong>
              Важливо вибрати байпас на опалення відповідного діаметра, в іншому
              випадку, можливе зниження теплоносія, що перекачується через нього
            </strong>
            . Найкраще вибирати байпас з таким діаметром, який приблизно
            дорівнює діаметру опалювальних труб, ну або трохи менше них.
          </p>
          <p>За своєю конструкцією, байпаси на опалення бувають двох видів:</p>
          <ul>
            <li>байпаси на опалення зі зворотним клапаном;</li>
            <li>байпаси на опалення без зворотного клапана.</li>
          </ul>
          <p>
            Байпас на опалення зі зворотним клапаном, доцільно використовувати
            разом із циркуляційним насосом та встановленою автоматикою. Коли,
            наприклад, автоматично вмикається циркуляційний насос, зворотний
            клапан, встановлений на байпасі автоматично відкриває і перекриває
            прохід теплоносію.
          </p>
          <h2>Правила встановлення та регулювання байпасу</h2>

          <p>
            Байпас на опалення без зворотного клапана відкривається і
            закривається в ручному режимі. Для цього встановлюється запірна
            арматура у вигляді кульових кранів.
          </p>
          <p>
            Перекривши кульовий кран, користувачеві вдасться зробити, наприклад,
            ремонт в якійсь одній частині опалювальної системи, не вимикаючи
            повністю для цього всю систему опалення.
          </p>
          <p>
            <em>
              Автоматичний байпас на опалення важливо вибирати трохи меншого
              діаметру, ніж діаметр опалювального стояка у будинку. Якщо не
              дотримуватись цього правила, то може виникнути більший
              гідравлічний опір в магістралях опалення та радіаторах, ніж у
              встановленому байпасі. В такому випадку, можлива повна відсутність
              циркуляції теплоносія, а робота опалювальної системи в цілому
              стане в кращому разі неефективною.
            </em>
          </p>
          <p>
            Впродовж теми подивіться також наш огляд «
            <Link to="/heating-installation-private-house">
              Монтаж опалення приватного будинку
            </Link>
            ».
          </p>
          <br />
          <p>
            Якщо потрібне встановлення байпаса у Львові телефонуйте нам. Також
            надаємо різноманітні <Link to="/">послуги сантехніка</Link> Львів:{" "}
            <Link to="/drain-cleaning">прочистка каналізації</Link>;{" "}
            <Link to="/heating-installation-apartment">
              монтаж опалення квартири
            </Link>
            ;{" "}
            <Link to="/gas-boiler-installation">
              встановлення газового котла
            </Link>
            ; <Link to="/radiator-replacement">заміна радіаторів опалення</Link>
            ;{" "}
            <Link to="/video-diagnostics">
              відеодіагностика каналізаційних труб
            </Link>
            .
          </p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default BypassInTheHeatingSystemPage
