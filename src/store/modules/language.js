const state = {
  locale: sessionStorage.getItem("locale") || "vi",
};

const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
    sessionStorage.setItem("locale", locale);
    location.reload();
  },
};

const actions = {
  changeLanguage({ commit }, locale) {
    commit("setLocale", locale);
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
