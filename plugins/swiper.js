import Vue from 'vue'
import VueAwesomeSwiper from 'vue-swiper-2.x/dist/ssr'
import Header from '@/components/Header'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
export default () => {
  Vue.use(VueAwesomeSwiper)
  Vue.use(Header)
  Vue.use(ContactUs)
  Vue.use(Footer)
}
