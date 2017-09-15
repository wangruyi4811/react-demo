import React ,{
    Component
} from 'react'

import Header from './HeaderComponent'
const Nav = () => (
    <nav className="nav">
        <a>女装</a>
        <a>男装</a>
        <a>孕童</a>
        <a>家居</a>
    </nav>
)
const Main = () => (
    <div>
        <section>
            <img src={require('../img/up.png')}/>
        </section>
        <section className="go-goods">
            <p>HOT&nbsp;&nbsp;SALE</p>
            <p>让心动夏装带你走遍世界</p>
            <p>查看系列商品2313</p>
        </section>
        <section>
            <img src="http://willam.wang/img/down.png"/>
        </section>
    </div>
)
export default class IndexComponent extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Nav/>
                <Main/>
            </div>
        )
    }
}