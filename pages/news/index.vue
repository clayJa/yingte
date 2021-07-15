<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="require('@/static/images/about/banner/12.png')" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="require('@/static/images/about/mobile_banner/mobile_banner_3.png')" alt="">
    </div>
    <div class="wrapper">
      <div class="new-content">
        <div class="title-wrapper">
          <div class="title">
            新闻资讯
          </div>
        </div>
        <div class="list-wrapper">
          <div class="item" v-for="item in 6" :key="item">
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
      </div>
      <div class="pager-wrapper">
        <div class="prev step disabled"><i class="iconfont icon">&#xe608;</i>上一页</div>
        <div class="next step">下一页<i class="iconfont icon">&#xe60a;</i></div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  background:#F7F7F7;
  .wrapper {
    .new-content {
      .title-wrapper {
        padding: 96px 150px 0px 150px;
        background: #fff;
        .title {
          font-size: 46px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #404040;
          line-height: 65px;
          &::after {
            content: '';
            display: block;
            width: 80px;
            height: 2px;
            background: #354194;
            margin-top: 32px;
          }
        }
      }
      .list-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 96px 150px 0 150px;
        border-bottom: 1px solid #ECECEC;
        .item {
          width: 370px;
          margin-bottom: 32px;
          background: #fff;
          border-bottom: 4px solid #fff;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            border-color: #354194;
          }
          .image-wrapper {
            height: 240px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .title {
            font-size: 22px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #404040;
            line-height: 30px;
            margin: 32px 32px 22px 32px;
          }
          .info {
            font-size: 14px;
            font-family: Montserrat-Light, Montserrat;
            font-weight: 300;
            color: #9A9A9A;
            line-height: 20px;
            padding: 0 32px 32px 32px;
          }
          .time {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9A9A9A;
            line-height: 20px;
            padding: 0 32px 32px 32px;
            span:first-child {
              color: #404040;
            }
          }
        }
      }
    }
  }
  .pager-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #3E3E3E;
    line-height: 28px;
    letter-spacing: 1px;
    padding: 48px 150px;
    .icon {
      font-size: 38px;
    }
    .disabled {
      color: #9A9A9A;
    }
    .step {
      cursor: pointer;
      &:hover {
        color: #354194;
      }
    }
    .prev {
      display: inline-flex;
      align-items: center;
      .icon {
        margin-right: 16px;
      }
    }
    .next {
      display: inline-flex;
      align-items: center;
      .icon {
        margin-left: 16px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .wrapper {
      .new-content {
        .title-wrapper {
          padding: 96px 16px 0px 16px;
          background: #fff;
          .title {
            font-size: 40px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #181E2D;
            line-height: 56px;
            &::after {
              content: '';
              display: block;
              width: 80px;
              height: 2px;
              background: #354194;
              margin-top: 32px;
            }
          }
        }
        .list-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 48px 16px 0 16px;
          border-bottom: 1px solid #ECECEC;
          .item {
            width: 100%;
            margin-bottom: 32px;
            background: #fff;
            border-bottom: 4px solid #fff;
            border-radius: 4px;
            cursor: pointer;
            &:hover {
              border-color: #354194;
            }
            .image-wrapper {
              height: 240px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .title {
              font-size: 22px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #404040;
              line-height: 30px;
              margin: 32px 32px 22px 32px;
            }
            .info {
              font-size: 14px;
              font-family: Montserrat-Light, Montserrat;
              font-weight: 300;
              color: #9A9A9A;
              line-height: 20px;
              padding: 0 32px 32px 32px;
            }
            .time {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              line-height: 20px;
              padding: 0 32px 32px 32px;
            }
          }
        }
      }
    }
    .pager-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3E3E3E;
      line-height: 28px;
      letter-spacing: 1px;
      padding: 16px 16px;
      .icon {
        font-size: 38px;
      }
      .disabled {
        color: #9A9A9A;
      }
      .step {
        cursor: pointer;
        &:hover {
          color: #354194;
        }
      }
      .prev {
        display: inline-flex;
        align-items: center;
        .icon {
          margin-right: 16px;
        }
      }
      .next {
        display: inline-flex;
        align-items: center;
        .icon {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
