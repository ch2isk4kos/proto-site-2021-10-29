import React, { useState } from "react";
import {
  InfoCircleOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Form, Input, Checkbox, Button, Tooltip } from "antd";

const { Item } = Form;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("event:", e);
    console.log("username: ", username);
    console.log("email: ", email);
    setUsername("");
    setEmail("");
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <div className="signup-form">
        <form onSubmit={handleOnSubmit}>
          <Form
            component={false}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
          >
            <Item label="Username">
              <Input
                className="signup-form-item"
                type="username"
                placeholder="sportsfan01"
                value={username}
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Enter Username">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                required
              />
            </Item>
            <Item label="Email">
              <Input
                className="signup-form-item signup-form-input"
                type="email"
                placeholder="sportsfan01@google.com"
                value={email}
                prefix={<SendOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Enter Email Address">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Item>
            <Checkbox className="signup-form-item">
              I have read the <a href="www.google.com">agreement</a>
            </Checkbox>
            <br />
            <Button
              className="signup-form-btn"
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          </Form>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
