import request from "./common";
/* 
  로그인
  Response: { "access_token": String }
*/
export const login = ({ email, password }) => {
  return request({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: `/auth/signin`,
    data: {
      email,
      password,
    },
  });
};

/* 
    회원가입
    Response: { "access_token": String }
  */
export const signup = ({ email, password }) => {
  return request({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: `/auth/signup`,
    data: {
      email,
      password,
    },
  });
};
