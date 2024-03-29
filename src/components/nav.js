import * as React from "react"
import { Link } from "gatsby"
import NavItem from "./nav-item"
import { StaticImage } from "gatsby-plugin-image"

const Nav = () => {
  return (
    <div className="margin-top-1x">
      <div className="card navigation">
        <nav>
          <ul className="menu vertical">
            <li>
              <Link to="/">
                <strong>Головна</strong>
              </Link>
            </li>
            <NavItem title="Аварійна служба" open={false}>
              <ul className="menu vertical nested">
                <li>
                  <Link to="/emergency-plumbing-service">
                    Аварійна служба сантехніки
                  </Link>
                </li>
                <li>
                  <Link to="/emergency-drain-cleaning">
                    Аварійна прочистка каналізації
                  </Link>
                </li>
              </ul>
            </NavItem>
            <NavItem title="Прочистка каналізації" open={false}>
              <ul className="menu vertical nested">
                <li>
                  <Link to="/drain-cleaning">Прочистка каналізації</Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-services">
                    Послуги сантехніка з чистки каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/sewer-search">Пошук каналізації</Link>
                </li>
                <li>
                  <Link to="/find-underground-sewer-pipe">
                    Як знайти каналізаційну трубу під землею
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-recommendations">
                    Рекомендації по прочистці зливних каналізаційних труб
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-reasons">
                    Причини прочищення каналізаційних труб
                  </Link>
                </li>
                <li>
                  <Link to="/what-to-do-with-clogged-sewer">
                    Що робити, якщо забита каналізація?
                  </Link>
                </li>
                <li>
                  <Link to="/sewer-installation">Монтаж каналізації</Link>
                </li>
                {/* <li>
                  <Link to="/clogged-drain">Забита каналізація</Link>
                </li>
                <li>
                  <Link to="/pipe-cleaning">Прочистка труб</Link>
                </li> */}
                <li>
                  <Link to="/pipe-cleaning-in-lviv">
                    Прочистка труб у Львові
                  </Link>
                </li>
                <li>
                  <Link to="/sewer-ventilation">
                    Навіщо потрібна вентиляція стояка каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/professional-drain-cleaning">
                    Професійна чистка каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-in-the-kitchen">
                    Як пробити каналізаційну трубу на кухні
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-difficult-debris">
                    Прочистка каналізації від найскладніших засмічень
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-with-cable">
                    Прочистка каналізації сантехнічним тросом
                  </Link>
                </li>
                <li>
                  <Link to="/mechanical-drain-cleaning">
                    Механічна прочистка каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/thermal-drain-cleaning">
                    Термічне очищення каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/chemical-drain-cleaning">
                    Чистка каналізаційних труб хімічним способом
                  </Link>
                </li>
                <li>
                  <Link to="/pneumatic-drain-cleaning">
                    Пневматичне прочищення каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/industrial-drain-cleaning">
                    Прочистка промислової каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-private-house">
                    Прочистка каналізації приватного будинку
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-in-house-chemical-and-hydrodymanic-methods">
                    Прочистка каналізації будинку - хімічний та гідродинамічний
                    способи
                  </Link>
                </li>
                <li>
                  <Link to="/drain-cleaning-in-house-thermal-and-mechanical-methods">
                    Прочистка каналізації будинку - термічний та механічний
                    способи
                  </Link>
                </li>
                <li>
                  <Link to="/drain-flushing">
                    Промивання каналізаційних мереж
                  </Link>
                </li>
                <li>
                  <Link to="/hydrodynamic-drain-cleaning">
                    Гідродинамічна прочистка каналізації
                  </Link>
                </li>
                <li>
                  <Link to="/quality-drain-cleaning">
                    Якісна прочистка каналізації у Львові
                  </Link>
                </li>
              </ul>
            </NavItem>
            <NavItem title="Відеоінспекція" open={false}>
              <ul className="menu vertical nested">
                <li>
                  <Link to="/video-inspection">
                    Відеоінспекція трубопроводів
                  </Link>
                </li>
                <li>
                  <Link to="/video-diagnostics">
                    Відеодіагностика каналізаційних труб
                  </Link>
                </li>
                <li>
                  <Link to="/pipe-teleinspection">Телеінспекція труб</Link>
                </li>
              </ul>
            </NavItem>
            <NavItem title="Послуги сантехніка" open={false}>
              <ul className="menu vertical nested">
                <li>
                  <Link to="/call-plumber">Виклик сантехніка</Link>
                </li>
                <li>
                  <Link to="/plumbing-work">Сантехнічні роботи у Львові</Link>
                </li>
                <li>
                  <Link to="/installing-toilet">Встановлення унітаза</Link>
                </li>
                <li>
                  <Link to="/choose-a-toilet">Вибираємо унітаз</Link>
                </li>
                <li>
                  <Link to="/bidet-toilet">Унітаз з функцією біде</Link>
                </li>
                <li>
                  <Link to="/toilet-repair">Ремонт інсталяції унітазу</Link>
                </li>
                <li>
                  <Link to="/repair-of-toilet-tank-drain-system">
                    Ремонт зливної системи бачка унітаза
                  </Link>
                </li>
                <li>
                  <Link to="/urinal-installation">Встановити пісуар</Link>
                </li>
                <li>
                  <Link to="/bidet-seat">Сидіння-біде для унітаза</Link>
                </li>
                <li>
                  <Link to="/baths">Ванни: чавунні, сталеві, акрилові</Link>
                </li>
                <li>
                  <Link to="/baths-quarry-wooden">
                    Ванни: кварилові та дерев’яні
                  </Link>
                </li>
                <li>
                  <Link to="/bathtub-installation">Монтаж ванн</Link>
                </li>
                <li>
                  <Link to="/how-to-choose-bathroom-faucet">
                    Як вибрати змішувач для ванної
                  </Link>
                </li>
                <li>
                  <Link to="/bathtub-trim-moulding-installation">
                    Облаштування бордюру для ванни
                  </Link>
                </li>
                <li>
                  <Link to="/bathtub-ceramic-border">
                    Керамічний бордюр для ванни
                  </Link>
                </li>
                <li>
                  <Link to="/shower-panels-installation">
                    Встановити душові панелі
                  </Link>
                </li>
                <li>
                  <Link to="/shower-cabin-installation">
                    Встановлення душової кабіни
                  </Link>
                </li>
                <li>
                  <Link to="/jacuzzi-installation">Установка джакузі</Link>
                </li>
                <li>
                  <Link to="/choose-a-hot-tub">Вибрати гідромасажну ванну</Link>
                </li>
                <li>
                  <Link to="/sink-installation-in-bathroom">
                    Установка раковини у ванній
                  </Link>
                </li>
                <li>
                  <Link to="/sink-installation-assembling-and-fixing-on-the-wall">
                    Встановлення раковини: складання та кріплення на стіні
                  </Link>
                </li>
                <li>
                  <Link to="/sink-installation-semipedestal-suspended">
                    Монтаж раковини: на напівп'єдесталі, підвісної
                  </Link>
                </li>
                <li>
                  <Link to="/sink-countertop-built-in">
                    Накладні раковини та раковини що вбудовуються
                  </Link>
                </li>
                <li>
                  <Link to="/washing-machine-installation">
                    Встановлення пралки у ванній
                  </Link>
                </li>
                <li>
                  <Link to="/washing-machine-installation-under-sink">
                    Встановити пральну машину під раковину
                  </Link>
                </li>
                <li>
                  <Link to="/siphon-operation">Принцип роботи сифона</Link>
                </li>
                <li>
                  <Link to="/syphon-installation-for-genoa-cup">
                    Сифон для чаші Генуя – види, монтаж
                  </Link>
                </li>
                <li>
                  <Link to="/mixer-installation">
                    Встановлення та заміна змішувача
                  </Link>
                </li>
                <li>
                  <Link to="/plastic-pipes-installation">
                    Монтаж пластикових труб
                  </Link>
                </li>
                <li>
                  <Link to="/plastic-pipes-soldering">
                    Пайка пластикових труб
                  </Link>
                </li>
                <li>
                  <Link to="/seal-the-thread">Чим і як ущільнювати різьбу</Link>
                </li>
                <li>
                  <Link to="/water-meter-installation">
                    Установка лічильників води
                  </Link>
                </li>
                <li>
                  <Link to="/water-filter-installation">
                    Установка фільтра для води
                  </Link>
                </li>
                <li>
                  <Link to="/eliminate-water-leak">
                    Як усунути витік води у трубопроводі?
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-choose-drain-overflow">
                    Як вибрати злив-перелив для ванни
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-choose-drain-overflow-automatic-system">
                    Як вибрати злив-перелив для ванни: автоматичні системи
                  </Link>
                </li>
                <li>
                  <Link to="/plumbing-services-lviv">
                    Сантехнічні послуги Львів
                  </Link>
                </li>
                <li>
                  <Link to="/water-pipe-plug">
                    Заглушка для водопровідних труб
                  </Link>
                </li>
                <li>
                  <Link to="/plumber-lviv-lychakivska">
                    Сантехнік на Личаківській
                  </Link>
                </li>
                <li>
                  <Link to="/plumber-volodymyra-velykoho-street">
                    Сантехнік на Володимира Великого
                  </Link>
                </li>
                <li>
                  <Link to="/plumber-lysynychi">Сантехнік Лисиничі</Link>
                </li>
                <li>
                  <Link to="/plumber-lviv-sykhiv">Сантехнік Сихів Львів</Link>
                </li>
                <li>
                  <Link to="/plumbing-installation">
                    Демонтаж, ремонт, монтаж сантехніки
                  </Link>
                </li>
                <li>
                  <Link to="/plumber-in-lviv">Сантехнік у Львові</Link>
                </li>
              </ul>
            </NavItem>
            <NavItem title="Oпалення" open={false}>
              <ul className="menu vertical nested">
                <li>
                  <Link to="/leakage-in-heating-system">
                    Витік води у системі опалення
                  </Link>
                </li>
                <li>
                  <Link to="/boiler-repair">Ремонт котлів</Link>
                </li>
                <li>
                  <Link to="/wall-monted-water-heating">
                    Монтаж теплих стін
                  </Link>
                </li>
                <li>
                  <Link to="/heating-installation-private-house">
                    Монтаж опалення приватного будинку
                  </Link>
                </li>
                <li>
                  <Link to="/heating-installation-apartment">
                    Монтаж опалення квартири
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-choose-efficient-heating-boiler">
                    Як вибрати ефективний котел опалення
                  </Link>
                </li>
                <li>
                  <Link to="/gas-boiler-installation">
                    Встановлення газового котла
                  </Link>
                </li>
                <li>
                  <Link to="/solid-fuel-boiler-installation">
                    Встановлення твердопаливного котла
                  </Link>
                </li>
                <li>
                  <Link to="/radiator-replacement">
                    Заміна батарей і радіаторів опалення
                  </Link>
                </li>
                <li>
                  <Link to="/bypass-in-the-heating-system">
                    Байпас у системі опалення приватного будинку
                  </Link>
                </li>
                <li>
                  <Link to="/mayevsky-faucet-application">
                    Сфери застосування кранів Маєвського
                  </Link>
                </li>
              </ul>
            </NavItem>
            <NavItem title="Гідроізоляція" open={false}>
              <ul className="menu vertical nested">
                <Link to="/waterproofing">Гідроізоляційні роботи</Link>
                <li>
                  <Link to="/balcony-waterproofing">Гідроізоляція балкону</Link>
                </li>
              </ul>
            </NavItem>
          </ul>
        </nav>
      </div>

      <div className="card">
        <div className="card-image">
          <StaticImage src="../images/clogged-drain.jpg" alt=""></StaticImage>
        </div>
        <div className="card-section ">
          <Link to="/gallery" className="button expanded">
            Галерея робіт
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
