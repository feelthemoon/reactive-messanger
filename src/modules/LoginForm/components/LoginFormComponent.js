import {Form, Input} from "antd";
import {LockOutlined,  MailOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

import {Button, LoginBlock} from "../../../components";
import {validateField} from "../../../utils/helpers";
const LoginFormComponent = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isInvalid,
        isSubmitting
    } = props;

    return (
        <div>
            <div className="auth-page__top">
                <h2>Вход</h2>
                <p>Войдите, чтобы начать общаться</p>
            </div>
            <LoginBlock>
                    <Form
                        onSubmit={handleSubmit}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            validateStatus ={
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
                        <Form.Item>
                            <Button disabled={isSubmitting} onClick={handleSubmit} type="primary" htmlType="submit" size="large">Добро пожаловать!</Button>
                        </Form.Item>
                        <Form.Item>
                            <span className="auth-page__ask">Вы еще не с нами?</span>
                            <Link className="auth-page__link" to="/register">
                                Зарегистрироваться
                            </Link>
                        </Form.Item>
                    </Form>
            </LoginBlock>
        </div>
    );
}
export default LoginFormComponent;
