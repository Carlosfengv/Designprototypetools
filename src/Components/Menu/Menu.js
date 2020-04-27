import React,{Component} from 'react';
import {
    NavLink
  } from "react-router-dom";
import '../Menu/Menu.css'


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            Contens: props.Contens,
            MenuIndex: '',
        }
    }
    render(){
        return <div className="Menu">
            <label>功能模块</label>
            <ul>
            {this.state.Contens.map((items,index)=>{
                return <li 
                            key={index}
                            onClick={this.props.onClick(index)}
                            >
                            <NavLink 
                                to={'/'+items.Name } 
                            >
                                {items.Name}
                            </NavLink>
                </li>
               
            })}
            </ul>
            
            
        </div>
    }
}

export default Menu;