import React from 'react';
import { useRouter } from 'next/router';
import { Button, Input, Typography, Form, Icon } from 'antd';

const { Title } = Typography;

const LoginContainer = () => {
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    router.push('/admin/dashboard');
  };

  return (
    <>
      <Form className="login-wrapper" onSubmit={handleSubmit}>
        <Title level={4}>Hello,</Title>
        <p className="title-caption">
          <span>Welcome back!</span> <span>Login to access your account.</span>
        </p>
        <Form.Item>
          <Input
            placeholder="Email"
            size="large"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Password"
            type="password"
            size="large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-button"
          block={true}
          size="large"
        >
          Login
        </Button>
      </Form>
      <style jsx>{`
        .login-button {
          width: 100%;
        }
        .title-caption {
          font-size: 16px;
          color: #000000;
        }
        .title-caption span {
          display: block;
          line-height: 20px;
        }
      `}</style>
    </>
  );
};

export default LoginContainer;
