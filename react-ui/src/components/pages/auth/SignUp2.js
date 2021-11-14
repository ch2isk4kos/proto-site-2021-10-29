import React, { useState } from "react";
import { Form, Input, Checkbox, Button, AutoComplete } from "antd";

const { Item } = Form;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
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

const SignUp2 = () => {
  const [form] = Form.useForm();
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
  });

  console.log("form:", form);

  const handleOnChange = (value) => {
    console.log("value:", value);
    console.log("form.getFieldsValue(value):", form.getFieldsValue(value));
    let input = form.getFieldsValue(value);
    setSignUpData(input);
    console.log("signUpData:", signUpData);
  };

  const handleOnSubmit = (values) => {
    console.log("Received form: ", form);
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  return (
    <div className="signup">
      <h1>Sign Up 2</h1>
      <Form
        {...formItemLayout}
        className="signup-form-2"
        name="register"
        form={form}
        initialValues={{ username: "", email: "" }}
        onValuesChange={handleOnChange}
        onFinish={handleOnSubmit}
        scrollToFirstError
      >
        {/* USERNAME */}
        <Item
          className="signup-form-item-2"
          name="username"
          label="Username"
          tooltip="What name do you go by?"
          rules={[
            {
              required: true,
              message: "Please input your username",
              whitespace: true,
            },
          ]}
        >
          <Input type="text" required />
        </Item>
        {/* EMAIL */}
        <Item
          className="signup-form-item-2"
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input type="email" required />
        </Item>
        {/* AGREEMENT */}
        <Item
          className="signup-form-item-2"
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
        {/* SUBMIT BUTTON */}
        <Item className="signup-form-item-2" {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default SignUp2;
