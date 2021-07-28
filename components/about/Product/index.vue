<template>
  <div class="product-container">
    <div class="decription">
      <div class="title">{{ this.productList[activeItem] && this.productList[activeItem].title}}</div>
      <div class="info" v-if="this.productList[activeItem]">
        <div v-for="(item,index) in this.productList[activeItem].description" :key="index">{{item.title}}</div>
        <!-- <div>采用专利逆流式结构，换热效率更高，占地面积小，减少机组尺寸；</div>
        <div>水侧采用闭式环状结构分配和集水槽设计，实现均匀布水；</div>
        <div>采用小管径换热管或换热板，氟侧换热加强，提高换热效率，大大减少制冷剂充注量；</div>
        <div>创新的填料结构和设计，增大湿空气与水的换热面积，降低机组高度；</div>
        <div>模块化结构设计，方便组装和维护。</div> -->
      </div>
      <!-- <div class="item-list">
        <div class="item">
          <span class="left">Item one</span>
          <span class="right">南方采暖</span>
        </div>
        <div class="item">
          <span class="left">Item two</span>
          <span class="right">轨道交通、数据中心</span>
        </div>
        <div class="item">
          <span class="left">Item three</span>
          <span class="right">工业应用等</span>
        </div>
      </div> -->
      <div class="button-wrapper">
        <div class="button">了解更多</div>
      </div>
    </div>
    <div class="right-wrapper">
      <div class="image-wrapper">
        <img :src="this.productList[activeItem] ? `/backApi/upload/${this.productList[activeItem].cover_picture}` : ''" alt="">
      </div>
      <!-- <div class="my-swiper">
        <div :class="['swiper-slide', { active: activeItem === index}]" v-for="(item,index) in productList"
          :key="index" @click="changeItem(index)">
          <div class="product-image">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div> -->
      <div class="my-swiper d-md-none" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div :class="['swiper-slide', { active: activeItem === index}]" v-for="(item,index) in productList"
            :key="index" @click="changeItem(index)">
            <div class="product-image">
              <img :src="`/backApi/upload/${item.cover_picture}`" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-my-swiper d-none d-md-block" v-swiper:myMobileSwiper="swiperMobileOption">
        <div class="swiper-wrapper">
          <div :class="['swiper-slide', { active: activeItem === index}]" v-for="(item,index) in productList"
            :key="index" @click="changeItem(index)">
            <div class="product-image">
              <img :src="`/backApi/upload/${item.cover_picture}`" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getProductList } from '@/service/public'
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        // autoplay: 6000,
        // spaceBetween: 30,
        slidesPerView: 3,
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
      swiperMobileOption: {
        loop: false,
        // autoplay: 6000,
        initialSlide: 1,
        slidesPerView: 1.8,
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
      activeItem: 0,
      randomKey: Math.random(),
      productList: [
        { img: '' },
        // { img: require('@/static/images/about/蒸发式冷凝器.png') },
        // { img: require('@/static/images/about/降膜式换热器.png') },
        // { img: require('@/static/images/about/降膜式换热器.png') },
      ],
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changeItem(index) {
      this.activeItem = index
      this.myMobileSwiper.swipeTo(index, 1000, false)
      this.mySwiper.swipeTo(index, 1000, false)
    },
    async fetchData() {
      const res = await getProductList({
        limit: 15
      })
      if(res.data && res.data.length) {
        this.productList = res.data
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
  width: 555px;
  height: 200px;
  border-bottom: 1px solid #ECECEC;
  .swiper-slide {
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    &.active {
      .product-image {
        border: 1px solid #354194;
      }
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 60px;
        height: 2px;
        background: #354194;
        bottom: 0px;
      }
    }
    .product-image {
      width: 165px;
      height: 165px;
      padding: 10px 20px;
      background: #FFFFFF;
      border-radius: 4px;
      display: flex;
      align-items: center;
      border: 1px solid #EEEEEE;
      // border: 1px solid #354194;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
.product-container {
  display: flex;
  padding: 96px 150px;
  align-items: center;
  justify-content: space-between;
  .decription {
    width: 525px;
    .title {
      font-size: 46px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #181E2D;
      line-height: 54px;
      margin-bottom: 48px;
    }
    .info {
      font-size: 16px;
      color: #9A9A9A;
      div {
        display: flex;
        margin-bottom: 8px;
        &::before {
          content: '·';
          display: inline-block;
          margin-right: 1em;
        }
      }
    }
    .item-list {
      margin-top: 32px;
      .item {
        display: flex;
        padding: 10px 0px;
        justify-content: space-between;
        border-top: 1px solid #ECECEC;
        &:last-child {
          border-bottom: 1px solid #ECECEC;
        }
        .left {
          font-size: 16px;
          font-family: Montserrat-Light, Montserrat;
          font-weight: 300;
          color: #9A9A9A;
        }
        .right {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #404040;
        }
      }
    }
    .button-wrapper {
      margin-top: 64px;
      .button {
        display: inline-block;
        font-size: 16px;
        font-family: Montserrat-Regular, Montserrat;
        font-weight: 400;
        color: #FFFFFF;
        padding: 14px 42px;
        background: #354194;
        border-radius: 4px;
        border: 1px solid rgba(24, 30, 45, 0.2);
      }
    }
  }
  .image-wrapper {
    max-height: 555px;
    max-width: 555px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    img {
      max-width: 100%;
      width: auto;
      max-height: 100%;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 0;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    .decription {
      margin: 0 16px;
      width: auto;
      .title {
        font-size: 46px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #181E2D;
        line-height: 54px;
        margin-bottom: 48px;
      }
      .info {
        font-size: 16px;
        color: #9A9A9A;
        div {
          display: flex;
          margin-bottom: 8px;
          &::before {
            content: '·';
            display: inline-block;
            margin-right: 1em;
          }
        }
      }
      .item-list {
        margin: 0 16px;
        margin-top: 32px;
        .item {
          display: flex;
          padding: 10px 0px;
          justify-content: space-between;
          border-top: 1px solid #ECECEC;
          &:last-child {
            border-bottom: 1px solid #ECECEC;
          }
          .left {
            font-size: 16px;
            font-family: Montserrat-Light, Montserrat;
            font-weight: 300;
            color: #9A9A9A;
          }
          .right {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #404040;
          }
        }
      }
      .button-wrapper {
        margin: 0 16px;
        margin-top: 64px;
        .button {
          display: inline-block;
          font-size: 16px;
          font-family: Montserrat-Regular, Montserrat;
          font-weight: 400;
          color: #FFFFFF;
          padding: 14px 42px;
          background: #354194;
          border-radius: 4px;
          border: 1px solid rgba(24, 30, 45, 0.2);
        }
      }
    }
    .right-wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
    .image-wrapper {
      padding: 25px;
      height: auto;
      display: block;
      border-radius: 4px;
      border: 1px solid #ECECEC;
      margin: 48px  16px;
      max-width: 100%;
      max-height: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.mobile-my-swiper  {
  position: relative;
  width: 100vw;
  height: 200px;
  border-bottom: 1px solid #ECECEC;
  .swiper-slide {
    display: flex;
    justify-content: center;
    position: relative;
    &.active {
      .product-image {
        border: 1px solid #354194;
      }
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 60px;
        height: 2px;
        background: #354194;
        bottom: 0px;
      }
    }
    .product-image {
      width: 165px;
      height: 165px;
      padding: 10px 20px;
      background: #FFFFFF;
      border-radius: 4px;
      display: flex;
      align-items: center;
      border: 1px solid #EEEEEE;
      // border: 1px solid #354194;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
