<template>
  <div class="header-wrapper">
    <div class="content d-md-none">
      <div class="title">关于英特</div>
      <div class="nav-wrapper">
        <div :class="['nav-item', {active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.sub_path !== '/')}]"
          v-for="(item,index) in menus" :key="index">
          <a @click.stop="toPath(item)">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-content">
      <div class="mobile-my-swiper d-none d-md-block" v-swiper:myMobileSwiper="swiperMobileOption">
        <div class="swiper-wrapper">
          <div :class="['swiper-slide', { active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.sub_path !== '/')}]"
            v-for="(item,index) in menus" :key="index">
              <div @click.stop="toPath(item)">
                {{ item.name }}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      menus: [
        { name: '公司简介', path: '/about/company' },
        { name: '企业荣誉', path: '/about/honor' },
        { name: '企业文化', path: '/about/culture' },
        { name: '资质专利', path: '/about/patent'},
      ],
      swiperMobileOption: {
        loop: false,
        // initialSlide: 1,
        slidesPerView: 3,
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
    }
  },
  methods: {
    toPath(item) {
      this.$router.push(item.path)
    },
    initIndex() {
      const path = this.$nuxt.$route.path
      const index = this.menus.findIndex(it => it.path === path)
      this.myMobileSwiper.swipeTo(index, 1000, false)
    }
  },
  mounted() {
    this.initIndex()
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
a {
  color: @textColor;
  text-decoration: none !important;
  &:hover {
    text-decoration: none;
    color: @mainColor;
  }
}
.title {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #838181;
}
.header-wrapper {
  padding: 0 150px;
  .content {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid #ECECEC;
  }
  @media only screen and (max-width: 760px) {
    padding: 0 16px;
    padding-top: 48px;
  }
}
.nav-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .nav-item {
    position: relative;
    white-space: nowrap;
  }
}
.nav-item {
  &:not(:last-child) {
    margin-right: 56px;
  }
  a {
    display: inline-block;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    padding-top: 54px;
    padding-bottom: 20px;
    color: @textColor;
    border-bottom: transparent 4px solid;
  }
  &.active > a {
    color:  @mainColor;
  }
  &.active a{
    border-color: @mainColor;
    color:  @mainColor;
  }
  .nav-icon {
    display: inline-block;
    transform: rotate(-180deg) scale(0.5);
    color: @iconColor;
  }
  &:hover {
    .nav-icon {
      transform: rotate(-0deg) scale(0.5);
      color:  @mainColor;
    }
    > a {
      color:  @mainColor;
    }
  }
}
.mobile-content {
  .mobile-my-swiper {
    border-bottom: 1px solid #ECECEC;
    .swiper-slide {
      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #9A9A9A;
      line-height: 22px;
      > div {
        display: inline-block;
        padding-bottom: 20px;
      }
      &.active {
        position: relative;
        > div {
          color: #354194;
          font-weight: 600;
          border-bottom: 2px solid #354194;
        }
      }
    }
  }
}
</style>
