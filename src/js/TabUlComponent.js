import React,{Component} from 'react'
import fetch from 'isomorphic-fetch'

//let goodsArr = ['连衣裙','衬衫','T恤','牛仔裤','半身裙','休闲裤','风衣','西服','运动装'];
let goodsArr = [];
let navArr = ['男装','女装','孕童','家居'];
goodsArr = require('../../data/tab.json').goodsArr;
let imgSrc = require('../img/logo-s6a3ed87e0b.png');
export default class TabUiComponent extends Component {

    componentWillMount() {
        
        // fetch('http://m.jackjones.com.cn/sdk11090/public/jackjonesH5_member/getCouponDetails?url=/opt/gfs/source/memberData/details_jackjones.json',{
            
        // })
        // .then(function(response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     console.log(response)
        //     return response.json();
        // })
        // .then(function(stories) {
        //     console.log(stories);
        // });
    }
    render() {
        return (
            <div className="goods-class">
                <p>
                    <i className="logo-search" style={{backgroundImage:'url('+imgSrc+')',backgroundSize: '0.5rem 1.9rem',backgroundPosition: '0 -1.6rem'}}></i>
                    <input placeholder="请输入关键字"/>
                </p>
                <p>
                    {
                        navArr.map(function(navClass){
                            return <a>{navClass}</a>
                        })
                    }
                </p>
                <ul>
                    {
                        goodsArr.map(function(goodsClass){
                            return <li>{goodsClass}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}