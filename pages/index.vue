<template>
  <div class="index-wrapper">
    <Header />
    <Banner />
    <Product />
    <ApplicationField />
    <About />
    <News />
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import Banner from '@/components/about/Banner/index.vue'
import Product from '@/components/about/Product/index.vue'
import ApplicationField from '@/components/about/ApplicationField/index.vue'
import About from '@/components/about/About/index.vue'
import News from '@/components/about/News/index.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Banner,
    Product,
    ApplicationField,
    About,
    News,
  }
}
</script>

<style lang="less" >
</style>
