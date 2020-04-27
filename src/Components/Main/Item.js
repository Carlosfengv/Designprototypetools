import React from 'react';
import '../Main/Item.css';

const Item =()=>{
    return <a href="#"><div className="Card">
                <img src="https://cdn.pixabay.com/photo/2020/04/22/01/59/hands-5075436_1280.jpg"></img>
                <div className="title">
                    <h5>集群概览</h5>
                    <p>对集群的资源用量，以及开启的服务等进行统计，方便管理员快速查看集群状态</p>
                </div>
                 </div>
    </a>
}

export default Item;