import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sendVerificationLink } from "../../../api/firebase/helpers";
import {
  Form,
  Input,
  Checkbox,
  Button,
  notification,
  Divider,
  Space,
} from "antd";
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons";

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

const SignUp = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  let navigate = useNavigate();

  console.log("form:", form);

  useEffect(() => {
    if (user && user.token) navigate("/");
  }, [user, navigate]);

  const handleOnChange = (value) => {
    let input = form.getFieldsValue(value);
    setEmail(input);
    console.log("signUpData:", email);
  };

  const openNotification = (placement) => {
    notification.info({
      message: `Confirm Your Email`,
      description: "Check your email address to complete your registration.",
      placement,
    });
  };

  const handleOnSubmit = (values) => {
    console.log("Received values of form: ", values);

    const firebaseConfig = {
      url: "http://localhost:3000/signup/verified",
      // url: `${process.env.REACT_APP_REGISTER_REDIRECT_URL}`,
      handleCodeInApp: true,
    };

    // send email address to firebase api
    sendVerificationLink(values.email, firebaseConfig);
    // save email to local storage
    window.localStorage.setItem("email", values.email);
    // clear form fields
    form.resetFields();
    // empty state
    setEmail("");
    // redirect home
    navigate("/");
    // display instructions
    openNotification("topRight");
  };

  const handleOnSubmitFail = (list) => {
    console.log("list:", list);
    console.log("list.errorFields:", list.errorFields);
    list.errorFields.map((e) => alert(e.errors));
  };

  return (
    <div className="signup">
      <h1>Sign Up 2</h1>
      <Form
        {...formItemLayout}
        className="signup-form-2"
        name="register"
        form={form}
        initialValues={{ email: "" }}
        onValuesChange={handleOnChange}
        onFinishFailed={handleOnSubmitFail}
        onFinish={handleOnSubmit}
        scrollToFirstError
      >
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
          <Input type="email" autoFocus required />
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
          <Space>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </Space>
        </Item>
      </Form>
    </div>
  );
};

export default SignUp;
