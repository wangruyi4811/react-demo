import React, { Component } from 'react'

export default class GoodsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static defaultProps = {
            color: '黑色',
            classify: 'T恤衫',
            size: 'M(175/80A)',
            goodId: '116307501',
            num: 1,
            price: 100
    }
    render() {
        let {classify,price,color,size,num} = this.props;
        return (
            <div className="good-box">
                <input type="checkbox"/>
                <img src={require('../img/images/good.png')}/>
                <ul>
                    <li>
                        <p>{classify}</p>
                        <p>{color}</p>
                    </li>
                    <li>{size}</li>
                    <li >
                        <span>{num}</span>
                        <span>{price}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
// GoodsComponent.defaultProps = {
//     color: '黑色',
//     classify: '',
//     size: '',
//     goodId: '',
//     num: 1,
//     price: 100
// }