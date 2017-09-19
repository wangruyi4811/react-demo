import React, { Component } from 'react'


export class TipNavComponent extends Component {
    render() {
        return (
            <nav style={{'display':'flex','justifyContent':'space-between','alignItems':'center','height':'0.8rem','padding':'0 0.1rem','borderBottom':'1px solid #999'}}>
                <i>&lt;</i>
                <span style={{'textAlign':'center'}}>购物清单</span>
                <span>兑券</span>
            </nav>
        )
    }
}