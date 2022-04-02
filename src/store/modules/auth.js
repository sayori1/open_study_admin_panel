import { login, registration } from "@/api/services/auth";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("token"),
    user: (() => {
      let json = {};
      try {
        json = JSON.parse(localStorage.getItem("user"));
      } catch (_) {
        ("");
      }
      return json;
    })(),
  },
  getters: {
    isAdmin: ({ user }) => user?.roles?.includes("ADMIN"),
    isLoggedIn: ({ token }) => !!token,
  },
  mutations: {
    setToken(state, token) {
      console.log(token);
      localStorage.setItem("token", token);
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
      state.token = token;
    },
    setUser(state, user) {
      localStorage.setItem("user", user);
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, data) {
      const { email, password } = data;
      const response = await login(email, password);
      console.log(response);
      if (response) {
        commit("setToken", response.token);
        commit("setUser", response.user);
      }
      return response;
    },
    async registration({ commit }, data) {
      const { login, password, email } = data;
      const response = await registration(login, password, email);
      if (response) {
        commit("setToken", response.token);
        commit("setUser", response.user);
      }
      return response;
    },
    mounted({ commit, state }) {
      if (state.token) commit("setToken", state.token);
    },
  },
};
