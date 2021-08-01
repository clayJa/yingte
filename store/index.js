import { settingAll } from '@/service/public'
export const state = () => ({
  isMobileMenu: true,
  globalSetting: {},
});

export const mutations = {
  setIsMobileMenu(state, payload){
    state.isMobileMenu = payload;
  },
  setGlobalSetting(state, payload){
    state.globalSetting = payload;
  }
};

export const actions = {
  async fetchGlobalSetting({commit}, payload) {
    const res = await settingAll(payload)
    let resultObj = {}
    if(res) {
      res.map(it => {
        resultObj = {
          ...resultObj,
          [it.name]: it.value
        }
      })
    }
    commit('setGlobalSetting',resultObj)
  }
};

export const getters = {
  getIsMobileMenu(state){
    return state.isMobileMenu;
  }
};

