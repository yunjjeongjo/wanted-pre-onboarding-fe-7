import request from "./common";

export const createTodo = (token, data) => {
  return request({
    method: "POST",
    url: `/todos`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${token}`,
    },
    data: { todo: data },
  });
};

export const getTodo = (token) => {
  return request({
    method: "GET",
    url: `/todos`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTodo = (id, token, content, status) => {
  return request({
    method: "PUT",
    url: `/todos/${id}`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${token}`,
    },
    data: { todo: content, isCompleted: status },
  });
};

export const deleteTodo = (token, id) => {
  return request({
    method: "DELETE",
    url: `/todos/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
