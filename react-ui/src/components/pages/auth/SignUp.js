import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const { Item } = Form;
const { Option } = Select;

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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Item>
  );

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <Form
        {...formItemLayout}
        className="signup-form"
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        {/* EMAIL */}
        <Item
          className="form-item"
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
          <Input />
        </Item>
        {/* PASSWORD */}
        <Item
          className="form-item"
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Item>
        {/* CONFIRM PASSWORD */}
        <Item
          className="form-item"
          name="confirm"
          label="Confirm Password"
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
          <Input.Password />
        </Item>
        {/* USERNAME */}
        <Item
          className="form-item"
          name="knickname"
          label="Knickname"
          tooltip="What should we call you?"
          rules={[
            {
              required: true,
              message: "Please input your knickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Item>
        {/* FAVORITE TEAM */}
        <Item
          className="form-item"
          name="team"
          label="Favorite Team"
          rules={[
            {
              required: true,
              message: "Select Your Favorite Team!",
            },
          ]}
        >
          <Select placeholder="select your team">
            <Option value="knicks">Knicks</Option>
            <Option value="female">Lakers</Option>
            <Option value="other">Other</Option>
          </Select>
        </Item>
        {/* CAPTCHA */}
        <br />

        <Item
          className="form-item"
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              <Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input the captcha you got!",
                  },
                ]}
              >
                <Input />
              </Item>
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Item>

        <Item
          className="form-item"
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
            I have read the <a href="www.google.com">agreement</a>
          </Checkbox>
        </Item>
        <Item {...tailFormItemLayout} className="form-item">
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default SignUp;
