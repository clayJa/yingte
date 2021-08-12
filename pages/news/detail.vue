<template>
  <div class="index-wrapper">
    <Header />
    <div class="breadcrumb-wrapper">
      <Breadcrumb :data="routes" />
    </div>
    <div class="wrapper">
      <div class="title-wrapper">
        <div class="title">{{articleData.title}}</div>
        <div class="description">
          <div class="date">{{articleData.created_at}}</div>
          <!-- <div class="author">蔡文广</div>
          <div class="source">来源： 热泵产业资讯</div> -->
        </div>
      </div>
      <div class="content" v-html="articleData.content"></div>
      <div class="pager-wrapper">
        <div :class="`prev step ${!articleData.previous ? 'disabled' : ''}`" @click="toPath(articleData.previous)"><i class="iconfont icon">&#xe608;</i>上一页</div>
        <div :class="`next step ${!articleData.next ? 'disabled' : ''}`" @click="toPath(articleData.next)">下一页<i class="iconfont icon">&#xe60a;</i></div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { newsDetail } from '@/service/news'
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
          path: this.$route.fullPath,
        },
      ],
      articleData: {}
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    '$route.fullPath'() {
      this.fetchData()
    }
  },
  methods: {
    toPath(item) {
      this.$router.push(`/news/detail?id=${item.id}`)
    },
    async fetchData() {
      const query = this.$route.query
      const res = await newsDetail({id: query.id})
      console.log(res,'requestData')
      this.articleData = res
    },
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
    margin: 48px 135px 96px 135px;
    background: #fff;
    padding: 0 64px;
    text-align: center;
    .content {
      padding: 32px 0;
      border-bottom: 1px solid #ECECEC;
      text-align: initial;
    }
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
      color: #9A9A9A !important;
      cursor: not-allowed !important;
      pointer-events: none;
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
        .content {
          padding: 32px 0;
          border-bottom: 1px solid #ECECEC;
        }
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
