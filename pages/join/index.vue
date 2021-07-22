<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="require('@/static/images/about/banner/13.png')" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="require('@/static/images/about/mobile_banner/mobile_banner_4.png')" alt="">
    </div>
    <div class="join">
      <div class="join-description">
        <div class="title-en">join us</div>
        <div class="title">加入我们</div>
        <div class="description">我们需要仍有传统美德的人，热爱生活，热爱工作，善于发现美好，技术大拿，或者行业大咖。如有兴趣加入我们欢迎把您的简历和作品投递到以下邮箱，简历投递邮箱：china.info@extek.com</div>
      </div>
      <div class="join-image">
        <img src="@/static/images/join_image.png" alt="">
      </div>
    </div>
    <div class="wrapper">
      <div class="job-list">
        <div class="job-item" v-for="(item,index) in list" :key="index">
          <div class="title-wrapper">
            <div class="date">{{ item.date }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="line"><span class="circle"></span></div>
          </div>
          <div class="content-wrapper">
            <div class="content line-3 ">{{ item.content }}</div>
            <div class="link">了解更多<i class="iconfont icon">&#xe60a;</i></div>
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
      list: [
        { date: ' 2021-03-13', title: 'XXX产品科技研发项目经理', content: '1. 负责产品的构建和各类项目实现；做为项目核心成员负责指导前端人员，前端架构和难点攻克。' },
        { date: ' 2021-03-13', title: 'XXX产品科技研发项目经理', content: '1. 负责产品的构建和各类项目实现；做为项目核心成员负责指导前端人员，前端架构和难点攻克。' },
        { date: ' 2021-03-13', title: 'XXX产品科技研发项目经理', content: '1. 负责产品的构建和各类项目实现；做为项目核心成员负责指导前端人员，前端架构和难点攻克。' },
      ]
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
  .join {
    background: #fff;
    padding: 96px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .join-description {
      max-width: 614px;
      margin-right: 64px;
      .title-en {
        font-size: 18px;
        font-family: Montserrat-Light, Montserrat;
        font-weight: 300;
        color: #9A9A9A;
        line-height: 32px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .title {
        font-size: 56px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #404040;
        line-height: 64px;
        margin: 24px 0;
      }
      .description {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #9A9A9A;
        line-height: 42px;
      }
    }
  }
  .wrapper {
    .job-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin: 107px 150px 0 150px;
      padding-bottom: 43px;
      border-bottom: 1px solid #ECECEC;
      .job-item {
        background: #FFFFFF;
        border-radius: 4px;
        width: 360px;
        height: 400px;
        cursor: pointer;
        &:hover {
          .title-wrapper .date {
            visibility: visible;
          }
          transform: scale(1.08);
          transition: all 0.5s;
        }
        .title-wrapper {
          text-align: center;
          .title {
            font-size: 28px;
            font-family: Avenir-Book, Avenir;
            font-weight: normal;
            color: #000000;
            line-height: 42px;
            padding: 0 68px;
          }
          .date {
            font-size: 12px;
            font-family: Montserrat-Regular, Montserrat;
            font-weight: 400;
            color: #9A9A9A;
            line-height: 12px;
            text-shadow: 0px 1px 24px rgba(0, 0, 0, 0.06);
            margin: 24px 0;
            visibility: hidden;
          }
          .line {
            display: flex;
            align-items: center;
            margin-top: 36px;
            &::before, &::after {
              content: '';
              display: block;
              height: 1px;
              flex-grow: 1;
              background: #ECECEC;
            }
            .circle {
              display: inline-block;
              width: 10px;
              height: 10px;
              background: #ECECEC;
              border-radius: 100%;
              margin: 0 8px;
            }
          }
        }
        .content-wrapper {
          padding: 36px 50px 48px 50px;
          text-align: center;
          .content {
            word-break: keep-all;
          }
          .link {
            font-size: 16px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #354194;
            line-height: 25px;
            text-shadow: 0px 1px 24px rgba(0, 0, 0, 0.06);
            margin-top: 48px;
            .icon {
              margin-left: 8px;
              font-size: 12px;
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
    .join {
      background: #fff;
      padding: 96px 16px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      .join-description {
        max-width: 100%;
        margin-right: 0;
        margin-top: 48px;
        .title-en {
          font-size: 14px;
          font-family: Montserrat-Light, Montserrat;
          font-weight: 300;
          color: #9A9A9A;
          line-height: 32px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .title {
          font-size: 40px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #404040;
          line-height: 64px;
          margin-top: 12px;
        }
        .description {
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9A9A9A;
          line-height: 42px;
        }
      }
    }
    .wrapper {
      .job-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 96px 16px;
        padding-bottom: 43px;
        border-bottom: 1px solid #ECECEC;
        .job-item {
          background: #FFFFFF;
          border-radius: 4px;
          width: 100%;
          height: 400px;
          cursor: pointer;
          &:not(:last-child) {
            margin-bottom: 64px;
          }
          &:hover {
            .title-wrapper .date {
              visibility: visible;
            }
            transform: scale(1.08);
            transition: all 0.5s;
          }
          .title-wrapper {
            text-align: center;
            .title {
              font-size: 28px;
              font-family: Avenir-Book, Avenir;
              font-weight: normal;
              color: #000000;
              line-height: 42px;
              padding: 0 68px;
            }
            .date {
              font-size: 12px;
              font-family: Montserrat-Regular, Montserrat;
              font-weight: 400;
              color: #9A9A9A;
              line-height: 12px;
              text-shadow: 0px 1px 24px rgba(0, 0, 0, 0.06);
              margin: 24px 0;
              visibility: hidden;
            }
            .line {
              display: flex;
              align-items: center;
              margin-top: 36px;
              &::before, &::after {
                content: '';
                display: block;
                height: 1px;
                flex-grow: 1;
                background: #ECECEC;
              }
              .circle {
                display: inline-block;
                width: 10px;
                height: 10px;
                background: #ECECEC;
                border-radius: 100%;
                margin: 0 8px;
              }
            }
          }
          .content-wrapper {
            padding: 36px 50px 48px 50px;
            text-align: center;
            .content {
              word-break: keep-all;
            }
            .link {
              font-size: 16px;
              font-family: PingFangSC-Light, PingFang SC;
              font-weight: 300;
              color: #354194;
              line-height: 25px;
              text-shadow: 0px 1px 24px rgba(0, 0, 0, 0.06);
              margin-top: 48px;
              .icon {
                margin-left: 8px;
                font-size: 12px;
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
