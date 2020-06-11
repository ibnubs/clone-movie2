import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../assets/style/login.scss';

const LoginForm = () => {
    return (
        <div className="container">
            <div className="logo">
                <div className="box-pink">
                    <svg height="45" width="55">
                        <polygon points="25,5 40,25 25,35"
                            style={{
                                fill: "white", stroke: "black", strokeWidth: "1"
                            }}
                        />
                    </svg>
                </div>
                <h2>Milan Tv</h2>
            </div>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a href={""} className="login-form-forgot">
                        Forgot password
                </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                     </Button>
                    <p>Or <a href={""}> register now! </a></p>
                </Form.Item>
            </Form>
        </div>
    )
}


export default LoginForm;