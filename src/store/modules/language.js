import { translateText } from "@/services/translate";

const state = {
  locale: localStorage.getItem("locale") || "vi",
};

const mutations = {
  setLocale(state, lang) {
    state.locale = lang;
    localStorage.setItem("locale", lang);
  },
};

const actions = {
  async changeLanguage({ commit }, lang) {
    commit("setLocale", lang);
  },
  async translate({ state }, text) {
    return await translateText(text, state.locale);
  },
};

const getters = {
  locale: (state) => state.locale,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
