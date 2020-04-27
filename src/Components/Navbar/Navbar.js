import React from 'react'
import '../Navbar/Navbar.css'
import logoDefault from '../../logo.svg';

const Navbar =(props)=>{
    return <div className="Navbar">
            <ul>
                <li>
                    <img src={props.logo? props.logo : logoDefault}></img>
                </li>
                <li>
                 |
                </li>
                <li>
                {props.WebTitle}
                </li>
            </ul>
        </div>
}

export default Navbar;