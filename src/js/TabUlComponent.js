import React,{Component} from 'react'


//let goodsArr = ['连衣裙','衬衫','T恤','牛仔裤','半身裙','休闲裤','风衣','西服','运动装'];
let goodsArr = [];
export default class TabUiComponent extends Component {
    render() {
        return (
            <div className="goods-class">
                <p>
                    <i></i>
                    <input placeholder="请输入关键字"/>
                </p>
                <p></p>
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