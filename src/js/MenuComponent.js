import React,{Component} from 'react'

let menuArr = ['会员中心','我的订单','登录/注册']

export default class MenuComponent extends Component {
    
    render() {
        return (
            <div className="menu" >
                {
                    React.Children.map(this.props.children, function (child) {
                      return <p>{child}</p>;
                    })
                }
            </div>
        )
    }
}