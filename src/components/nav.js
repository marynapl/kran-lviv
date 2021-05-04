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
          <li><Link to="/drain-cleaning">Прочистка каналізації</Link></li>
          <li><Link to="/hydrodynamic-drain-cleaning">Гідродинамічна прочистка каналізації</Link></li>
          <li><Link to="/plastic-pipes-installation">Монтаж пластикових труб</Link></li>
          <li><Link to="/plastic-pipes-soldering">Пайка пластикових труб</Link></li>
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
