import React from 'react';
import '../Main/Item.css';
import thumbnail from '../../thumbnail.svg';

const Item =(props)=>{
    return <a href="#" target="view_window"><div className="Card">
                <img src={thumbnail}></img>
                <div className="title">
                <h5> {props.Name}</h5>
                    <p>{props.Decription}</p>
                </div>
                 </div>git
    </a>
}

export default Item;