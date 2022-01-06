import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Nav from "../components/nav"
import Call from "../components/call"

const JacuzziInstallationPage = () => (
  <Layout>
    <SEO title="Установка джакузі"
      description="Установка джакузі у Львові всередині приміщення і на вулиці" />

    <section className="banner-container">
      <div className="row">
        <div className="columns small-12">
          <h1>Установка джакузі</h1>
          <p className="lead"><strong>Установка джакузі у Львові всередині приміщення і на вулиці – звертайтеся до нас!</strong>
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
            Повітряно-водний вплив ванни з гідромасажем тонізує, знімає
            напруження, розслаблює, покращує самопочуття, а різноманітні добавки
            добре впливають на шкіру, налагоджують кровообіг. Отже, беззаперечно,
            якщо можливість є, потрібна установка джакузі. Але це досить складно, тому
            обов’язково викликайте фахівців з Kran.lviv.ua. Вони найкращі у такій справі
            у Львові.</p>
          <p className="text-center">
            У статті детально викладаються тонкощі підключення гідро масажної
            ванни до каналізації, водопроводу й електропостачання. Пропонуються
            корисні поради щодо догляду та грамотної експлуатації цього сантехнічного
            приладу.</p>
          <hr className="margin-bottom-2x margin-top-2x" />
        </div>
      </div>
      <div className="row align-center">
        <div className="columns small-12 medium-8 large-8">
          <h2>Як вибрати джакузі</h2>
          <p>Вибір моделі гідро масажної ванни залежить від розмірів і форми
            приміщень, у яких вона повинна розташовуватися та експлуатуватися.
            Безпосередньо монтаж джакузі супроводжується деякими складнощами, а
            функціонування має певні нюанси:</p>
          <ol>
            <li>Не рекомендується встановлення ванни з гідромасажем у житлових
              квартирах багатоповерхівок. За технічними характеристиками
              будинку необхідно оцінити допустиму силу навантаження, яке
              доведеться витримувати підлозі. Навіть найлегший виріб, наповнений
              водою, може важити понад 800 кг, а це стає причиною обвалювання.</li>
            <li>Інколи щоб встановити джакузі доводиться об'єднувати туалет з ванною
              кімнатою.</li>
            <li>Форсунки чутливі до присутності заліза у рідині, тому важливо мати
              додаткові фільтрувальні елементи на гаряче і холодне водопостачання.</li>
            <li>Приймаючи водні процедури, користуватися милом не треба. Не
              потрібні гель та шампунь, взагалі пінні розчини, якими забиваються
              отвори. Тому, крім встановлення джакузі, у квартирі, щоб купатися,
              потрібна звична ванна.</li>
            <li>Монтаж ванни з гідромасажем відмінно вписується в заміську
              нерухомість. Її можна розмістити у закритому приміщенні,
              передбачивши для купання відокремлену кімнату. На прибудинкових
              терасах або біля дому.</li>
            <li>Важливо придбати модифікацію, пристосовану конкретно для
              вуличного облаштування.</li>
            <li>Перед купівлею гідро масажної ванної необхідно накреслити схему
              місця, в якому її планується розташовувати. На ній вказати розміри
              приміщення, а також розміщення водопровідних і електричних мереж.
              Залежно від цього здійснюємо вибір ванни й комплектувальних
              елементів.</li>
          </ol>
          <p>Чаші джакузі за видами матеріалів:</p>
          <ul>
            <li>чавунні,</li>
            <li>з акрилу,</li>
            <li>сталеві,</li>
            <li>кам'яні.</li>
          </ul>
          <p>Для встановлення джакузі у квартирах рекомендуються легкі прилади ‒
            зі сталі чи акрилові. З чавуну та кам'яні моделі монтують виключно на міцних
            фундаментних основах, здатних витримувати майже тонну ваги.
            Емальовані чавунні й кам'яні гідромасажні ванни стійкі до хімічних
            впливів, фізичного навантаження. Немає деформації від великої ваги. Їх плюси
            ‒ тихо працюють, невелика теплова провідність. Це дозволяє на упродовж
            тривалого часу "мати" зручний для приймання процедур температурний
            режим.</p>
          <p>Акрилові ванни найбільш популярні ‒ легкі та міцні. Відрізняються
            великим кольоровим різноманіттям, формами. Під час експлуатації на корпусі
            можуть утворюватися пошкодження, які усуваються поліруванням.</p>
          <p>Виходячи з форми чаші поділяються на:</p>
          <ul>
            <li>овального та кутового типу,</li>
            <li>круглого,</li>
            <li>прямокутники,</li>
            <li>квадрати,</li>
            <li>нестандартні.</li>
          </ul>
          <p>Встановлення джакузі прямокутної та кутової форми ‒ ідеальний варіант
            для невеликого приміщення. Монтаж круглих і овальних гідромасажних ванн
            добре вписується у центр кімнати, потрібно мати значний простір.
            Квадратні й нестандартних форм моделі можна встановлювати під
            стінками.</p>
          <h2>Які види масажу забезпечить монтаж джакузі у Львові</h2>
          <p>Джакузі підтримують масаж:</p>
          <ul>
            <li>водяний;</li>
            <li>повітрям;</li>
            <li>повітряно-водяний;</li>
            <li>ультразвуковий;</li>
            <li>синусоїдальний з пульсаційним.</li>
          </ul>
          <p>Більша частина сьогоднішніх джакузі роблять водно-повітряні масажі ‒
            з форсунок тиском подається вода з повітрям. Ультразвуковий масаж тіло не
            відчуває, але цілюща дія посилюється.</p>
          <p>Форсунки розміщують у поперековій зоні. З боків, у районі спини,
            стегон та гомілок. Запускаються зразу комплексно всі, або пуск по черзі.
            Програмне забезпечення просунутих приладів налаштовує величину впливу,
            контролює час запускання окремих сопел.</p>
          <p>Додатково:</p>
          <ul>
            <li>підтримання хромо- і кольоротерапії;</li>
            <li>наявність підголівників, сходинок, бортика, ручок, FM-приймача й
              інших допоміжних компонентів;</li>
            <li>автоматизована дезінфекція;</li>
            <li>комплект змішувачів.</li>
          </ul>
          <p>Під час під’єднання гідро масажної ванної важливо правильно поєднати
            компоненти для ефективного використання вбудованих можливостей.</p>
          <h2>Конструкція і принцип роботи</h2>

          <p>Для встановлення джакузі важливо розбиратися в конструктивних
            особливостях й принципах роботи гідромасажної сантехніки.</p>
          <p>Звичайний комплект технічного облаштування ванни має:</p>
          <ul>
            <li>компресор (забірник);</li>
            <li>помпу;</li>
            <li>системи керування електронних або пневматичних типів;</li>
            <li>форсунки;</li>
            <li>мережу патрубків.</li>
          </ul>
          <p>Дією помпи вода надходить у гідромасажну мережу, потрапляє у
            забірник і змішується з повітрям. Струмені йдуть у форсунки (від них
            залежатиме вид масажу), та під тиском заходять у ванну. До патрубків
            приєднується каналізаційний трубопровід.</p>
          <p>Як додаткові елементи, в деяких конструкціях є:</p>
          <ul>
            <li>дренажна система, завдяки їй вода циркулює безперебійно;</li>
            <li>аудіо- чи відеоустановка;</li>
            <li>вбудовані блоки для озоно -, арома- і хромотерапіі.</li>
          </ul>
          <p>У системах джакузі зустрічаються додаткові сопла, які, якщо є бажання
            нескладно встановлювати у великих ваннах У цих випадках потрібна більш
            потужна помпа, яка купується окремо.</p>
          <p>На ефективність пристрою впливають: кількість встановлених
            форсунок, їх конфігурація; яким чином розташовуються гідромасажні
            елементи.</p>
          <h2>Як встановити джакузі на вулиці</h2>

          <p>Власники приватного житла можуть встановлювати гідромасажні ванни
            на будинкових терасах, або на віддаленні. Вибираючи місця встановлення
            джакузі обов’язково звертати увагу не тільки на габаритність конструкції, і на
            величину майданчиків для входу і на здійснення технічного обслуговування.</p>
          <p>Гідромасажну ванну потрібно встановлювати не ближче 150 см від
            котеджу і меж ділянки. Від повітряної лінії електромережі відстань ≥ 3 м, від
            панелей- спа ≥ 150 см.</p>
          <p>До більшості варіантів вуличних моделей водопровід підводити не треба
            ‒ вода йде зі шланга і гріється в джакузній чаші.</p>

          <h3>Облаштування майданчика на встановлення джакузі</h3>

          <p>Вага наповненої рідиною ванни може досягти 1000 кг, тому, щоб не
            пошкодити її під час експлуатації, важливо поставити надійний фундамент.</p>
          <p>Бетонний моноліт рахується самою міцною і надійною основою, це ‒
            ідеальний варіант для встановлення гідромасажної ванни. Однак з таким
            рішенням не вийде переміщувати джакузі в інші місця.</p>
          <p>Збірні плити сьогодні також підійдуть. З ними спрощується не тільки
            монтаж джакузі, але і процес розбирання конструкції. Важливо зробити
            правильний вибір оптимальної міцності панелей.</p>
          <p>Якщо треба встановити джакузі на терасі, необхідно перевірити, як
            фундамент витримає її.</p>
          <h3>Грамотне підведення електричного живлення</h3>
          <p>Провід проводиться і над, і під землею. На його діаметр впливає відстань
            та граничне споживання струму. Використовується мідний кабель з
            нейлоновою ізоляцією.</p>
          <p>Додатково встановлюється пристрій захисного відключення (ПЗВ) на
            240 В і 50 А, або контур на 60 А для джакузі у яких багатоступенева помпа.
            Зрозуміло, що потрібна напруга більша, ніж стандарт у 220, тому в модуль
            електрокерування бажано поставити роз'єднувач.</p>
          <p>Для підключення гідро масажної ванни важливо виділяти окремий
            контур. Під’єднання інших приладів не передбачати.</p>
          <h3>Грунтовна підготовка до застосування</h3>
          <p>До початку експлуатації джакузі треба зробити:</p>
          <ul>
            <li>електропостачання відключити, впевнитися, що всі елементи на місці
              й закріплення надійне;</li>
            <li>відчинити клапани для повітря;</li>
            <li>чашу наповнити садовим шлангом, відрами;</li>
            <li>електрифікувати;</li>
            <li>включити підігрівання;</li>
            <li>перевірити режими функціонування.</li>
          </ul>
          <p>Після тестування гідромасажної ванни починається її використання за
            призначенням.</p>

          <h2>Установка джакузі в приміщенні</h2>

          <p>При монтажі гідромасажної ванни в закритих приміщеннях не забути
            дбати про наступне:</p>
          <ul>
            <li>Повинно бути завершено оздоблювання стін, стелі, підлог.</li>
            <li>На водяні трубопроводи заздалегідь встановити очищувальні фільтри.
              Якщо подавання води з обладнаної свердловини, додатково передбачається
              фільтр для механічного очищення.</li>
            <li>У ванних кімнатах допускаються лише вбудовані розетки, обладнані
              заземленням. Під'єднуються через пристрій захисного відключення і мають
              четвертий рівень захисту. Якщо їх немає, електрику під'єднують мережевим
              кабелем, який прокладається через приміщення.</li>
            <li>Важливо попіклуватися о місці, щоб розводити каналізацію та
              електромережі.</li>
            <li>Попередньо слід переконатися, що є можливість встановити джакузі без
              руйнування дверних отворів. У приміщенні повинна бути вентиляція.</li>
          </ul>
          <p>Розглянемо головні моменти встановлення і підключення компонентів
            джакузі:</p>

          <h3>Установити корпус ванни</h3>
          <p>Доки не закінчиться монтаж джакузі, щоб
            захистити її від пошкоджень, не рекомендують стягувати покриття з плівки.
            При переміщенні забороняється братися за елементи що стирчать ‒ патрубків,
            форсунок та інш. не торкатися. Можна тримати конструкцію тільки за
            сталевий корпус.</p>
          <p>Встановлення джакузі здійснюють точно за горизонтом. Визначається
            будівельним рівнем з лазерним пристроєм, або іншим пристроєм. Регулюють
            підкручуванням ніжок, тому і на поверхні з нерівностями досягається
            горизонтальне положення корпусу.</p>
          <p>Далі монтаж рами та кронштейна джакузі. Вони тримають чашу, без них
            вона прогинається. Велике число додаткових опор у комплектації доказує
            неміцність матеріалів конструкції.</p>
          <p>Отвір для зливу розташовується не вище 0,1 м від підлоги, інакше для
            нього необхідна підставка.</p>


          <h3>Підключення джакузі до водопроводу, каналізаційної системи.</h3>
          <p>Мережа
            водопостачання повинна бути с тиском ≤ 5 атм. Якщо сумнівно, що система
            підтримає цей тиск, то додатково встановлюється редуктор.</p>
          <p>У побуті вода без наявності домішок відносно рідко буває. Тому важливе
            встановлення фільтрів грубого (зі свердловин, відкритих водоймищ, джерел,
            криниць вода), і тонкого очищення.</p>
          <p>Труби повинні розташовуватися на максимально близькій відстані від
            ванни. Таким чином, щоб до з'єднувальних вузлів не перекривався підхід. Злив
            каналізації ставиться діаметром 4-5 см, від долівки не вище 10 см.</p>
          <p>Підключення кранів, змішувачів і водопостачання джакузі проводиться
            таким чином, як і під'єднання до звичайної ванної. Єдиний нюанс ‒
            встановлення всередину, а не на стінку.</p>
          <p>Система зливання-переливання напівавтомат. Клапан відкривають
            розташованою на отворі переливання ручкою.</p>
          <p>Зливний отвір джакузі підключають гнучкою трубкою для рідини.
            Довжина вибирається з врахуванням можливого пересування ванни щодо
            стінок на 0,5 м.</p>
          <p>Обов'язково забезпечується герметизація з'єднань, при потребі беруться
            прокладки. Каналізаційну трубу розташовують на стінах або долівці, але не
            вище 20 мм. Сифон джакузі з'єднують зі зливом гофрованою трубкою.</p>
          <p>Вказані пункти виконані, впевнено приступаємо до встановлення гідро
            масажної ванни.</p>

          <p><strong>Після закінчення установки джакузі візуально оглядаються
            з'єднання, щоб переконатися у відсутності тріщин, впевнитися що
            стикування міцно зафіксовані.</strong></p>

          <h3>Підключення гідромасажної ванни до електричних мереж.</h3>
          <p>Важливо пам'ятати, водою проводиться електрика, а санітарні вузли
            мають підвищену вологість.</p>
          <p>Для під’єднання джакузі потрібні:</p>
          <ul>
            <li>стандартного типу мережа напругою 220 В;</li>
            <li>кабель живлення на 3 жили (розрахунок довжини індивідуально);</li>
            <li>автоматичного типу вимикач;</li>
            <li>ПЗВ;</li>
            <li>заземлювальна система;</li>
            <li>стабілізатор напруги;</li>
            <li>електричні проводи, від 3 мм перетин.</li>
          </ul>
          <p>Підключення до джакузі електрики ‒ важливий і відповідальний
            процес, адже вода проводить струм. Необхідно дотримуватися правил
            техніки безпеки. Потрібні знання, навички та досвід. Найкраще
            скористатися допомогою фахівців.</p>
          <p><strong>Для проведення електромонтажних робіт ділянку потрібно
            повністю знеструмити.</strong></p>
          <p>Розетка повинна знаходитися за межами ванної кімнати, а якщо вона
            в приміщенні, то повинна бути європейського зразка і відповідати вимогам
            електробезпеки ‒ обладнана заземленням, підключена до електричного
            щитка через автоматичний вимикач і запобіжний автомат.</p>
          <p>Використовується трижильний кабель. Зазвичай жовті й зелені
            кольори означають заземлення, блакитний ‒ нуль, а червоний, коричневий,
            білий ‒ фазу. При приєднанні кабелю з проводкою джакузі заземлення
            з'єднують із заземленням, нуль ‒ з нулем, фазу ‒ з фазою.</p>
          <p>Щоб конструкція не вийшла з ладу при нестабільній роботі мережі
            бажано встановлювати стабілізатор напруги.</p>

          <h3>Тестування встановлення джакузі, перевірка режимів.</h3>
          <p>Форсунки можна налаштувати за своїм вибором пультом керування,
            або спеціальним регулятором, який змінює інтенсивність подавання
            струменя, його напрямок.</p>
          <p><strong>Перед запуском джакузі наповнюється водою.</strong> Форсунки повинні
            покриватися рідиною. Після цього система запускається, перевіряється
            працездатність. Потім, перед зливанням води, джакузі відключають.</p>
          <p>Після перевірки підключення всіх вузлів гідро масажної ванни до
            електрики, ніжки присвердлюють до підлоги, герметизуються шви між
            стінами.</p>
          <p>Після встановлення простір під гідро масажною ванною закривають
            декоративними панелями, які йдуть в комплекті. Незакритими залишають
            лише ділянку у 2-3 см від підлоги для вентиляції.</p>
          <p>Важливо не закладати борт керамічною плиткою, оскільки в разі
            необхідності, демонтаж неможливо буде провести без пошкодження
            облицювання.</p>
          <h2>Особливості експлуатації джакузі</h2>

          <p>Спочатку в чашу набирають воду, і тільки після цього запускають.
            Треба, щоб форсунки розташовувалися в воді, інакше насос може перегрітися,
            що призведе до його протіканню або виходу з ладу. Після запуску зазвичай
            налаштовують інтенсивність подавання струменя, регулюють сопла форсунок.</p>

          <p>При експлуатації джакузі можна брати ароматичні речовини, есенції, що
            не утворюють піну. Допустиме нагрівання води ‒ до +50 градусів.</p>
          <p>Важливо пам'ятати, що неправильна експлуатація ванни призведе до
            зламання.</p>

          <h2>Рекомендації щодо догляду та усуненню подряпин</h2>

          <p>Очищати акрилову ванну абразивними засобами, речовинами з хлором,
            кислотою й іншими агресивними компонентами, неприпустимо.
            Користуватися необхідно гельовидною очищувальною хімією, м'якими
            тканинами та губками.</p>
          <p>Позбутися від усіх забруднень у соплах можна наступним чином:</p>
          <ul>
            <li>чаша доверху заповнюється водою, мінімум 20 градусної
              температури;</li>
            <li>додається оцтова (7%) або лимонна кислота;</li>
            <li>для змішування води з добавками запускається помпа 10-20 секунд;</li>
            <li>розчин зливається після 12 годин;</li>
            <li>джакузі наповнюється, насос включається, ванна обполіскується,
              воду зливається.</li>
          </ul>
          <p>Процедура проводиться щорічно 1-2 рази.</p>
          <p>Мілкі подряпини прибираються дрібнозернистим наждачним папером.
            Наноситься автомобільна полірувальна паста. Шоб не утворювалася іржа,
            ванна насухо витирається сухими чистими лляними серветками.</p>
          <p>Якщо не має вбудованої системи автоматичної дезінфекції, то
            щомісячно вона самостійно проводиться. Використовуються будь-які
            дезінфекційні засоби. Щоб даремно не витрачати воду, допускається її
            використання після гідромасажу.</p>
          <p>Щоб дезінфікувати джакузі, її заповнюють так, щоб водою покривалися
            верхні форсунки. У ванну набирають розчин, що дезінфікує, згідно з
            інструкціями виробника. На 1-2 хвилини запускається насос, чекають 10-15
            хвилин, зливається вода.</p>
          <p>Далі необхідно знову набрати рідину для очищення чаші від залишків
            засобу.</p><br />
          <p>Важливо! Щоб встановити джакузі у Львові звертайтеся до нас.
            Досвідчені майстри якісно та швидко виконають монтаж гідро масажної
            ванни.</p>
          <p>Ознайомтеся, які <Link to="/">послуги сантехніка</Link> пропонуємо.</p>
        </div>
        <div className="columns small-12 medium-4 large-4">
          <Nav></Nav>
        </div>
      </div>
    </Content>
  </Layout>
)

export default JacuzziInstallationPage
