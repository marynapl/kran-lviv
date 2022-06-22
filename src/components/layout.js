import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/foundation.css"
import "../css/app.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isNavOpen, setIsNavOpen] = useState(false)
  const navClass = isNavOpen ? "nav-open" : "nav-closed"

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [isNavOpen])

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />

      <main className={navClass}>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
