<template>
  <div class="banner-container">
    <div class="my-swiper" v-swiper:mySwiper="swiperOption" :key="randomKey">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swiperBanner" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
        <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
type DataProps = {
  swiperOption: any
}
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 6000,
        spaceBetween: 0,
        // pagination: '.swiper-pagination',
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
      randomKey: Math.random(),
      swiperBanner: [
        require('@/static/images/about/banner/1.png'),
        require('@/static/images/about/banner/2.png'),
        require('@/static/images/about/banner/3.png'),
        require('@/static/images/about/banner/4.png'),
        require('@/static/images/about/banner/5.png'),
        require('@/static/images/about/banner/6.png'),
        require('@/static/images/about/banner/7.png'),
        require('@/static/images/about/banner/8.png'),
        require('@/static/images/about/banner/9.png'),
        require('@/static/images/about/banner/10.png'),
        require('@/static/images/about/banner/11.png'),
        require('@/static/images/about/banner/12.png'),
        require('@/static/images/about/banner/13.png'),
        require('@/static/images/about/banner/14.png'),
      ]
    } as DataProps
  },
  computed: {
  },
  watch: {
    // swiperBanner() {
    //   this.randomKey = Math.random();
    // }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.my-swiper {
  position: relative;
  height: 800px;
  width: 100%;
}
</style>
