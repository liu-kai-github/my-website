import React from 'react';

import {List, InputItem, Button, WhiteSpace, Toast} from 'antd-mobile';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            // usernameHasError: '',
            password: '',
        };

        this.onUsernameInputChange = this.onUsernameInputChange.bind(this);
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    }

    onUsernameInputChange(value) {
        console.log(value, value);
        this.setState({
            username: value,
        });
    }

    onPasswordInputChange(value) {
        this.setState({
            password: value,
        });
    }

    onSubmitButtonClick() {
        const {username, password} = this.state;
        if (username !== 'LiuKai' || password !== 'LiuYujing') {
            Toast.info('账号或密码错误');
            return;
        }
        this.props.history.push('/photo-album');
    }

    render() {
        return (<div>
            <List renderHeader={() => '用户登录'}>

                <InputItem
                    type="text"
                    placeholder="请输入用户名"
                    // error={this.state.usernameHasError}
                    // onErrorClick={this.onUsernameErrorClick}
                    onChange={this.onUsernameInputChange}
                    value={this.state.username}
                >用户名</InputItem>

                <InputItem
                    type="password"
                    placeholder="请输入密码"
                    // error={this.state.usernameHasError}
                    // onErrorClick={this.onUsernameErrorClick}
                    onChange={this.onPasswordInputChange}
                    value={this.state.password}
                >密码</InputItem>

            </List>

            <WhiteSpace size='md'/>

            <Button
                type="primary"
                onClick={this.onSubmitButtonClick}
            >登录</Button>

        </div>);
    }
}

export default Login;
