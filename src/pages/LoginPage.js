import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import './LoginPage.css'
const { Title } = Typography;

function loginHandler(){
  fetch('https://21-ex1-api.dev.3si.vn/auth/auth/login')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data)
  })
}

const LoginForm = () => {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      // onFinish={loginHandler}
    >
      <Form.Item>
        <Title level={3} className="title">Đăng nhập</Title>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Tài khoản không được bỏ trống',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Tài khoản" 
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Mật khẩu không được để trống',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          className="login-form-button" 
          block size="large"
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

function LoginPage() {
    return (
      <div className='login-page'>
          <div className='form-wrapper'>
            <LoginForm/>
          </div>
      </div>
    );
}
  
export default LoginPage