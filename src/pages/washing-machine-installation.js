import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const WashingMachineInstallationPage = () => (
  <Layout>
    <Seo
      title="Встановлення пралки у ванній"
      description="Порядок та особливості встановлення пралки у ванній під
      умивальником"
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Встановлення пралки у ванній</h1>
          <p className="lead">
            <strong>
              Порядок та особливості встановлення пралки у ванній під
              умивальником!
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
            Обов'язкова умова для встановлення пралки під умивальником – міцна
            та рівна основа. Не допускається підкладання під ніжки пральної
            машинки різних предметів для нівелювання перепадів висоти та
            нерівностей підлоги. Рекомендується під машинку постелити гумовий
            (антивібраційний) килимок, щоб вона не зміщувалася під час процесу
            віджимання білизни.
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Монтаж раковини</h2>
          <p>
            Для встановлення раковини у ванній над пральною машиною своїми
            руками будуть потрібні наступні інструменти:
          </p>
          <ul>
            <li>рулетка, будівельний рівень, маркер для розмітки;</li>
            <li>дриль чи перфоратор для свердління стін;</li>
            <li>набір ключів та викруток;</li>
            <li>
              силіконовий герметик та сантехнічне підмотування ущільнювач
              (наприклад, фум-стрічка);
            </li>
            <li>дюбелі для кріплення до стіни.</li>
          </ul>
          <p>
            Умивальники для монтажу над пралкою відносяться до навісного типу та
            встановлюються на кронштейни, що йдуть у комплекті з раковиною.
          </p>
          <p>
            Кронштейни повинні підходити до форми і конструктивних особливостей
            чаші, тому рекомендується вибирати моделі з кріпленнями, що йдуть в
            комплекті.
          </p>
          <p>Монтаж раковини провадиться в наступному порядку:</p>
          <ul>
            <li>
              розраховується висота кріплення раковини, після чого на цьому
              рівні проводиться розмітка для монтажу кронштейнів;
            </li>
            <li>у стіні просвердлюють отвори для дюбелів чи анкерів;</li>
            <li>
              кронштейни кріпляться до стіни, але не жорстко, а зі слабиною, щоб
              була можливість виставити чашу за рівнем;
            </li>
            <li>
              умивальник встановлюється на кронштейни, виставляється за рівнем у
              горизонтальній площині, після чого кріплення остаточно
              затягується.
            </li>
          </ul>
          <h2>Встановлення та підключення змішувача</h2>
          <p>
            Наступний крок –{" "}
            <Link to="/mixer-installation">
              встановлення змішувача на раковину
            </Link>
            . Його кріплення до чаші, залежно від конструкції, здійснюється
            шпильками або широкою гайкою. Гнучкі шланги повинні мати достатню
            довжину, щоб діставати до фітингів на водопровідних трубах.
          </p>
          <h2>Встановлення та підключення сифону</h2>
          <p>
            Сифон для раковини-кувшинки має специфічну конструкцію: відсутня
            колба, як у звичного сифона, а функцію гідро затвора виконує перегин
            зливального патрубка на 180°. Крім цього, у конструкції є спеціальне
            відведення для підключення зливного шлангу пралки.
          </p>
          <p>Складання сифона здійснюється в наступному порядку:</p>
          <ol>
            <li>
              Плоска колба встановлюється знизу чаші та фіксується болтом через
              сітку, розміщену зверху зливного отвору.
            </li>
            <li>
              Згідно зі схемою від виробника, збираються всі випускні патрубки.
            </li>
            <li>
              Гофрований патрубок вставляється у каналізаційний відвід діаметром
              50 мм. Для ущільнення з'єднання використовується гумова муфта, яка
              змащується силіконом. При необхідності патрубок подовжується за
              рахунок розтискання гофри, яка спочатку знаходиться в стислому
              стані.
            </li>
          </ol>
          <p>
            Порада! Всі гуми ущільнювачів і конуси в місцях з'єднань
            рекомендується змастити силіконовим герметиком, щоб забезпечити
            надійну фіксацію, але при цьому не сильно затягувати пластикові
            різьби.
          </p>
          <h2>Встановлення та підключення пралки</h2>
          <p>
            В останню чергу встановлюється пральна машина під раковиною у ванній
            кімнаті. Її установка проводиться у такому порядку:
          </p>
          <ol>
            <li>
              Машинка підсувається до умивальника, але не повністю присувається
              до стіни.
            </li>
            <li>
              Впускний шланг підключається до водопровідної системи (заздалегідь
              передбачається відведення з краном, що перекриває).
            </li>
            <li>
              Зливний шланг приєднується до вільного патрубка сифона. Для
              додаткової надійності з'єднання патрубок змащується герметиком, а
              шланг притискається хомутом.
            </li>
            <li>
              Злив із машинки підключається до окремого патрубка на сифонному
              зливі з умивальника.
            </li>
            <li>
              Після виконання всіх підключень пральна машинка засувається під
              умивальник, виставляється за рівнем за допомогою гвинтових ніжок.
              Робиться пробний запуск для перевірки герметичності всіх з'єднань.
            </li>
          </ol>
          <p>
            Незважаючи на деяку трудомісткість та незручність встановлення
            пралки під умивальником, для малогабаритних ванних кімнат у хрущовці
            це є єдиним реальним варіантом установки. Перед початком всіх робіт
            потрібно добре продумати розташування комунікацій, щоб забезпечити
            до них нормальний доступ під час монтажних робіт і в процесі
            експлуатації.
          </p>
          <br />
          <p>
            Телефонуйте, якщо необхідне встановлення пралки у Львові. Замовляйте{" "}
            <Link to="/call-plumber">виклик сантехніка</Link>. Пропонуємо
            широкий спектр сантехнічних робіт:{" "}
            <Link to="/shower-cabin-installation">
              встановлення душової кабіни
            </Link>
            ,{" "}
            <Link to="/heating-installation-apartment">
              монтаж опалення квартири
            </Link>
            , <Link to="/sewer-search">пошук каналізації</Link>.
          </p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default WashingMachineInstallationPage