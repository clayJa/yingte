<template>
  <div class="news-wrapper">
    <div class="title-wrapper">
      <div class="title">新闻资讯</div>
      <div class="more">Load More</div>
    </div>
    <div class="content">
      <div class="left-wrapper">
        <div class="item">
          <div class="image-wrapper">
            <img :src="require('@/static/images/about/news-image.png')" alt="">
          </div>
          <div class="title line-2">看展｜“碳中和”下的2021制冷展，暖通空调产业链重磅看点全景呈现…</div>
          <div class="info">4月7日-9日，第三十二届中国制冷展在上海新国际博览中心盛大召开。本届展会以“强基固本，质量优先，内外协同，低碳发展”为主题，共设置W1-W5、E1-E5共10个展馆，有来自10个国家和地区的1200多家企业和机构参展。展览规模和展商数量均创历史新高…</div>
          <div class="time">
            <span>热点资讯</span>
            <span>/</span>
            <span>August 21 2021</span>
          </div>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="item" v-for="(item,index) in 4" :key="index">
          <div class="image-wrapper">
            <img :src="require('@/static/images/about/news-image.png')" alt="">
          </div>
          <div class="title line-2">看展｜“碳中和”下的2021制冷展，暖通空调产业链重磅看点全景呈现…</div>
          <div class="time">
            <span>热点资讯</span>
            <span>/</span>
            <span>August 21 2021</span>
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
    }
  },
  computed: {
  },
  methods: {
    toPath() {
      console.log(1111)
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.news-wrapper {
  padding: 96px 150px;
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 68px;
    .title {
      font-size: 46px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #181E2D;
      line-height: 65px;
      position: relative;
      &::after {
        left: 0;
        bottom: -32px;
        position: absolute;
        content: '';
        display: inline-block;
        width: 80px;
        height: 2px;
        background: #354194;
      }
    }
    .more {
      font-size: 18px;
      font-family: Montserrat-Regular, Montserrat;
      font-weight: 400;
      color: #9A9A9A;
      line-height: 16px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    .left-wrapper {
      width: 552px;
      flex-shrink: 0;
      margin-right: 24px;
      .item {
        border-bottom: 1px solid #ECECEC;
        padding-bottom: 20px;
        .title {
          font-size: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #404040;
          line-height: 32px;
          margin-bottom: 24px;
          margin-top: 40px;
          padding: 0 32px;
        }
        .info {
          font-size: 14px;
          font-family: Montserrat-Light, Montserrat;
          font-weight: 300;
          color: #9A9A9A;
          line-height: 24px;
          margin-bottom: 38px;
          padding: 0 32px;
        }
        .time {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9A9A9A;
          line-height: 20px;
          padding: 0 32px;
          span:nth-child(1) {
            color: #404040;
          }
          span:nth-child(2) {
            display: inline-block;
            margin: 0 4px;
          }
        }
      }
    }
    .right-wrapper {
      display: inline-flex;
      flex-wrap: wrap;
      .item {
        width: 265px;
        border-bottom: 1px solid #ECECEC;
        padding-bottom: 20px;
        &:nth-child(2n+1) {
          margin-right: 24px;
        }
        .title {
          font-size: 18px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #404040;
          line-height: 25px;
          margin-bottom: 24px;
          margin-top: 20px;
          padding: 0 16px;
        }
        .time {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9A9A9A;
          line-height: 20px;
          padding: 0 16px;
          span:nth-child(1) {
            color: #404040;
          }
          span:nth-child(2) {
            display: inline-block;
            margin: 0 4px;
          }
        }
      }
    }
  }
}
</style>
