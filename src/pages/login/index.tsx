import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input, FormProps } from "antd";

import { FieldType } from "@pages/login/type";
import { authService } from "@commons/libraries/firebase/firebase.config";
import { loginUserState } from "@store/store";
import {
  InputItem,
  LoginForm,
  LoginWrapper,
  Logo,
  Wrapper,
} from "@pages/login/style";

export default function Login() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "loginUser",
  ]);

  const handleToLogin: FormProps<FieldType>["onFinish"] = (
    values: FieldType
  ) => {
    void onSubmit(values);
  };

  const onSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        username,
        password
      );
      if (data) {
        setLoginUser(data.user);
      }
    } catch (error) {
      window.alert(`등록되지 않은 관리자입니다.\n ${error}`);
    }
  };

  useEffect(() => {
    if (loginUser) {
      setCookie("accessToken", `${loginUser.accessToken}`);
      setCookie("loginUser", `${loginUser.email}`);
      navigate("/", { replace: true });
    }
  }, [loginUser]);

  useEffect(() => {
    if (cookies.accessToken || cookies.loginUser) {
      removeCookie("accessToken");
      removeCookie("loginUser");
    }
  }, []);

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
          <Form
            name="login-form"
            className="login-form"
            onFinish={handleToLogin}
          >
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
