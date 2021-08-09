import { settingAll, getBannerList } from '@/service/public'
export const state = () => ({
  isMobileMenu: true,
  globalSetting: {},
  locales: ['en-US', 'zh-CN'],
  locale: 'zh-CN',
});

export const mutations = {
  setIsMobileMenu(state, payload){
    state.isMobileMenu = payload;
  },
  setGlobalSetting(state, payload){
    state.globalSetting = payload;
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
        localStorage.setItem('locale',locale)
    }
  },
};

export const actions = {
  async fetchBannerList({commit}, payload) {
    const res = await getBannerList(payload)
    if(res) {
      return res
    }
    return false
  },
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

