import React from 'react'
import Logo from '../assets/logo.png'

function Nav() {
    return (
        <div className="row nav">
        <div className=" container">
            <img src={Logo} alt='AirBNB logo' />     
        </div>
        </div>
    )
}

export default Nav