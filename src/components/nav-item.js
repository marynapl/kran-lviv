import React, { useState } from "react"

const NavItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li className={!isOpen ? "closed" : "open"}>
      <button type="button" className="sub-nav-toggle" onClick={handleClick}>
        {title}
      </button>
      {children}
    </li>
  )
}

export default NavItem
