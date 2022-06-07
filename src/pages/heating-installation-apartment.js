import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const CleanPage = () => (
  <Layout>
    <Seo
      title="Монтаж опалення квартири"
      description="Монтаж опалення квартири, будинку – переваги та недоліки різних систем"
    />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Монтаж опалення квартири</h1>
          <p className="lead">
            <strong>
              Монтаж опалення квартири, будинку у Львові та області –
              звертайтеся до нас!
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
            Виконуємо монтаж системи опалення квартири та будинку у Львові.
            Замовляйте, телефонуйте у будь-який час. Досвідчені майстри працюють
            у місті та по області. Використовуємо сучасне обладнання, тільки
            якісні матеріали. Займаємося усіма видами популярних опалювальних
            систем. Щоб власнику житла було легше зробити вибір, у статті
            розповідаємо про їх плюси та мінуси.
          </p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Тепла підлога</h2>

          <p>
            Створена на базі водяного опалення система «тепла підлога» −
            найпопулярніший варіант. Цей спосіб обігріти квартиру, будинок
            використовується і як допоміжний, і в якості основного. Ефективність
            «теплої підлоги» досить висока, адже вся поверхня підлоги є
            конвектором, що випромінює тепло.
          </p>
          <p>Переваги:</p>
          <ul>
            <li>
              Монтаж системи опалення квартири цього типу забезпечує рівномірне
              прогрівання повітря − комфортну температуру в будь-якому місці
              приміщення.
            </li>
            <li>
              Температуру легко контролювати за допомогою датчиків і
              терморегуляторів. Можна налаштувати прилади таким чином, щоб
              система сама регулювала інтенсивність обігріву в залежності від
              часу доби.
            </li>
            <li>
              Нагрівальні елементи приховані під покриттям підлоги й не
              потребують додаткового маскування.
            </li>
            <li>
              Оскільки труби сховані під кахельною плиткою або ламінатом, немає
              ризику отримання опіків.
            </li>
            <li>
              Водяне опалення підлоги в порівнянні з використанням батарей
              знижує втрати тепла на 20-30 %.
            </li>
          </ul>
          <p>Мінуси:</p>
          <ul>
            <li>
              У квартирі таку підлогу зробити не завжди вийде. Монтаж «мокрих»
              зон над житловими приміщеннями на нижніх поверхах не
              рекомендується.
            </li>
            <li>
              Стартові витрати на створення «теплої підлоги» досить високі. У
              суму витрат входять матеріали для гідроізоляції та бетонної
              стяжки, труби й фітинги, підлогове покриття плюс вартість монтажу.
            </li>
            <li>
              Імовірність протікання мізерно мала, але існує. Щоб знайти де
              протікає труба доведеться розбирати всю підлогу.
            </li>
          </ul>
          <h2>Електричне опалення</h2>
          <p>
            Електрика як джерело енергії під час встановлення опалення будинку
            найчастіше використовується з наступних причин:
          </p>
          <ul>
            <li>
              в дачному селищі відсутня можливість підключення до газової
              магістралі;
            </li>
            <li>холодна пора наступила раніше початку опалювального сезону.</li>
          </ul>
          <p>
            Електричні обігрівачі випускаються в різних модифікаціях − настінні
            та стельові панелі, переносні підлогові прилади різної потужності.
            Усі вони − інфрачервоні обігрівачі, масляні електрокаміни й
            конвектори, кондиціонери в режимі обігріву добре себе
            зарекомендували як допоміжне обладнання.
          </p>
          <p>Плюси застосування електрообладнання:</p>
          <ul>
            <li>
              кількість витратних матеріалів для монтажу конвекторів та панелей
              зведено до мінімуму;
            </li>
            <li>
              настінні конвектори та підлогові інфрачервоні обігрівачі можна
              легко переміщати та використовувати для обігріву кімнат, веранди
              або гаража;
            </li>
            <li>
              більшість моделей мають систему регулювання і таймер відключення,
              управляються дистанційно;
            </li>
            <li>
              у холодну пору року кондиціонери можна використовувати для
              обігріву, а влітку для охолодження повітря в приміщеннях.
            </li>
          </ul>
          <p>Негативні нюанси:</p>
          <ul>
            <li>
              обігрівачі споживають велику кількість електроенергії, що робить
              їх невигідними для постійного використання;
            </li>
            <li>
              конвектори та інші електрообігрівачі ефективні тільки для
              приміщень з невисокими стелями й надійною теплоізоляцією;
            </li>
            <li>
              підключення потужних опалювальних приладів створює високе
              навантаження, яке не кожна домашня електромережа витримає.
            </li>
          </ul>
          <h2>Монтаж парового опалення будинку</h2>
          <p>
            Принцип роботи парового опалення багато в чому схожий з роботою
            водяної опалювальної системи. Але замість води по трубах і
            радіаторах рухається гарячий пар. Залежно від продуктивності котла
            його температура досягає +130° С +200° С.
          </p>
          <p>До елементів для монтажу опалення підвищені вимоги:</p>
          <ul>
            <li>тільки спеціальні товстостінні безшовні труби зі сталі;</li>
            <li>
              радіатори опалення рекомендується ставити виключно чавунні,
              сталеві або труби-змійовики;
            </li>
            <li>
              оскільки всередині мережі знаходиться пар під великим тиском,
              монтаж такого опалення квартири, будинку вважається небезпечним і
              не часто використовується для обігріву житлових будинків.
            </li>
          </ul>
          <p>Плюси парового опалення:</p>
          <ul>
            <li>
              Висока продуктивність. Через температурну різницю пар у трубах
              конденсується. Процес супроводжується вивільненням великої
              кількості теплової енергії.
            </li>
            <li>
              Мала інерційність. Повітря в будівлі починає прогріватися
              практично відразу після запуску котла.
            </li>
            <li>
              Надійність. При відсутності в системі рідкого теплоносія
              трубопроводу не загрожує промерзання.
            </li>
          </ul>
          <p>Мінуси:</p>
          <ul>
            <li>
              Більшість будівельних і оздоблювальних матеріалів погано
              витримують вплив високих температур.
            </li>
            <li>
              Через ризик отримання опіків труби та радіатори закривають
              захисними екранами, що не завжди зручно.
            </li>
            <li>
              Відсутнє плавне регулювання температури. При перегріванні
              автоматика вимикає котел, а коли повітря в приміщенні охолоне
              знову включає.
            </li>
          </ul>
          <h2>Монтаж повітряного опалення квартири, будинку</h2>
          <p>
            Повітряне опалення працює зовсім за іншим принципом, ніж парове і
            водяне. Головним елементом є теплогенератор, який нагріває повітря
            до температури +60° С. Розгалужена повітряна магістраль подає гаряче
            повітря в кожне приміщення, де воно рівномірно розподіляється.
          </p>
          <p>
            У нижній частині стін або в підлозі монтуються решітки, через які
            остигле повітря виводиться назад до котла. За переміщення повітряних
            мас відповідає вентилятор. Нагрівання здійснюється за допомогою
            теплових насосів, газових або дизельних пальників.
          </p>
          <p>Плюси встановлення повітряного опалення:</p>
          <ul>
            <li>
              Мінімальні тепловтрати завдяки відсутності в системі проміжної
              ланки. Нагріте повітря відразу подається в повітроводи.
            </li>
            <li>Температура в кожному приміщенні легко регулюється.</li>
            <li>
              Зона обігрівання не зосереджена навколо обігрівальних приладів.
              Тепле повітря рівномірно циркулює по всіх приміщеннях.
            </li>
            <li>
              Труби та батареї не псують своїм виглядом інтер'єр приміщень.
            </li>
          </ul>
          <p>Мінуси:</p>
          <ul>
            <li>
              монтаж опалення повинен відбуватися паралельно з будівництвом
              будинку;
            </li>
            <li>
              при переході на інший теплоносій систему не вийде переробити.
            </li>
          </ul>
          <br />
          <p>
            Щоб професійно здійснити монтаж опалення у квартирі, будинку у
            Львові звертайтеся до нас. Гарантується висока якість роботи. Крім
            встановлення опалювальних систем надаємо різноманітні{" "}
            <Link to="/">послуги сантехніка</Link>. Займаємося опаленням,
            встановленням та{" "}
            <Link to="/drain-cleaning">прочисткою каналізації</Link>,
            водопостачанням.
          </p>
          <p>
            Детально{" "}
            <Link to="/heating-installation-private-house">
              монтаж опалення приватного будинку
            </Link>{" "}
            (види, способи).
          </p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default CleanPage
