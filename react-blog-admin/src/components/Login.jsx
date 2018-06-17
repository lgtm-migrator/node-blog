import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../utils/axios';
import config from '../config';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class UserLogin extends Component {
    constructor(props) {
        super(props);
    }
    handleLogin(e) {
        e.preventDefault();
        const { history } = this.props;
        this.props.form.validateFields((err, data) => {
            if (!err) {
                axios.post('/login', data).then((res) => {
                    alert("登陆成功！");
                    localStorage.setItem(config.tokenKey, res.data.token);
                    history.push('/blog/admin/articles');
                });
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="sign-in">
                <div className="sign-in-main">
                    <img className="brand" src={require('assets/login-logo.png')} />
                    <div className="sign-in-panel">
                        <div className="sign-in-head">
                            <h3 className="sign-in-title">后台登陆</h3>
                        </div>
                        <Form onSubmit={(e) => this.handleLogin(e)} className="login-form">
                            <FormItem
                                label="账号："
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 16 }}
                            >
                                {getFieldDecorator('account', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input placeholder="请输入账户" />
                                )}
                            </FormItem>
                            <FormItem
                                label="密码："
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 16 }}
                            >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input type="password" placeholder="请填写密码" />
                                )}
                            </FormItem>
                            <FormItem
                                label="操作："
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 16 }}
                            >
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                    <div className="nodeblog">Powered by <a href="//www.lizc.me" title="轻量级nodeblog博客系统" rel="noopener noreferrer" target="_blank">LIZCBLOG</a></div>
                </div>
            </div>
        );
    }
}
export default withRouter(Form.create()(UserLogin));