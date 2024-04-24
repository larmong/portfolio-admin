import { useNavigate } from "react-router";
import { Button, Form, Input, FormProps } from "antd";

import {
  InputItem,
  LoginForm,
  LoginWrapper,
  Logo,
  Wrapper,
} from "@pages/login/style";
import { FieldType } from "@pages/login/type";

export default function Login() {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    console.log("Success:", values);
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <Logo>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-dark.svg`}
            alt=""
          />
        </Logo>
        <LoginForm>
          <Form name="login-form" className="login-form" onFinish={onFinish}>
            <InputItem>
              <span>id</span>
              <Form.Item<FieldType> name="username" className="ant-input">
                <Input placeholder="아이디를 입력해주세요." />
              </Form.Item>
            </InputItem>

            <InputItem>
              <span>password</span>
              <Form.Item<FieldType> name="password" className="ant-input">
                <Input.Password placeholder="비밀번호를 입력해주세요." />
              </Form.Item>
            </InputItem>

            <Form.Item>
              <Button htmlType="submit" className="ant-button">
                login
              </Button>
            </Form.Item>
          </Form>
        </LoginForm>
      </LoginWrapper>
    </Wrapper>
  );
}
