import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";

import {Button, LoginBlock} from "../../../components";
import {validateField} from "../../../utils/helpers";

const RegisterFormComponent = props =>{
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    const  successRegister = false;
    return (
        <div>
            <div className="auth-page__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <LoginBlock>
                {!successRegister ?
                    <Form
                        onSubmit={handleSubmit}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            validateStatus = {
                                validateField({key: "email", touched, errors})
                            }
                            hasFeedback
                            help={!touched.email? null : errors.email }
                        >
                            <Input
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="large"
                                prefix={<MailOutlined  className="site-form-item-icon" />}
                                placeholder="Email"

                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus = {
                                validateField({key: "username", touched, errors})
                            }
                            hasFeedback
                            help={!touched.username? null : errors.username}
                        >
                            <Input
                                id="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="large"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Ваше имя"

                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus = {
                                validateField({key: "password", touched, errors})
                            }
                            hasFeedback
                            help={!touched.password? null : errors.password}
                        >
                            <Input
                                value={values.password}
                                id="password"
                                type="password"
                                placeholder="Password"
                                size="large"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                prefix={<LockOutlined className="site-form-item-icon" />}

                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus = {
                                validateField({key: "repeat", touched, errors})
                            }
                            hasFeedback
                            help={!touched.repeat? null : errors.repeat}
                        >
                            <Input
                                type="password"
                                id="repeat"
                                value={values.repeat}
                                size="large"
                                placeholder="Повторите пароль"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                prefix={<LockOutlined className="site-form-item-icon" />}

                            />
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large">Добро пожаловать!</Button>
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
export default RegisterFormComponent;
