import React from 'react'
import NavComp from '../Component/nav'
import SearchComp from '../Component/search'
import logo from "../logo.svg";

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="logo" className='App-logo' height={50} width={50}/>

            </div>

            <NavComp />
            <SearchComp />

        </div>

    )
}


export default Header;