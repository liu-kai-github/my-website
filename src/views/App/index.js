import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {WingBlank} from 'antd-mobile';
// import {Button} from 'antd-mobile';
// import logo from './logo.svg';
import 'animate.css';
import './App.css';

class Index extends Component {
    render() {
        return (
            <WingBlank size='md'>

                <div
                    className="animated infinite bounce"
                    style={{
                        fontSize: '100px',
                        paddingTop: '50px',
                        paddingBottom: '20px',
                        textAlign: 'center',
                    }}
                ><span className="title-color">猜数字</span></div>

                <Link className="am-button am-button-primary" to={'/game'}>开始游戏</Link>

                <div style={{
                    textAlign: 'right',
                    padding: '15px 0',
                }}><Link to={'/introduce'}>游戏规则 &gt;&gt;</Link></div>
            </WingBlank>
        );
    }
}

export default Index;
