import Vue from 'vue'
import VueAwesomeSwiper from 'vue-swiper-2.x/dist/ssr'
import Header from '@/components/Header'
export default () => {
  Vue.use(VueAwesomeSwiper)
  Vue.use(Header)
}
