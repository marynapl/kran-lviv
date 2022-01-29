import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <div className="row align-center align-middle header-main">
        <div className="columns small-4 medium-3 large-2">
          <Link to="/" className="logo">
            <StaticImage
              src="../images/logo.jpg"
              quality={100}
              alt="{siteTitle}"
            />
          </Link>
        </div>
        <div className="columns small-12 medium-8 large-10 text-center medium-text-right">
          <small>
            <strong>Працюємо без вихідних</strong>. Аварійна&nbsp;прочистка&nbsp;каналізації&nbsp;<strong>24/7</strong>
          </small>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
