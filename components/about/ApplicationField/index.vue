<template>
  <div class="field-container">
    <!-- <div class="main-image-wrapper">
      <img :src="list[active].image" alt="">
      <img :src="`${list[active] && list[active].cover_picture}`" alt="">
      <div class="content">
        <div class="title-wrapper">
          <div class="title">{{list[active] && list[active].title}}</div>
          <div class="button" @click="toPath">Load More</div>
        </div>
        <div class="icon-wrapper">
          <img :src="list[active] && list[active].icon" alt="">
        </div>
      </div>
    </div> -->
    <div class="image-list d-md-none">
      <div :class="['item', { active: active === index}]" v-for="(item,index) in list"
        :key="index"
        @click="changeClick(index)"
      >
        <img :src="`${item.cover_picture_small}`" alt="">
        <div class="name">{{ item.title }}</div>
      </div>
    </div>
    <div class="mobile-my-swiper d-none d-md-block" v-swiper:myMobileSwiper="swiperMobileOption" :key="randomMKey">
      <div class="swiper-wrapper">
        <div :class="['swiper-slide', { active: active === index}]" v-for="(item,index) in list"
          :key="index" @click="changeClick(index)">
          <div :class="['item', { active: active === index}]">
            <img :src="`${item.cover_picture_small}`" alt="">
            <div class="name">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { exampleList } from '@/service/public'
export default {
  data() {
    return {
      swiperMobileOption: {
        loop: false,
        // autoplay: 6000,
        // initialSlide: 1,
        slidesPerView: 4.5,
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
      active: 0,
      randomMKey: Math.random(),
      list: [
        // {
        //   icon: require('@/static/images/about/field/icon_Data Center.png'),
        //   thumbnail: require('@/static/images/about/field/pic_数据中心_thumbnail.png'),
        //   image:  require('@/static/images/about/field/pic_数据中心.png'),
        //   name: '数据中心'
        // },
        // {
        //   icon: require('@/static/images/about/field/icon_ Industry and Agriculture.png'),
        //   thumbnail: require('@/static/images/about/field/pic_工农业应用_thumbnail.png'),
        //   image:  require('@/static/images/about/field/pic_工农业应用.png'),
        //   name: '工农业应用'
        // },
        // {
        //   icon: require('@/static/images/about/field/icon_ HVAC.png'),
        //   thumbnail: require('@/static/images/about/field/pic_暖通空调_thumbnail.png'),
        //   image:  require('@/static/images/about/field/pic_暖通空调.png'),
        //   name: '暖通空调'
        // },
        // {
        //   icon: require('@/static/images/about/field/icon_Subway traffic.png'),
        //   thumbnail: require('@/static/images/about/field/pic_轨道交通_thumbnail.png'),
        //   image:  require('@/static/images/about/field/pic_轨道交通.png'),
        //   name: '轨道交通'
        // },
        // {
        //   icon: require('@/static/images/about/field/icon_heating.png'),
        //   thumbnail: require('@/static/images/about/field/pic_北方供热采暖_thumbnail.png'),
        //   image:  require('@/static/images/about/field/pic_北方供热采暖.png'),
        //   name: '北方供热采暖'
        // },
        // {
        //   icon: require('@/static/images/about/field/icon_Home air conditioner.png'),
        //   thumbnail: require('@/static/images/about/field/pic_家用户式空调_thumbnail.png'),
        //   image:  require('@/static/images/about/field/pic_家用户式空调.png'),
        //   name: '家用户式空调'
        // },
      ]
    }
  },
  computed: {
  },
  watch: {
    list() {
      this.randomMKey = Math.random()
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    changeClick(index) {
      this.active = index
      this.myMobileSwiper.swipeTo(index, 1000, false)
    },
    toPath() {
      const item = this.list[this.active]
      if(item.is_link) {
        window.open(item.link_url)
        return
      }
    },
    async fetchData() {
      const res = await exampleList({
        limit: 6,
        page: 1
      })
      this.list = res.data
      console.log(res,111111)
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.field-container {
  .main-image-wrapper {
    position: relative;
    width: 100%;
    min-height: 700px;
    .content {
      position: absolute;
      left: 0;
      right: 135px;
      bottom: 144px;
      padding-left: 135px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .icon-wrapper {
        width: 112px;
        height: 112px;
      }
      .title {
        font-size: 72px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 64px;
        margin-bottom: 64px;
      }
      .button {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 165px;
        height: 45px;
        background: #354194;
        border-radius: 100px;
        border: 1px solid rgba(24, 30, 45, 0.2);
        font-size: 12px;
        font-family: Montserrat-Regular, Montserrat;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
  }
  .image-list {
    display: flex;
    justify-content: space-between;
    padding: 64px 135px 96px 135px;
  }
  .item {
    cursor: pointer;
    .name {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #404040;
      line-height: 32px;
      text-align: center;
      margin-top: 24px;
    }
    &.active {
      .name {
        color: #354194;
        font-weight: 600;
      }
    }
  }
  @media only screen and (max-width: 950px) {
    .main-image-wrapper {
      position: relative;
      // height: 400px;
      height: auto;
      margin-bottom: 24px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .content {
        position: absolute;
        left: 0;
        right: 0px;
        bottom: 30px;
        padding-left: 16px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: flex-start;
        .icon-wrapper {
          width: 112px;
          height: 112px;
        }
        .title {
          font-size: 40px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 64px;
          margin-bottom: 64px;
          margin-top: 64px;
        }
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 165px;
          height: 45px;
          background: #354194;
          border-radius: 100px;
          border: 1px solid rgba(24, 30, 45, 0.2);
          font-size: 12px;
          font-family: Montserrat-Regular, Montserrat;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
    }
    .image-list {
      display: flex;
      justify-content: space-between;
      padding: 64px 135px 96px 135px;
    }
    .item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .name {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #404040;
        line-height: 32px;
        text-align: center;
        margin-top: 12px;
      }
      &.active {
        .name {
          color: #354194;
          font-weight: 600;
        }
      }
    }
  }
}
.mobile-my-swiper {
  height: 108px;
  margin-bottom: 48px;
  img {
    width: 64px;
  }
}
</style>
