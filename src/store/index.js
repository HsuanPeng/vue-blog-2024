import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    account: "Lisa",
  },
  mutations: {
    fetchArticles: (state, payload) => {
      state.articles = payload;
    },
  },
  actions: {
    fetchArticles: async ({ commit }) => {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const response = await axios.get(api);
      const payload = response.data;
      commit("fetchArticles", payload);
    },
  },
});
