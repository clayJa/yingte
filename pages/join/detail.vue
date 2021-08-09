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
          <div class="date">发布时间：{{articleData.updated_at}}</div>
          <div class="author"></div>
          <div class="source">HR：{{articleData.hr_name}}</div>
        </div>
      </div>
      <div class="content">
        <div class="main-info">
          <div>
            <span class="name">薪资待遇：</span>
            <span>{{articleData.salary}}</span>
          </div>
          <div>
            <span class="name">工作时间：</span>
            <span>{{articleData.length_of_work}}</span>
          </div>
          <div>
            <span class="name">招聘人数：</span>
            <span>{{articleData.number_of_recruits}}</span>
          </div>
          <div>
            <span class="name">工作地点：</span>
            <span>{{articleData.work_place}}</span>
          </div>
        </div>
        <div class="info-title">岗位职责：</div>
        <div class="info">
          <div v-for="(item,index) in articleData.job_responsibilities || []" :key="index">{{item.title}}</div>
        </div>
        <div class="info-title">任职资格：</div>
        <div class="info">
          <div v-for="(item,index) in articleData.qualifications || []" :key="index">{{item.title}}</div>
        </div>
      </div>
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
import {hiringDetail} from '@/service/news'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      routes: [
        {
          name: '英特',
          path: '/',
        },
        {
          name: '联系我们',
          path: '/join',
        },
        {
          name: '加入我们',
          path: this.$route.fullPath,
        },
      ],
      articleData: {},
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
      const res = await hiringDetail({id: query.id})
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
    .content {
      padding: 48px 0;
      text-align: left;
      border-bottom: 1px solid #ECECEC;
      .main-info {
        font-size: 24px;
        font-family: PingFangSC;
        font-weight: 300;
        color: #474747;
        line-height: 45px;
        .name {
          font-weight: 400;
        }
      }
      .info-title {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #404040;
        line-height: 45px;
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 48px;
        margin-bottom: 32px;
        &::before {
          position: relative;
          content: '';
          width: 59px;
          height: 3px;
          margin-right: 32px;
          background-color: #404040;
        }
      }
      .info {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #9A9A9A;
        line-height: 42px;
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
      pointer-events: none !important;
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
      .content {
        padding: 48px 0;
        text-align: left;
        .main-info {
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 300;
          color: #474747;
          line-height: 24px;
          .name {
            font-weight: 400;
          }
        }
        .info-title {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #404040;
          line-height: 45px;
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 48px;
          margin-bottom: 32px;
          &::before {
            position: relative;
            content: '';
            width: 59px;
            height: 3px;
            margin-right: 32px;
            background-color: #404040;
          }
        }
        .info {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9A9A9A;
          line-height: 32px;
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
