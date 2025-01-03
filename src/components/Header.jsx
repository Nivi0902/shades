import React from 'react'
import './header.css'

const Header = ({title}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'My Task'
}

export default Header