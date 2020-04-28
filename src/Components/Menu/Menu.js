import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import '../Menu/Menu.css'


    const Menu =(props)=> {
        return <div className="Menu">
            <label>功能模块</label>
            <ul>
            {props.Contens.map((items,index)=>{
                return <li 
                            key={index}
                            onClick={()=>props.onClick(items)}
                            >
                            <NavLink 
                                to={'/'+items.Name } 
                                activeClassName='active'
                            >
                                {items.Name}
                            </NavLink>
                </li>
               
            })}
            </ul>
            
            
        </div>
    }

export default Menu;