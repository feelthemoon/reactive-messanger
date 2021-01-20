import React from 'react';
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Button, LoginBlock} from "../../../components";

class LoginFormComponent extends React.Component {
    render() {
        return(
            <div>
                <div className="auth-page__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста войдите в свой аккаунт</p>
                </div>
                <LoginBlock>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item name="username">
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item name="password">
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large">С возвращением!</Button>
                    </Form.Item>
                    <Form.Item>
                        <span className="auth-page__ask">Вы ещё не с нами?</span>
                        <Link className="auth-page__link" to="/register">Зарегистрироваться</Link>
                    </Form.Item>
                </Form>
                </LoginBlock>
            </div>
        );
    }
}
export default LoginFormComponent;
