import { apiClient } from "./ApiClient";

export const retrieveHelloWorldBean = () => {
  return apiClient.get("/hello-world");
};

export const retrivreHelloMessageWithName = (name, token) => {
  return apiClient.get(`/hello-world/path-variable/${name}`, {
    headers: {
      Authorization: token,
    },
  });
};
