import { login, signup } from "./userApi";
import { setItem } from "../storage";

export const onLogin = async ({ email, password }) => {
  // JWT 토큰 및 로컬 스토리지 초기화
  setItem("ACESS_TOKEN", "");
  localStorage.clear();
  const { data, error } = await login({ email, password });
  console.log(data, error);
  if (data) {
    console.log(data);
    setItem("ACESS_TOKEN", data.access_token); // 로그인 성공 시, JWT 토큰 갱신
  }
  return data;
};

export const onSignup = async ({ email, password }) => {
  // JWT 토큰 및 로컬 스토리지 초기화
  setItem("ACESS_TOKEN", "");
  localStorage.clear();
  const { data, error } = await signup({ email, password });
  console.log(data, error);
  if (data) {
    console.log(data);
    setItem("ACESS_TOKEN", data.access_token); // 회원가입 성공 시, JWT 토큰 갱신
  }
  return data;
};
