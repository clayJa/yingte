<template>
  <div class="news-wrapper">
    <div class="title-wrapper">
      <div class="title">新闻资讯</div>
      <div class="more d-md-none">Load More</div>
    </div>
    <div class="content">
      <div class="left-wrapper d-md-none">
        <div class="item" @click="toPath(list[0])">
          <div class="image-wrapper">
            <img :src="`${this.list[0] && this.list[0].cover_picture}`" alt="">
          </div>
          <div class="title line-2">{{this.list[0] && this.list[0].title}}</div>
          <div class="info">{{this.list[0] && this.list[0].description}}</div>
          <div class="time">
            <span>热点资讯</span>
            <span>/</span>
            <span>{{this.list[0] && this.list[0].created_at}}</span>
          </div>
        </div>
      </div>
      <div class="right-wrapper d-md-none">
        <div class="item" @click="toPath(item)" v-for="(item,index) in this.list.slice(1)" :key="index">
          <div class="image-wrapper">
            <img :src="`${item.cover_picture}`" alt="">
          </div>
          <div class="title line-2">{{item.title}}</div>
          <div class="time">
            <span>热点资讯</span>
            <span>/</span>
            <span>{{item.created_at}}</span>
          </div>
        </div>
      </div>
      <div class="item-wrapper  d-none d-md-block">
        <div class="item" @click="toPath(item)" v-for="(item,index) in this.list" :key="index">
          <div class="image-wrapper">
            <img :src="`${item.cover_picture}`" alt="">
          </div>
          <div class="title line-2">{{item.title}}</div>
          <div class="time">
            <span>热点资讯</span>
            <span>/</span>
            <span>{{item.created_at}}</span>
          </div>
        </div>
      </div>
      <div class="mobile-more d-md-block d-none">Load More</div>
    </div>
  </div>
</template>

<script lang="ts">
import {newsSearch} from '@/service/news'
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    toPath(item) {
      if(item.is_link) {
        window.open(item.link_url)
        return
      }
      this.$router.push(`/news/detail?id=${item.id}`)
    },
    async fetchData() {
      const res = await newsSearch({
        limit: 5,
        page: 1,
        category: 1,
      })
      this.list = res.data
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.news-wrapper {
  padding: 96px 135px;
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
  @media only screen and (max-width: 760px) {
    padding: 96px 16px 64px 16px;
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
    }
    .content {
      flex-direction: column;
    }
    .item-wrapper {
      .item {
        width: 100%;
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
.mobile-more {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(154, 154, 154, 0.5);
  line-height: 32px;
  text-align: center;
  margin-top: 24px;
}
</style>
