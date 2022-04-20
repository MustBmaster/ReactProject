import { Form, Input, Button,Typography,notification} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import "./ApiInterceptors.js"
import { useState } from "react";
// import axios from "axios";
import { defaultPost } from "./ApiInterceptors.js";


const LoginForm = () => {
  const { Title } = Typography;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setMessage]= useState("test mess")
  // notification.config({
  //   maxCount: 1,
  //   duration: 2,
  // });
  // const openNotificationWithIcon = (type) => {
  //   notification[type]({
  //     message: type,
  //     description:msg
  //   });
  // };
  function loginHandler() {
    const payload= {
      userName: user,
      password: password,
    }

    const loginApi = "https://21-ex1-api.dev.3si.vn/auth/auth/login";
    defaultPost(loginApi,"POST",payload)
    // localStorage.setItem("ex1-auth-token", response.data.data);
    // axios
    //   .post(loginApi, {
    //     userName: user,
    //     password: password,
    //   })
    //   .then(function (response) {
    //     localStorage.setItem("ex1-auth-token", response.data.message);
    //     // console.log(response.data.message)
    //     setMessage("đăng nhập thành công")
    //     openNotificationWithIcon('success')
        
    //   })
    //   .catch(function (error) {
    //     setMessage(error.response.data.message)
    //     openNotificationWithIcon('error')
    //   })

  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={loginHandler}
    >
      <Form.Item>
        <Title level={3} className="title">
          Đăng nhập
        </Title>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Tài khoản không được bỏ trống",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Tài khoản"
          size="large"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Mật khẩu không được để trống",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
          size="large"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
          size="large"
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

function LoginPage() {
  return (
    <div className="login-page">
      <div className="form-wrapper">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
