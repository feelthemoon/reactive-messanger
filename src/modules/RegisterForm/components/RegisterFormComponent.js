import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Button, LoginBlock} from "../../../components";

class RegisterFormComponent extends React.Component {
    render() {
        const successRegister = true;
        return(
            <div>
                <div className="auth-page__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <LoginBlock>
                    {!successRegister ?
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                        >
                            <Form.Item name="email">
                                <Input size="large" prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item name="username">
                                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше имя"/>
                            </Form.Item>
                            <Form.Item name="password">
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item name="repeat">
                                <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Повторите пароль"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large">Добро пожаловать!</Button>
                            </Form.Item>
                            <Form.Item>
                                <span className="auth-page__ask">Вы уже активно ведете диалоги?</span>
                                <Link className="auth-page__link" to="/login">
                                    Войти
                                </Link>
                            </Form.Item>
                        </Form> :
                        <div className="auth-page__success-block">
                            <div>
                                <InfoCircleTwoTone style={{fontSize: "50px" }}/>
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                        </div>
                    }
                </LoginBlock>
            </div>
        );
    }
}
export default RegisterFormComponent;
