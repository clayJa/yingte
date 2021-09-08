<template>
  <div class="banner-container">
    <div class="my-swiper d-md-none" v-swiper:mySwiper="swiperOption" :key="randomKey">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swiperBanner" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="mobile-my-swiper d-md-block d-none" v-swiper:myMobileSwiper="mobileSwiperOption" :key="randomMKey">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in mobileBanner" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
        <div class="mobile-swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {mapActions} from 'vuex'
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
        pagination: '.swiper-pagination',
      },
      mobileSwiperOption: {
        loop: true,
        autoplay: 6000,
        spaceBetween: 0,
        // pagination: '.swiper-pagination',
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
        pagination: '.mobile-swiper-pagination',
      },
      randomKey: Math.random(),
      randomMKey: Math.random(),
      swiperBanner: [
        // require('@/static/images/about/banner/1.png'),
        // require('@/static/images/about/banner/2.png'),
        // require('@/static/images/about/banner/3.png'),
        // require('@/static/images/about/banner/4.png'),
        // require('@/static/images/about/banner/5.png'),
        // require('@/static/images/about/banner/6.png'),
        // require('@/static/images/about/banner/7.png'),
        // require('@/static/images/about/banner/8.png'),
        // require('@/static/images/about/banner/9.png'),
        // require('@/static/images/about/banner/10.png'),
        // require('@/static/images/about/banner/11.png'),
        // require('@/static/images/about/banner/12.png'),
        // require('@/static/images/about/banner/13.png'),
        // require('@/static/images/about/banner/14.png'),
      ],
      mobileBanner: [
        // require('@/static/images/about/mobile_banner/mobile_banner_1.png'),
        // require('@/static/images/about/mobile_banner/mobile_banner_2.png'),
        // require('@/static/images/about/mobile_banner/mobile_banner_3.png'),
        // require('@/static/images/about/mobile_banner/mobile_banner_4.png'),
        // require('@/static/images/about/mobile_banner/mobile_banner_5.png'),
      ],
    } as DataProps
  },
  computed: {
  },
  mounted() {
    this.fetchBannerData()
  },
  watch: {
    swiperBanner() {
      this.randomKey = Math.random();
    },
    mobileBanner() {
      this.randomMKey = Math.random();
    },
  },
  methods: {
    ...mapActions(['fetchBannerList']),
    async fetchBannerData() {
      const res = await this.fetchBannerList({subclass: 'home'})
      if(res) {
        this.swiperBanner = res.map(it => it.cover_picture)
        this.mobileBanner = res.map(it => it.cover_picture)
      }
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  .my-swiper {
    position: relative;
    height: 600px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-pagination {
      display: inline-block;
      position: absolute;
      width: 100%;
      bottom: 24px;
      text-align: center;
      margin-left: -16px;
      /deep/ .swiper-pagination-switch {
        cursor: pointer;
        display: inline-block;
        height: 2px;
        width: 64px;
        background-color: fade(#fff,60);
        margin-right: 24px;
        &:last-child {
          margin-right: 0;
        }
        &.swiper-active-switch {
          background-color: #fff;
        }
      }
    }
  }

  .mobile-my-swiper {
    position: relative;
    min-height: 208px;
    max-height: 800px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mobile-swiper-pagination {
      display: inline-block;
      position: absolute;
      width: 100%;
      bottom: 24px;
      text-align: center;
      margin-left: -16px;
      /deep/ .swiper-pagination-switch {
        cursor: pointer;
        display: inline-block;
        height: 2px;
        width: 64px;
        background-color: fade(#fff,60);
        margin-right: 24px;
        &:last-child {
          margin-right: 0;
        }
        &.swiper-active-switch {
          background-color: #fff;
        }
      }
    }
  }

  @media only screen and (max-width: 760px) {
    .my-swiper {
      position: relative;
      height: 220px;
      width: 100%;
    }

    .mobile-my-swiper {
      position: relative;
      min-height: 208px;
      max-height: 220px;
      width: 100%;
    }
  }
</style>
