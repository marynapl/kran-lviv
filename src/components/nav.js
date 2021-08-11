import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Nav = () => (
  <div className="margin-top-1x">
    
    <div className="card">
      <div className="card-section">
        <ul className="menu vertical">
          <li><Link to="/"><strong>Головна</strong></Link></li>
          <li><Link to="/call-plumber">Виклик сантехніка</Link></li>
          <li><Link to="/clogged-drain">Забита каналізація</Link></li>
          <li><Link to="/drain-cleaning">Прочистка каналізації</Link></li>
          <li><Link to="/video-inspection">Відеоінспекція трубопроводів</Link></li>
          <li><Link to="/video-diagnostics">Відеодіагностика каналізаційних труб</Link></li>
          <li><Link to="/drain-cleaning-with-cable">Прочистка каналізації сантехнічним тросом</Link></li>
          <li><Link to="/mechanical-drain-cleaning">Механічна прочистка каналізації</Link></li>
          <li><Link to="/thermal-drain-cleaning">Термічне очищення каналізації</Link></li>
          <li><Link to="/chemical-drain-cleaning">Чистка каналізаційних труб хімічним способом</Link></li>
          <li><Link to="/pneumatic-drain-cleaning">Пневматичне прочищення каналізації</Link></li>
          <li><Link to="/industrial-drain-cleaning">Прочистка промислової каналізації</Link></li>
          <li><Link to="/drain-cleaning-private-house">Прочистка каналізації приватного будинку</Link></li>
          <li><Link to="/drain-flushing">Промивання каналізаційних мереж</Link></li>
          <li><Link to="/hydrodynamic-drain-cleaning">Гідродинамічна прочистка каналізації</Link></li>
          <li><Link to="/installing-toilet">Встановлення унітаза</Link></li>
          <li><Link to="/bidet-toilet">Унітаз з функцією біде</Link></li>
          <li><Link to="/shower-panels-installation">Встановити душові панелі</Link></li>
          <li><Link to="/quality-pipe-cleaning">Якісна прочистка труб</Link></li>
          <li><Link to="/plastic-pipes-installation">Монтаж пластикових труб</Link></li>
          <li><Link to="/plastic-pipes-soldering">Пайка пластикових труб</Link></li>
          <li><Link to="/seal-the-thread">Чим і як ущільнювати різьбу</Link></li>
          <li><Link to="/boiler-repair">Ремонт котлів</Link></li>
          <li><Link to="/gas-boiler-installation">Встановлення газового котла</Link></li>
          <li><Link to="/solid-fuel-boiler-installation">Встановлення твердопаливного котла</Link></li>
          <li><Link to="/waterproofing">Гідроізоляційні роботи</Link></li>
        </ul>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <StaticImage
          src="../images/clogged-grain-2.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt=""
        />
      </div>
      <div className="card-section ">
        <Link to="/gallery" className="button expanded">Галерея робіт</Link>
      </div>
    </div>

    

  </div>
)

export default Nav
