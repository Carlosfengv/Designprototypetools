import React from 'react';
import Item from './Item';
import './Main.css';


const Main =(props)=>{
    return<section className="Main">
             <div>
                <h3>{props.Name}</h3>
                <p>{props.Decription}</p>
             </div>
             <div className="Container">
                {props.fuctionItem.map((item,index)=>{
                   return <Item
                              key={index}
                              Name={item.Name}
                              Decription={item.Decription}
                          ></Item>
                   
                })}     
             </div>
        </section>
}

export default Main;