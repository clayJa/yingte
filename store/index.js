export const state = () => ({
  isMobileMenu: true
});

export const mutations = {
  setIsMobileMenu(state, payload){
    state.isMobileMenu = payload;
  }
};

export const actions = {
  setIsMobileMenu(vuexContext, payload){
    vuexContext.commit('setIsMobileMenu', payload);
  }
};

export const getters = {
  getIsMobileMenu(state){
    return state.isMobileMenu;
  }
};

