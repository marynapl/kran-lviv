import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const CleanPage = () => (
  <Layout>
    <SEO title="Монтаж опалення приватного будинку"
      description="Монтаж опалення приватного будинку у Львові та області" />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Монтаж опалення будинку</h1>
          <p className="lead"><strong>Монтаж опалення приватного будинку у Львові та області – звертайтеся до нас!</strong>
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
            Опалювальна система − одна з найскладніших і найдорожчих інженерних систем будівлі. Тому, якщо не володієте необхідними знаннями та вміннями, монтаж опалення будинку у Львові обов’язково слід доручити дійсним професіоналам – досвідченим фахівцям Kran.lviv. Це гарантовано стане запорукою комфорту і затишку в оселі. Тому не гайте час, телефонуйте до нас.</p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Яке опалення вибрати</h2>
          <p>Питання опалення приватного будинку вирішується двома способами: підключення до центральної системи, або монтаж автономного опалення.</p>
          <p>При виборі потрібно орієнтуватися на:</p>
          <ul>
            <li>можливість підтримувати комфортну температуру в приміщеннях;</li>
            <li>вартість під’єднання і щомісячну оплату за тепло;</li>
            <li>ефективність, продуктивність;</li>
            <li>надійність, довговічність в експлуатації;</li>
            <li>особливі побажання замовника.</li>
          </ul>
          <p><strong>Варіанти підключення приватного будинку до центрального опалення: − «врізатися» в тепломережу безпосередньо; − через індивідуальний тепловий пункт.</strong></p>
          <p>Плюси центрального:</p>
          <ul>
            <li>якщо теплоносій не відповідає нормам, можна звернутися в наглядові органи, які врегулюють питання;</li>
            <li>при виникненні аварійної ситуації проблеми усуваються бригадою робітників у встановлені регламентом терміни;</li>
            <li>турботи по обслуговуванню обладнання лягають на профільні організації.</li></ul>
          <p>Мінуси:</p>
          <ul>
            <li>високий тиск, ризик гідроударів обмежують вибір радіаторів;</li>
            <li>навесні або восени, щоб прогріти будинок чи квартиру іноді доводиться використовувати електричні </li>
            <li>калорифери, теплові вентилятори;</li>
            <li>щомісяця потрібно віддавати кругленьку суму.</li>
          </ul>
          <p>Переваги автономної системи:</p>
          <ul>
            <li>роботи з прокладання та підключення опалення не потребують спеціальних дозволів;</li>
            <li>температура регулюється самостійно, незалежно від початку і закінчення холодного сезону;</li>
            <li>великий вибір енергетичних носіїв − газ, електрику, тверде або рідке паливо;</li>
            <li>можлива установка комбінованого котла, що працює від кількох енергоносіїв;</li>
            <li>грамотне проєктування, правильний монтаж опалення забезпечують високий ККД при низькій витраті енергоресурсів.</li>
          </ul>
          <p>Недоліки:</p>
          <ul>
            <li>деяким котлам потрібне спеціальне приміщення під котельню;</li>
            <li>ремонт і заміна обладнання, усунення неполадок виконується своїм коштом;</li>
            <li>якщо тепло йде від нагрівача на твердому або дизельному паливі необхідно постійно поповнювати запаси й облаштувати місце для зберігання дров, вугілля, пального.</li>
          </ul>
          <h2>Монтаж водяного опалення</h2>
          <p>Вважається найпоширенішим варіантом для обігріву будинків. Конструктивно, це замкнутий контур, усередині якого циркулює теплоносій.</p>
          <p>Головні елементи:</p>
          <ul>
            <li>котел,</li>
            <li>труби та радіатори,</li>
            <li>розширювальний бак.</li>
          </ul>
          <p>Обв'язка котла, радіаторів складається з:</p>
          <ul>
            <li>блоків безпеки, </li>
            <li>запірно-регулюючої арматури, </li>
            <li>клапанів, фітингів. </li>
          </ul>
          <p>Для підключення батарей використовується кілька комбінацій: </p>
          <ul>
            <li>однотрубна, </li>
            <li>двотрубна, </li>
            <li>променева.</li>
          </ul>
          <h2>Однотрубні системи</h2>
          <p>Монтаж опалення будинку цього типу добре підходить для обігріву невеликих котеджів, заміських будівель у два-три поверхи. Однотрубна мережа складається з єдиної лінії, до якої підключають необхідну кількість радіаторів. Теплоносій нагрівається у теплообміннику котла, проходить через всі опалювальні прилади, після чого, завершуючи коло, повертається назад.</p>
          <p>Плюси однотрубної схеми:</p>
          <ul>
            <li>низька ймовірність гідравлічних ударів;</li>
            <li>невелика витрата матеріалів;</li>
            <li>простий монтаж опалення будинку.</li>
          </ul>
          <p>Негативне:</p>
          <ul>
            <li>Радіатори, розташовані на різній відстані від водонагрівача, нагріваються неоднаково.</li>
            <li>Всі елементи залежать один від одного. Якщо в схемі монтажу опалення будинку не передбачені запірні клапани, то при виході з ладу одного радіатора, знадобиться повне відключення.</li>
            <li>Якщо в процесі проєктування або збирання мережі були допущені помилки на їх виправлення потрібно чимало часу.</li>
          </ul>
          <p>Принцип функціонування будь-якої водяної опалювальної системи заснований на теплообміні між носієм у магістралі й повітрям в приміщенні. Подача нагрітої води до радіаторів здійснюється двома методами: горизонтальними трубами або по вертикальному стояку. Вибір розводки залежить від архітектурних особливостей будівлі.</p>
          <h2>Горизонтальна однотрубна розводка</h2>
          <p>Монтаж опалення з горизонтальною розводкою труб найчастіше застосовується в багатоквартирних будинках, а також приватних котеджах в 1-2 поверхи.</p>
          <p>Переваги:</p>
          <ul>
            <li>спрощується контроль теплових витрат завдяки встановленій автоматиці;</li>
            <li>невелика вартість комплектувальних елементів;</li>
            <li>труби «ховаються» під стяжку і не псують своїм виглядом інтер'єр;</li>
            <li>нескладний безпосередньо монтаж опалення.</li>
          </ul>
          <p>Негатив, який спричиняє встановлення такої опалювальної системи:</p>
          <ul>
            <li>неможливо відрегулювати температуру індивідуально для кожного приміщення;</li>
            <li>при великій кількості приєднаних радіаторів знижується ККД;</li>
            <li>регулювати та настроювати іноді доводиться в ручному режимі.</li>
          </ul>
          <h2>Вертикальна однотрубна розводка</h2>
          <p>В опаленні вертикального типу роль теплового стояка виконують труби, по яких вода підіймається з нижнього поверху на верхній. Найчастіше цей монтаж опалення застосовується у багатоквартирних будинках. Подібні варіанти були популярні при будівництві «хрущовок», оскільки через невелику площу квартир монтувати горизонтальне опалення було недоцільно.</p>
          <p>Вертикальна однотрубна схема ефективна при наступних умовах:</p>
          <ul><li>кількість поверхів від п'яти й далі;</li>
            <li>якісна теплоізоляція будівлі;</li>
            <li>невелика площа кімнат.</li></ul>
          <p>Саме тому такий монтаж опалення не підходить для приватних будинків і котеджів.</p>
          <p>Плюси вертикальної схеми:</p>
          <ul>
            <li>працює без циркуляційної помпи,</li>
            <li>висока продуктивність,</li>
            <li>простота монтажу опалення.</li>
          </ul>
          <p>Мінус один, але досить значний − без надійної теплоізоляції та великої квадратури опалювальних приміщень − низький ККД.</p>
          <h3>«Ленінградка»</h3>
          <p>Ця схема розводки вважається однією з найлегших в монтажі. Принцип роботи відрізняється простотою − одна магістраль проходить по всіх приміщеннях і повертається до котла. «Ленінградка» має кілька модифікацій, що дозволяє застосовувати цей монтаж опалення будинку як для багатоповерхівок, так і для приватних одноповерхових споруд.</p>
          <h2>Варіанти монтування однотрубної опалювальної схеми</h2>
          <p>Монтаж опалення будинків таких типів:</p>
          <ul>
            <li>Природна циркуляція. Теплоносій рухається завдяки температурній різниці.</li>
            <li>З однією помпою. За подачу нагрітої води до радіаторів відповідає циркуляційний насос.</li>
            <li>Дві помпи. Застосовують для розводки з двома лініями.</li>
          </ul>
          <p>Ці схеми експлуатуються кілька десятиріч і за цей час повною мірою проявилися їхні переваги та недоліки. За допомогою сучасних технічних засобів недосконалості мінімізуються, а в деяких випадках повністю ліквідуються.</p>
          <p>Позитив:</p>
          <ul>
            <li>використання якісної запірно-регулювальної арматури, термодатчиків і клапанів до 30 % знижує втрати тепла;</li>
            <li>на відміну від громіздких двотрубних систем для облаштування «ленінградки» потрібно рівно у два рази менше труб.</li>
          </ul>
          <p>Мінуси:</p>
          <ul>
            <li>як і інші однотрубні конструкції «ленінградка» не дозволяє регулювати температуру на окремих радіаторах;</li>
            <li>при підключенні до контуру великої кількості опалювальних приладів, без циркуляційного насоса не обійтися.</li>
          </ul>
          <h2>Двотрубні системи</h2>
          <p>Монтаж двотрубного опалення будинку має особливість − наявність двох контурів. Одна лінія призначена для подачі гарячої води до всіх опалювальних приладів, другою охолоджений теплоносій повертається до котла.</p>
          <p>Єдиним значним мінусом такої схеми в порівнянні з однотрубною вважається велика витрата комплектувальних компонентів.</p>
          <p>Однак варто враховувати, що при організації двотрубних варіантів використовуються труби й фітинги меншого діаметру, ціна яких набагато нижча. При закупівлі матеріалів підсумкова сума дійсно буде більше, але не набагато.</p>
          <p>Плюси:</p>
          <ul>
            <li>На кожну батарею ставиться терморегулятор. З його допомогою в автоматичному режимі підтримується оптимальний температурний режим в кожній кімнаті.</li>
            <li>Якщо розрахувати вірно, виконати монтаж опалення правильно, всі прилади отримують тепловий носій однакової температури. Не виникає ситуацій, коли найдальший радіатор найхолодніший.</li>
          </ul>
          <p>Мінуси:</p>
          <ul>
            <li>через складність, проєктування та монтаж опалення будинку повинні робити фахівці;</li>
            <li>у порівнянні з однотрубними схемами на створення двотрубного йде набагато більше часу.</li>
          </ul>
          <h2>З нижнім розведенням</h2>
          <p>За типом розводки буває нижньою і верхньою. При нижньому розведенні обидві труби йдуть над підлогою, паралельно одна одної. При цьому труба, що подає, розташовується вище зворотного потоку. Вода, як правило, циркулює завдяки помпі.</p>
          <p>Труби монтуються відкритим способом, укладаються під стяжку підлоги або розміщуються в підвальному приміщенні. В останньому випадку підводка теплоносія здійснюється через отвори в підлозі.</p>
          <p>Переваги:</p>
          <ul>
            <li>виконувати монтаж опалення будинку можна як під час будівництва, так і після закінчення основних робіт;</li>
            <li>відрізняється високим ККД, доброю продуктивністю, ефективністю;</li>
            <li>комунікації можна «заховати» під стяжкою, підлогою.</li>
          </ul>
          <p>Мінуси:</p>
          <ul>
            <li>вода або антифриз, які циркулюють в трубопроводах, не здатні створити потрібного тиску;</li>
            <li>седільне й одностороннє підключення вимагає додаткових робіт по оптимізації;</li>
            <li>кожен радіатор повинен бути оснащений пристроєм для видалення повітря.</li>
          </ul>
          <h2>З верхнім розведенням</h2>
          <p>Особливість − труба що подає проходить по верху, а вже від неї теплоносій прямує до батареї. Зворотний трубопровід прокладається уздовж підлоги.</p>
          <p>Монтаж опалення приватного будинку цього типу робиться без застосування циркуляційного насоса. Для того, щоб теплоносій рухався з потрібною швидкістю достатньо створення ухилу під певним кутом.</p>
          <p>Плюси:</p>
          <ul>
            <li>при правильно виконаних розрахунках і мінімальній кількості поворотів працює з відмінними гідродинамічними показниками;</li>
            <li>верхній трубопровід можна приховати за підвісною або натяжною стелею, нижній − під стяжкою;</li>
            <li>системи, що працюють без насоса на твердому або дизельному паливі, дозволяють створити повністю автономне опалення.</li>
          </ul>
          <h2>Променева система з колекторами</h2>
          <p>Під’єднання кожного опалювального приладу до котлів здійснюється за допомогою колектору. Він влаштований таким чином, щоб забезпечити необхідну кількість вхідних і вихідних патрубків. Може складатися з декількох елементів, число відводів на яких варіюється від двох до дванадцяти.</p>
          <p>Монтаж опалення будинку виконується таким чином, що для кожного радіатора призначається окрема пара труб − для подачі теплоносія й зворотно. Якщо більше одного поверху, то монтують по поверхову розводку, кількість колекторів відповідає кількості поверхів.</p>
          <p>Позитивні моменти:</p>
          <ul>
            <li>немає розкиду температур між радіаторами в різних приміщеннях.</li>
            <li>зручне управління створює у кожній кімнаті індивідуальний мікроклімат;</li>
            <li>труби укладаються в стяжку або штроби й не псують дизайн приміщень;</li>
            <li>опалювальні прилади працюють незалежно один від одного, що спрощує їх ремонт або заміну.</li>
          </ul>
          <p>Негативні нюанси:</p>
          <ul>
            <li>попри те, що з'єднання батареї з котлом виконується по як найкоротшій відстані, витрата труб буде у 2-3 рази вище, ніж при однотрубному або двотрубному варіанту;</li>
            <li>якщо робиться такий монтаж опалення в будинку, заливати стяжку з трубами треба на етапі будівництва, для їх прокладання в уже готову підлогу потрібно руйнувати бетон;</li>
            <li>не енергонезалежна, оскільки працює тільки з електричним насосом.</li>
          </ul>

          <h2>З природною циркуляцією</h2>
          <p>За способом переміщення теплоносія монтаж опалення будинку буває з природною та примусовою циркуляцією. У першому випадку рідина рухається завдяки силі гравітації та розширення теплоносія при підвищенні температури. У схемах з примусовою циркуляцією електричний насос спонукає рідину рухатися всередині контуру.</p>
          <p>Переваги природної циркуляції:</p>
          <ul>
            <li>при обігріві площі 60-80 м² вона є найефективнішою;</li>
            <li>при відсутності помпи монтаж опалення будинку здійснюється незалежно від зовнішніх чинників.</li>
          </ul>
          <p>Недоліки природної циркуляції теплоносія:</p>
          <ul>
            <li>потрібна висока точність розрахунків і монтування для дотримання необхідного ухилу по всій протяжності трубопроводу;</li>
            <li>повороти та відгалуження збільшують опір і зменшують продуктивність опалювальної мережі;</li>
            <li>через високу інерційність системи потрібно кілька годин, щоб прогріти будинок.</li>
          </ul>

          <h2>Монтаж опалення з примусовою циркуляцією теплоносія</h2>
          <p>Працює внаслідок роботи насоса, який штовхає воду і створює потрібний тиск. Це хоча й ускладнює конструкцію, але разом з тим дає чимало переваг:</p>
          <ul>
            <li>спрощуються гідравлічні розрахунки, не потрібно дотримуватися ухилів і рівнів;</li>
            <li>для встановлення опалення застосовуються труби та фітинги меншого діаметру, вони й коштують дешевше;</li>
            <li>якщо два поверхи й більше, то варіант з циркуляційним агрегатом є єдино доступним і ефективним способом подавання на верхній поверх теплоносія з потрібним тиском;</li>
            <li>помпа робить мережу більш надійною − можна не боятися що через зрив конвекції вода припинить рухатися по трубах.</li>
          </ul>
          <p>Виникнення негативних ситуацій практично зводиться до нуля:</p>
          <ul>
            <li>Залежність від електроенергії. Якщо проводяться планові роботи або стався обрив електропроводу помпа зупиняється, вода в казані закипає. Це питання легко вирішується підключенням насоса до ДБЖ.</li>
            <li>Помпа «мотає» електрику. Її робота збільшує продуктивність опалювальної системи. Завдяки відмінній циркуляції та низькій інерційності на обігрів приміщень і підтримання потрібної температури йде набагато менше енергоресурсів.</li>
            <li>Насос починає шуміти. Сучасне обладнання працює практично безшумно. При цьому ймовірність гідроударів і різких перепадів температури, які шкодять радіаторів і теплообміннику, зведена до нуля.</li>
          </ul>
          <br />
          <p>Телефонуйте! Виконуємо монтаж опалення будинку у Львові та області якісно, швидко. <strong>Весь обсяг робіт від початку й до кінця – «ПІД КЛЮЧ»</strong>. Кожен етап роботи продуманий до дрібниць. В результаті житло буде радувати затишком та зниженою вартістю оплати за комунальні послуги.</p>
          <p>Пам’ятайте. Правильно обрана схема, професіонально здійснений монтаж опалення в приватному будинку забезпечать теплом всі кімнати в найхолодніший період року.</p>
          <p>Також пропонуємо різноманітні <Link to="/">послуги сантехніка Львів</Link>.</p>

        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default CleanPage
