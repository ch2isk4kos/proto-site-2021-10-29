import React, { useState, useEffect } from "react";
import { signInWithEmail } from "../../api/firebase/config";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Item } = Form;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp2Form = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const [signUpData, setSignUpData] = useState({
    // email: `${window.localStorage.getItem("email")}}`,
    email: "",
    username: "",
    password: "",
    agreement: false,
  });

  useEffect(() => {
    forceUpdate({});
  }, []);

  useEffect(() => {
    setSignUpData({ email: window.localStorage.getItem("email") });
    console.log("SignUp2Form -> signUpData:", signUpData);
  }, []);

  const handleOnChange = (value) => {
    let input = form.getFieldsValue(value);
    setSignUpData({ email: signUpData.email, ...input });
    console.log("value:", value);
    console.log("input:", input);
    console.log("signUpData:", signUpData);
  };

  const handleOnSubmit = (values) => {
    console.log("Finish:", values);
    console.log("signUpData", signUpData);
    console.log("window.location.href", window.location.href);
    const { email, password, username } = signUpData;
    // form.resetFields();
  };

  const handleOnSubmitError = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signup">
      <h1>Complete Sign Up.</h1>
      <Form
        className="signin-form"
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          email: signUpData.email,
          username: "",
          password: "",
        }}
        onValuesChange={handleOnChange}
        onFinish={handleOnSubmit}
        onFinishFailed={handleOnSubmitError}
        autoComplete="off"
      >
        {/* Email */}
        <Item className="signin-form-item" label="Email">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={signUpData.email}
            disabled
          />
        </Item>
        {/* Username */}
        <Item
          className="signin-form-item"
          label="Username"
          name="username"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            autoFocus
            required
          />
        </Item>
        {/* Password */}
        <Item
          className="signin-form-item"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              validator: async (_, value) => {
                if (!value || value.length < 6) {
                  return Promise.reject(
                    new Error("Password must be at least 6 characters")
                  );
                }
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            required
          />
        </Item>
        {/* Confirm Password */}
        <Item
          className="signin-form-item"
          name="confirm"
          label="Confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            required
          />
        </Item>
        {/* Agreement Checkbox */}
        <Item
          className="signin-form-item"
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </Item>
        {/* Submit Button */}
        <Item className="signin-form-item" shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Sign Up
            </Button>
          )}
        </Item>
      </Form>
    </div>
  );
};

export default SignUp2Form;
