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
            <NavItem title="Аварійна служба сантехніки" open={false}>
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
                  <Link to="/clogged-drain">Забита каналізація</Link>
                </li>
                <li>
                  <Link to="/pipe-cleaning">Прочистка труб</Link>
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
                  <Link to="/quality-pipe-cleaning">Якісна прочистка труб</Link>
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
                  <Link to="/installing-toilet">Встановлення унітаза</Link>
                </li>
                <li>
                  <Link to="/bidet-toilet">Унітаз з функцією біде</Link>
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
                  <Link to="/sink-installation">Установка раковини</Link>
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
              </ul>
            </NavItem>
            <NavItem title="Oпалення" open={false}>
              <ul className="menu vertical nested">
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
