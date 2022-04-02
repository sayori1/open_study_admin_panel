import axios from "axios";
import { baseURL, catchErrors } from "../api";

export async function login(email, password) {
  return catchErrors(() =>
    axios.post(baseURL + "/auth/login", { email, password })
  );
}

export async function registration(login, password, email) {
  return catchErrors(() =>
    axios.post(baseURL + "/auth/registration", {
      login,
      password,
      email,
    })
  );
}
