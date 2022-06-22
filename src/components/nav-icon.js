import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NavIconButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  position: ${({ isNavOpen }) => (isNavOpen ? "fixed" : "relative")};
  top: ${({ isNavOpen }) => (isNavOpen ? "1.2rem" : "0")};
  right: ${({ isNavOpen }) => (isNavOpen ? ".8rem" : "0")};

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: #0a0a0a;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;

    :first-child {
      transform: ${({ isNavOpen }) =>
        isNavOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isNavOpen }) => (isNavOpen ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isNavOpen }) =>
        isNavOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const NavIcon = ({ isNavOpen, setIsNavOpen }) => {
  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <Wrapper>
      <NavIconButton isNavOpen={isNavOpen} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </NavIconButton>
    </Wrapper>
  )
}

export default NavIcon
