import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { defaultPost } from "@pages/ApiInterceptors";
import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "@slices/LoginSlice";
import "../ApiInterceptors.js";
import "./LoginPage.css";

const LoginForm = () => {
  const { Title } = Typography;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // console.log(isLogin);
  function loginHandler() {
    const payload = {
      userName: user,
      password: password,
    };

    const loginApi = "https://21-ex1-api.dev.3si.vn/auth/auth/login";
    defaultPost(loginApi, "POST", payload)
      .then(function (response) {
        if (response && response.data && response.data.data) {
          localStorage.setItem("ex1-auth-token", response.data.data);
          dispatch(logIn());
          // console.log(response);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
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
