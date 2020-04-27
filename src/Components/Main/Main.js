import React from 'react';
import Item from './Item';
import './Main.css';
import {Route} from "react-router-dom";


const Main =(props)=>{
    return<section className="Main">
             <div>
                <h3>{props.Name}</h3>
                <p>{props.Decription}</p>
             </div>
        </section>
}

export default Main;