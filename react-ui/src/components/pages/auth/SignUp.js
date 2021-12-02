import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sendVerificationLink } from "../../../api/firebase/helpers";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { Item } = Form;

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
      <h1>Sign Up</h1>
      <Form
        className="signup-form"
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
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input
            className="signup-form-item-input"
            name="email"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email@address.com"
            autoFocus
          />
        </Item>
        {/* SUBMIT BUTTON */}
        <Item className="signup-form-item" shouldUpdate>
          {() => (
            <Button
              className="signup-form-button"
              type="primary"
              htmlType="submit"
              disabled={
                !email ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Confirm
            </Button>
          )}
        </Item>
      </Form>
    </div>
  );
};

export default SignUp;
