import { login, signup } from "./userApi";
import { setItem } from "../storage";

export const onLogin = async ({ email, password }) => {
  // JWT 토큰 및 로컬 스토리지 초기화
  setItem("ACCESS_TOKEN", "");
  localStorage.clear();
  const { data } = await login({ email, password });
  if (data) {
    setItem("ACCESS_TOKEN", data.access_token); // 로그인 성공 시, JWT 토큰 갱신
  } else {
  }
  return data;
};

export const onSignup = async ({ email, password }) => {
  // JWT 토큰 및 로컬 스토리지 초기화
  setItem("ACCESS_TOKEN", "");
  localStorage.clear();
  const { data } = await signup({ email, password });

  if (data) {
    setItem("ACCESS_TOKEN", data.access_token); // 회원가입 성공 시, JWT 토큰 갱신
  }
  return data;
};
