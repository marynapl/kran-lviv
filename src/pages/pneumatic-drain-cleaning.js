import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const PneumaticDrainCleaningPage = () => (
  <Layout>
    <Seo
      title="Пневматичне прочищення каналізаційних труб"
      description="Пневматичне прочищення каналізаційних труб Львів"
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Пневматичне прочищення каналізації</h1>
          <p className="lead">
            <strong>
              Пневматичне прочищення каналізаційних труб у Львові – звертайтеся
              до нас!
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
            Пневматичне прочищення каналізаційних труб ‒ сучасний ефективний
            спосіб усування засмічення в мережах невеликих діаметрів і досить
            великої довжини. Особливо такий метод актуальний для прочистки
            систем каналізації складної конфігурації, у які неможливо
            протискувати шланг, або сантехнічний трос. Також добре підходить для
            чистки тонких і довгих трубопроводів.
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Коли застосовується пневматичне прочищення труб</h2>
          <p>
            Пневматична прочистка каналізаційних труб актуальна для сололіфтів
            (каналізаційні насоси), де як правило використовуються
            поліпропіленові труби з прямими кутами. Прочистити їх звичайними
            прийомами мало реально.
          </p>
          <p>
            Трапляється так, що сантехнік який ремонтує каналізаційний насос,
            все виправив, але засмітилося відведення води у каналізаційну
            мережу. Ось саме в такій ситуації допоможемо прочистити каналізацію
            пневматичним способом.
          </p>
          <p>
            Пневматичне прочищення труб ліквідує засмічення й у трубопроводів з
            кухні діаметром п'ятдесят і сорок міліметрів. Також у приватних
            будинках і квартирах з нестандартним плануванням, де кухонні
            каналізаційні системи з безліччю поворотів мають велику довжину.{" "}
          </p>
          <p>
            Ефективне пневматичне прочищення унітазу. Коли він засмічений
            папером та іншими речами, прочистка пневматичним методом допоможе
            позбавитися неприємної проблеми. Все робиться чисто й акуратно!
          </p>
          <p>
            Пневматичне прочищення каналізаційних труб застосовується, коли
            немає можливості використовувати інші варіанти боротьби з
            засміченням стояка (відсутня ревізія, немає іншого доступу). Але
            прочистка стояка каналізації пневматичним способом (продування
            повітрям) досить трудомістка і не дешева робота. Вона доцільна при
            відсутності інших можливостей очищення.
          </p>
          <h2>Що це – пневматичне прочищення труб каналізації</h2>
          <p>
            <strong>
              Усунення засмічення каналізації спеціальним апаратом (сантехнічним
              пневмо пістолетом) шляхом створення високого тиску
            </strong>
            . У каналізаційну трубу через пневматичну насадку подається сильний
            потік стисненого повітря, що пульсує. Воно руйнує пробки, які
            утворилися у мережі.
          </p>
          <p>
            Зручно тим, що під час прочищення каналізаційних труб не треба
            розбирати трубопровід, або знімати унітаз. Ліквідація засмічення
            здійснюється повітряним точковим пострілом через унітаз, умивальник,
            ванну або трубу.
          </p>
          <p>
            Пневмопістолет відмінно справляється з забрудненням, яке виникає
            через велику кількість поворотів, жирових відкладень або сторонніх
            предметів.
          </p>
          <h2>Чому ми</h2>
          <p>
            Майстри з багаторічним досвідом роботи оперативно та якісно
            здійснюють прочищення каналізаційних труб пневматичним способом.
            Також маємо у своєму розпорядженні різноманітне обладнання для
            прочистки каналізаційної системи будь-якими методами:
          </p>
          <ul>
            <li>пневматична чистка;</li>
            <li>
              <Link to="/hydrodynamic-drain-cleaning">
                гідродинамічна прочистка каналізації
              </Link>
              ;
            </li>
            <li>механічне очищення трубопроводів.</li>
          </ul>
          <p>
            Завжди гарантуємо позитивний результат. Працюємо щоденно, включно
            святкові дні. Аварійні виклики цілодобово.{" "}
            <Link to="/drain-cleaning">Прочистка каналізації</Link> робиться
            усіма способами. Дзвоніть.
          </p>
          <br />
          <p>
            Детальніше <Link to="/">послуги сантехніка</Link> Львів.
          </p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default PneumaticDrainCleaningPage
