<template>
  <div class="product-container">
    <div class="decription">
      <div class="title">蒸发式冷凝器</div>
      <div class="select-wrapper">
        <div :class="['select-item', { active: select === index}]" v-for="(item,index) in 3"
          :key="item" @click="changeSelect(index)">
          Model {{item}}
        </div>
      </div>
      <div class="info">
        <div>采用专利逆流式结构，换热效率更高，占地面积小，减少机组尺寸；</div>
        <div>水侧采用闭式环状结构分配和集水槽设计，实现均匀布水；</div>
        <div>采用小管径换热管或换热板，氟侧换热加强，提高换热效率，大大减少制冷剂充注量；</div>
        <div>创新的填料结构和设计，增大湿空气与水的换热面积，降低机组高度；</div>
        <div>模块化结构设计，方便组装和维护。</div>
      </div>
      <div class="item-list">
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
      </div>
      <div class="button-wrapper">
        <div class="button">了解更多</div>
      </div>
    </div>
    <div class="right-wrapper">
      <div class="image-wrapper">
        <img :src="require('@/static/images/about/蒸发式冷凝器.png')" alt="">
      </div>
      <div class="my-swiper">
        <div :class="['swiper-slide', { active: activeItem === index}]" v-for="(item,index) in productList"
          :key="index" @click="changeItem(index)">
          <div class="product-image">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeItem: 1,
      randomKey: Math.random(),
      productList: [
        { img: require('@/static/images/about/高效新型壳管式换热器.png') },
        { img: require('@/static/images/about/蒸发式冷凝器.png') },
        { img: require('@/static/images/about/降膜式换热器.png') },
        { img: require('@/static/images/about/降膜式换热器.png') },
      ],
      select: 1
    }
  },
  computed: {
  },
  watch: {
    // swiperBanner() {
    //   this.randomKey = Math.random();
    // }
  },
  methods: {
    changeItem(index) {
      this.activeItem = index
    },
    changeSelect(index) {
      this.select = index
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
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ECECEC;
  .swiper-slide {
    display: flex;
    justify-content: center;
    position: relative;
    &:not(:last-child) {
      margin-right: 30px;
    }
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
    }
    .select-wrapper {
      margin: 32px 0;
      display: flex;
      .select-item {
        cursor: pointer;
        font-size: 12px;
        font-family: Montserrat-Regular, Montserrat;
        font-weight: 400;
        color: #9A9A9A;
        line-height: 12px;
        padding: 15px 32px;
        border-radius: 100px;
        border: 1px solid transparent;
        &:not(:last-child) {
          margin-right: 20px;
        }
        &:hover,  &.active{
          color: #354194;
          border-color: #354194;
        }
      }
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
    // width: 474px;
    height: 555px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    img {
      height: 100%;
    }
  }
}
</style>
