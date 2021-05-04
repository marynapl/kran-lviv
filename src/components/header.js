import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <div className="row align-justify align-middle header-main">
        {/* Logo */}
        {/* <div className="columns shrink">
          <Link to="/" className="logo">
            {siteTitle}
          </Link>
        </div> */}
        <div className="columns text-center large-text-right">
          <span>
            <strong>Працюємо без вихідних</strong>.
            Аварійна прочистка каналізації <strong>24/7</strong>
          </span>
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
