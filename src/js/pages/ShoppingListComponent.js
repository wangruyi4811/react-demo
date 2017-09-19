import React, { Component } from 'react'
import ShoppingCarComponent from './ShoppingCarComponent'
let arr = [1,2];
export class AllGoods extends Component {
    render() {
        return (
            <div className="total">
                <div>
                    <input type="checkbox"/>
                    <span>全选</span>
                </div>
                <div>合计：￥{this.props.total}</div>
                <div>购买结算</div>
            </div>
        )
    }
}
export default class ShoppingListComponent extends Component {
    render() {
        return (
            <div>
                {
                    arr.map(()=>(
                        <ShoppingCarComponent/>
                    ))
                }
                <AllGoods total="998"/>
            </div>
        )
    }
}