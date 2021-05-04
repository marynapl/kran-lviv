import * as React from "react"
import PropTypes from "prop-types"

const Content = ({ children }) => {
  return (
    <section className="row content-container">
      <div className="columns small-12">
        {children}
      </div>
    </section>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
