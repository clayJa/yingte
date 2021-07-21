<template>
  <div class="index-wrapper">
    <Header />
    <div class="breadcrumb-wrapper">
      <Breadcrumb :data="routes" />
    </div>
    <div class="wrapper">
      <div class="title-wrapper">
        <div class="title">【原创】英特科技亮相“热泵变频与控制方法技术论坛”</div>
        <div class="description">
          <div class="date">2021-03-13 16:06:06</div>
          <div class="author">蔡文广</div>
          <div class="source">来源： 热泵产业资讯</div>
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
import Breadcrumb from '@/components/Breadcrumb/index.vue'
export default {
  data() {
    return {
      routes: [
        {
          name: '英特',
          path: '/',
        },
        {
          name: '新闻资讯',
          path: '/news',
        },
        {
          name: '正文',
          path: '/news/detail',
        },
      ],
    }
  },
  methods: {
  },
  components: {
    Breadcrumb,
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  background:#F7F7F7;
  .wrapper {
    margin: 48px 150px 96px 150px;
    background: #fff;
    padding: 0 64px;
    text-align: center;
    .title-wrapper {
      padding-top: 64px;
      padding-bottom: 12px;
      border-bottom: 1px solid #E5E5E5;
      .title {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #474747;
        line-height: 28px;
        margin-bottom: 24px;
      }
      .description {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 24px;
        display: inline-flex;
        & > div  {
          margin-left: 1em;
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
    padding: 48px 0;
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
        margin: 16px;
        padding: 0 16px;
      .title-wrapper {
        padding-top: 32px;
        padding-bottom: 12px;
        border-bottom: 1px solid #E5E5E5;
        .title {
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #474747;
          line-height: 28px;
          margin-bottom: 24px;
        }
        .description {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 24px;
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          & > div {
            margin-left: 1em;
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
      padding: 16px 0;
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
