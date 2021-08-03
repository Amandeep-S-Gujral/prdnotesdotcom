import React from 'react'

import Logo from './Logo'
import NavBar from './NavBar'
import UserDetails from './UserDetails'

import '../../css/header.css'
const Header = () => {

    return (
        <div id="header">
            <Logo />
            <NavBar />
            <UserDetails />
        </div>
    )
}

export default Header