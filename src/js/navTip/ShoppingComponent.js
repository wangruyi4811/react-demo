import React,{ Component } from 'react'

export default class ShoppingComponent extends Component {
    render() {
        return (
            <nav className="nav-bar clear">
                <i className="back-btn">&lt;</i>
                <a className="">购物清单</a>
                <span className="">兑券</span>
            </nav>
        )
    }
}