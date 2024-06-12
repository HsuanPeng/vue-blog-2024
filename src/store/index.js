import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    searchKey: "",
    account: "Lisa",
  },
  mutations: {
    fetchArticles: (state, payload) => {
      state.articles = payload;
    },
    changeSearchKey: (state, payload) => {
      state.searchKey = payload;
    },
  },
  actions: {
    fetchArticles: async ({ commit }) => {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const response = await axios.get(api);
      const payload = response.data;
      commit("fetchArticles", payload);
    },
    changeSearchKey: ({ commit }, payload) => {
      commit("changeSearchKey", payload);
    },
  },
  getters: {
    filterBySearchKey: (state) => {
      if (state.articles.length) {
        if (state.searchKey === "") {
          return state.articles;
        } else {
          return state.articles.filter((art) =>
            art.title.includes(state.searchKey)
          );
        }
      }
    },
  },
});
