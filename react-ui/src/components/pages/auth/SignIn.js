import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Item } = Form;

const SignIn = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const handleOnSubmit = (values) => {
    console.log("Finish:", values);
  };

  const handleOnSubmitError = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    // <div className="signin">
    //   <Form
    //     className="signin-form"
    //     form={form}
    //     name="basic"
    //     layout="inline"
    //     onFinish={handleOnSubmit}
    //     onFinishFailed={handleOnSubmitError}
    //     autoComplete="off"
    //   >
    //     <Item
    //       className="signin-form-item"
    //       name="username"
    //       rules={[
    //         {
    //           required: true,
    //           message: "Please input your username!",
    //         },
    //       ]}
    //     >
    //       <Input
    //         prefix={<UserOutlined className="site-form-item-icon" />}
    //         placeholder="Username"
    //       />
    //     </Item>
    //     <Item
    //       className="signin-form-item"
    //       name="password"
    //       rules={[
    //         {
    //           required: true,
    //           message: "Please input your password!",
    //         },
    //       ]}
    //     >
    //       <Input
    //         prefix={<LockOutlined className="site-form-item-icon" />}
    //         type="password"
    //         placeholder="Password"
    //       />
    //     </Item>
    //     <Item className="signin-form-item" shouldUpdate>
    //       {() => (
    //         <Button
    //           type="primary"
    //           htmlType="submit"
    //           disabled={
    //             !form.isFieldsTouched(true) ||
    //             !!form.getFieldsError().filter(({ errors }) => errors.length)
    //               .length
    //           }
    //         >
    //           Log in
    //         </Button>
    //       )}
    //     </Item>
    //   </Form>
    // </div>
    <div className="signin">
      <h1>Sign In.</h1>
      <Form
        className="signin-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnSubmit}
        onFinishFailed={handleOnSubmitError}
        autoComplete="off"
      >
        <Item
          className="signin-form-item"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Item>

        <Item
          className="signin-form-item"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Item>

        <Item
          className="signin-form-item"
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Item>

        <Item
          className="signin-form-item"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default SignIn;
