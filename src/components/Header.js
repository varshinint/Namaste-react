import React, { useEffect, useState } from 'react'
import { LOGO_URL } from './utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {

    const [loginStatus, setLoginStatus] = useState(true)
    console.log('Header render')

    // if no dependency array use Effect is called on every render
    //if dependency array is empty = [] useEffect is called on initial render(just once)
    // if dependency array is [btnName React] => called everytime btnName React is updated

    useEffect(
        () =>{
        console.log('Use effect called')
    })


  return (
    <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to = "/"> Home</Link>
                    </li>
                    <li>
                        <Link to ="/about"> About Us </Link>
                    </li>
                    <li>
                        <Link to = "/contact"> Contact Us </Link>
                    </li>
                    <button className='login-btn'
                     onClick={()=>{setLoginStatus(!loginStatus)}}> { loginStatus? 'Login': 'Logout'} </button>
                </ul>
            </div>
 </div>
  )
}

export default Header