<template>
  <div class="index-wrapper">
    <Header />
    <Banner />
    <Product />
  </div>
</template>

<script lang="ts">
import Banner from '@/components/about/Banner/index.vue'
import Product from '@/components/about/Product/index.vue'
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
  }
}
</script>

<style lang="less" >
</style>
