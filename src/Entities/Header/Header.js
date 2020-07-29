import React from 'react'
import { Navbar, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={<Link to="/"> <h4 className="title">Bit Blog</h4></Link>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <Link to='/createnewpost'>
        Create New Post
      </Link>
      <Link to='/Posts'>
        Posts
      </Link>
      <Link to='/Authors'>
        Authors
      </Link>
      <Link to='/About'>
        About
      </Link>
    </Navbar>
  )
}
export default Header