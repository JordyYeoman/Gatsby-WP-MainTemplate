import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css } from 'styled-components'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    allWpMenu {
    edges {
      node {
        menuItems {
          nodes {
            url
            label
            path
            id
          }
        }
        id
      }
    }
  }
  }
    `)

  const items = data.allWpMenu.edges[0].node.menuItems.nodes;
  
  return (
    <header>
    <Navbar className="container mx-auto flex flex-wrap p-5 justify-between flex-col md:flex-row items-center">
    <HeaderLogo>Limitless</HeaderLogo>
      <Menu>
        {items.map(item => (
              <NavItems to={item.url} key={item.id}>
              <div>{item.label}</div>
              </NavItems>
      ))}
      <Button>Login</Button>
      </Menu>
    </Navbar>
    </header>
  );
}



export default Header

const HeaderLogo = styled.div`
  color: #fff;
  font-family: 'Rubik', sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
`

const NavItems = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-transform: uppercase;
`

const Button = styled.button`
  border: 2px solid;
  color: #fff;
  border-radius: 50px;
  text-transform: uppercase;
  position: relative;
  margin: 0.5em 1em;
  background: transparent;
  padding: 0.5em 1em;
  border: 1px solid #ff6238;
  background-clip: padding-box; 

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Navbar = styled.div`
  display: flex;
`