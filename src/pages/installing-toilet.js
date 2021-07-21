import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const InstallingToiletPage = () => (
  <Layout>
    <SEO title="Встановлення унітаза"
      description="Встановлення унітаза у Львові у 5 етапів" />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Встановлення унітаза</h1>
          <p className="lead"><strong>Встановлення унітаза у Львові у 5 етапів – звертайтеся до нас!</strong>
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
          <p className="text-center">Встановлення унітазу у туалеті повинно проводитися дуже якісно. Інакше прилад не зможе успішно функціонувати, і від нього будуть самі тільки проблеми. Тому краще викликати майстра. Телефонуйте до <Link to="/">Kran.lviv.ua</Link> ‒ професіонал сантехнік оперативно прибуде та здійснить монтаж цього сантехнічного пристрою. Виклик можна здійснювати у будь-який день, включно у неділю.</p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Підключення унітазу до каналізації: матеріали та особливості</h2>
          <p>Іноді, при установці сантехнічних виробів цього типу застосовуються фанові труби. Зазвичай же, підключення унітазу до каналізаційної системи здійснюють:</p>
          <ul>
            <li>елементами з гофри;</li>
            <li>ексцентриковими манжетами;</li>
            <li>пластиковими відведеннями.</li>
          </ul>
          <p>Треба знати деякі нюанси монтажу. Манжети з гофри, якими проводиться підключення унітазу до каналізації, гнуться під будь-якими кутами, витягуються у довжину. Манжети ексцентрикові лише повертаються стосовно осі, щоб компенсувати співвісність при з'єднанні труб.</p>
          <p><em>Якщо для встановлення унітазу беруться фанові труби, то з'єднання унітазу з каналізацією відбувається під кутами в 30-40°, або 90°. Не підходить таке ‒ використовуються перехідники.</em></p>
          <p>Унітаз після підключення до каналізації закріплюється на підлозі болтами та гайками. Прикрипівши, підключають до системи водопостачання. Закінчили, унітаз готовий до використання за прямим функціональним призначенням.</p>
          <p>Унітазний бачок кріпиться двома болтами на гумових прокладках. Всередині встановлюють прокладки, а болтами зовні затягують. Важливо знати міру і не затягувати дуже сильно. Адже бачок, або корпус унітазу, на якому він кріпиться, можуть тріскатися.</p>
          <p>Герметичність бачка під час встановлення унітазу перевіряється наливанням рідини, після необхідно зачекати 5-10 хвилин, перевірити, чи є підтікання. Якщо все нормально, підключається вода гнучкою підводкою.</p>
          <p>На шланг, на трубопровід між бачком унітазу та водопроводом встановлюється кран для відкривання та закриття води. Він необхідний у разі ремонтних робіт, а також для виконання правил безпеки. Наприклад, для перекриття води при тривалої відсутності господарів житла.</p>
          <p>До підведення води до унітаза слід відноситися дуже уважно, бо в разі помилок, вона постійно надходить у бак. Це у свій час призведе до затоплювання своєї квартири, а потім сусідньої.</p>
          <p>Існує два види підводки:</p>
          <ul>
            <li>знизу баків (потребує якіснішої герметизації);</li>
            <li>бічна (зустрічається найчастіше при встановленні унітазів старіших конструкцій).</li>
          </ul>
          <h2>Демонтаж унітаза</h2>
          <p>Звичайно установка унітаза починається з демонтажу старого сантехнічного приладу:</p>
          <ul>
            <li>зливається вода;</li>
            <li>відкручуються болти;</li>
            <li>від'єднується каналізаційна труба;</li>
            <li>знімається бачок;</li>
            <li>прибирається унітаз.</li>
          </ul>
          <p>Щоб сантехнічний пристрій справно функціонував, служив протягом тривалого часу, необхідно виконати всі необхідні операції щодо підключення унітаза. Дзвоніть нам. Майстер сантехнік все зробить правильно.</p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default InstallingToiletPage
