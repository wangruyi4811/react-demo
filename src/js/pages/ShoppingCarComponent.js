import React, { Component } from 'react'


export default class ShoppingCarComponent extends Component {
    static defaultProps = {
        color: '黑色',
        classify: 'T恤衫',
        size: 'M(175/80A)',
        goodId: '116307501',
        num: 1,
        price: 100
    }
    render() {
        let {classify,price,color,size,num,goodId} = this.props;
        return (
            <div style={{'display':'flex','justifyContent':'space-around','alignItems':'center','padding':'0.3rem 0','height':'2.4rem','fontSize':'0.24rem','letterSpacing':'0.2em'}}>
                <div style={{'flexGrow':'1'}}><input type="checkbox" /></div>
                <div style={{'display':'flex','flexGrow':'4','justifyContent':'center'}}><img style={{'height':'2.4rem','width':'1.6rem'}} src={require('../../img/images/good.png')}/></div>
                <div style={{'height':'100%','flexGrow':'11'}}>
                    <p style={{'paddingBottom':'0.1rem'}}>{classify}<span style={{'fontSize':'0.14rem','color':'#acacac'}}>{goodId}</span></p>
                    <p style={{'display':'flex','fontSize':'0.18rem'}}>{color}<i className="edit-icon"></i></p>
                    <p style={{'display':'flex','padding':'0.68rem 0'}}>{size}<i className="edit-icon"></i></p>
                    <p style={{'display':'flex'}}><span style={{'display':'inline-flex','flexGrow':2}}><i className="count">-</i>&nbsp;{num}&nbsp;  <i className="count">+</i></span>￥{price}</p>
                </div>
            </div>
        )
    }
}