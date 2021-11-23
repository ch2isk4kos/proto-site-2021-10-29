import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../../../api/firebase/helpers";
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
  MailOutlined,
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

const PasswordReset = () => {
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
  };

  const openNotification = (placement) => {
    notification.info({
      message: `Check Your Email!`,
      description: "We've sent a link to reset your password.",
      placement,
    });
  };

  const handleOnSubmit = async (values) => {
    console.log("password reset input: ", values);

    // send email address to firebase api
    await sendPasswordReset(values.email)
      .then(() => {
        // clear form fields
        form.resetFields();
        // empty state
        setEmail("");
        // redirect home
        navigate("/");
        // display instructions
        openNotification("topRight");
      })
      .catch((err) => {
        console.log("password reset error:", err);
      });
  };

  const handleOnSubmitFail = (list) => {
    console.log("list:", list);
    console.log("list.errorFields:", list.errorFields);
    list.errorFields.map((e) => alert(e.errors));
  };

  return (
    <div className="signup">
      <h1>Forgot Password?</h1>
      <p>
        It happens! Enter your email and we'll send you a link to reset your
        password.
      </p>
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
          className="signin-form-item"
          name="email"
          rules={[
            {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Please enter your email address!",
              warningOnly: true,
              type: "string",
              min: 6,
            },
            // {
            //   validator: async (_, value) => {
            //     if (!value || value !== user.email) {
            //       return Promise.reject(
            //         new Error("Email address not recognized.")
            //       );
            //     }
            //   },
            // },
          ]}
          hasFeedback
        >
          <Input
            className="signin-form-item-input"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email@address.com"
            autoFocus
          />
        </Item>
        {/* SUBMIT BUTTON */}
        <Item className="signup-form-item-2" {...tailFormItemLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Reset Password
            </Button>
          </Space>
        </Item>
      </Form>
    </div>
  );
};

export default PasswordReset;
