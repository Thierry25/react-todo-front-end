import { apiClient } from "./ApiClient";

export const getAllMyTodos = (username) => {
  return apiClient.get(`/users/${username}/todos`);
};

export const deleteTodoById = (username, id) => {
  return apiClient.delete(`/users/${username}/todos/${id}`);
};

export const updateTodo = (username, id) => {
  return apiClient.put(`/users/${username}/todos/${id}`);
};

export const retrieveTodo = (username, id) => {
  return apiClient.get(`/users/${username}/todos/${id}`);
};

export const patchTodo = (username, id, todo) => {
  return apiClient.patch(`/users/${username}/todos/${id}`, todo);
};

export const createTodo = (username, todo) => {
  return apiClient.post(`/users/${username}/todos`, todo);
};
