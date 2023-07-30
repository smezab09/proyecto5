import axios from "axios";

const URL_ROOT = "https://api-ecommerce-wqsn.onrender.com/api/auth";

const api = axios.create({
  baseURL: URL_ROOT,
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  },
});

const loginService = async (form) => {
  const resp = await api.post("/login", form);
  return resp;
};

const registerService = async (form) => {
  const resp = await api.post("/register", form);
  return resp;
};

const renewTokenService = async () => {
  const resp = await api.get("/renew");
  return resp;
};

export { api, loginService, registerService, renewTokenService };
