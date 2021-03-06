import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const BathsPage = () => (
  <Layout>
    <Seo
      title="Ванни: чавунні, сталеві, акрилові"
      description="Встановлення ванни у Львові – звертайтеся у
      Kran.lviv.ua."
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Ванни: чавунні, сталеві, акрилові</h1>
          <p className="lead">
            <strong>
              Встановлення ванни у Львові – звертайтеся у Kran.lviv!
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
            Що перебуватиме у ванній кімнаті — кожна людина вирішує
            індивідуально, відповідно до свого смаку та запитів.{" "}
            <strong>
              І все ж таки головне, чим потрібно керуватися у виборі
              санітарно-технічних виробів − це комфорт, гігієнічність та
              зручність
            </strong>
            . У забезпеченні цього важливе місце належить ванні. Тому потрібно
            правильно вибирати цей сантехнічний прилад. Володіти необхідною
            інформацією.
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Ванна</h2>

          <p>
            Сучасні дизайнери найчастіше пропонують незвичайні, а часом і
            екстравагантні форми ванн. Вибір широкий і треба добре подумати, яку
            ванну придбати. Адже правильність вибору матеріалу та форми ванни −
            запорука не тільки її естетичної досконалості, але й зручності для
            повсякденного користування, відчуття комфорту.
          </p>
          <p>
            Матеріали ж для виготовлення ванн використовуються різноманітні.
            Конструкції бувають теж різні. Особливо цінуються ванни за
            анатомічність, тобто, наближеність до форм людського тіла. Саме
            цього й прагнуть виробники.
          </p>
          <p>
            Стисло розкажемо о популярних ваннах, о їх відмінностях. Таким чином
            спробуємо допомогти зорієнтуватись у правильному виборі ванни для
            оселі.
          </p>

          <h2>Чавунні ванни</h2>

          <p>
            Ними досі користується багато людей. Ці ванни популярні на усіх
            континентах. Адже чавун має добрі якості:
          </p>
          <ul>
            <li>високу стійкість до корозійних процесів;</li>
            <li>тривале зберігання;</li>
            <li>терміни експлуатації – пів століття.</li>
          </ul>
          <h2>Сталеві ванни</h2>

          <p>
            Вони не дорогі, відносно. Не важкі. Головна незручність — рідина при
            наливанні видає гучні звуки. Для запобігання такому ефекту
            встановлюються прокладки з гуми, але не завжди досягається 100 %
            результативність.
          </p>
          <p>
            Також, сталь швидко остигає. Метал у хороших ванн повинен товщиною
            бути ≥ 3,5 мм.
          </p>
          <p>
            Відрізнити сталеву від чавунної ванну − постукати по краю. Чути
            своєрідний бляшаний звук.
          </p>

          <h2>Акрилова ванна</h2>

          <p>
            Акрил – це полімерний матеріал (порошок або пудра), який у поєднанні
            зі спеціальною рідиною перетворюється на густу масу, що швидко
            застигає. Це − основний матеріал при виготовленні сучасних гідро
            масажних ванн високої якості.
          </p>
          <p>
            Акрил має дуже високий рівень опору на знос, не збирає мікроби, його
            легко чистити. Еластична структура робить такі вироби дуже міцними.
            Якщо на поверхні з'явиться подряпина або інше пошкодження, це легко
            виправити за допомогою тонкого наждачного паперу. Потім
            відполірувати ушкоджене місце автомобільним лаком.
          </p>
          <p>
            Акрилова ванна завжди зберігає блиск. Акрил має структуру
            ізоляційного матеріалу − низькі теплопровідні властивості. Тому у
            порожньої акрилової ванни температура відповідає температурі
            приміщення, в якому вона знаходиться.
          </p>
          <p>
            Транспортні перевезення та монтаж акрилових ванн і душових кабін не
            складні. Ванну з акрилу легко може підняти одна людина. Ще одна
            перевага: не слизька поверхня. На відміну від ванн, покритих емаллю.
            Цим забезпечується травмо безпечність.
          </p>
          <p>
            Акрилова гідромасажна ванна − це корпус, що складається з шарів:
          </p>
          <ul>
            <li>акрилу,</li>
            <li>армувального матеріалу,</li>
            <li>матеріалу, призначеного для посилення міцності корпуси.</li>
          </ul>
          <p>
            Загальна товщина акрилової ванни − 7-9 мм. Акрилову ванну
            виготовляють із листа. Його нагрівають, а потім надають форму ванни.
            Дно акрилової ванни зміцнюють. На бічні поверхні акрилової ванни
            напилюють поліефірні смоли та скловолокно. Процес зміцнення
            акрилової ванни називають армуванням.
          </p>
          <br />
          <p>
            Далі продовжимо розповідати о ваннах – гідромасажні, кварилові та
            дерев’яні ванни.
          </p>
          <p>
            Також треба знати. Встановлення ванни у Львові – звертайтеся у{" "}
            <Link to="/">Kran.lviv.ua</Link>. Гарантуємо якість, доступні ціни,
            швидкість. Виконуємо усі види сантехнічних робіт.
          </p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default BathsPage
