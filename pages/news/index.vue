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
          <div class="item" v-for="item in list" :key="item.id" @click="toPath(item)">
            <div class="image-wrapper">
              <img :src="`${item.cover_picture}`" alt="">
            </div>
            <div class="title line-2">{{item.title}}</div>
            <div class="info">{{item.description}}</div>
            <div class="time">
              <span>热点资讯</span>
              <span>/</span>
              <span>{{item.updated_at}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pager-wrapper">
        <div :class="`prev step ${ page === 1 ? 'disabled' : ''}`" @click="fetchData('prev')"><i class="iconfont icon">&#xe608;</i>上一页</div>
        <div :class="`next step ${ page === lastPage ? 'disabled' : ''}`" @click="fetchData('next')">下一页<i class="iconfont icon">&#xe60a;</i></div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import { newsSearch } from '@/service/news'
export default {
  data() {
    return {
      page: 1,
      lastPage: 1,
      list: [],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData(type) {
      let page
      switch (type) {
        case 'prev':
          page = this.page - 1
          break;
        case 'next':
          page = this.page + 1
          break;
        default:
          page = this.page
          break;
      }
      const res:any = await newsSearch({
        limit: 6,
        page: page,
        category: 1,
      })
      this.page = res.current_page
      this.lastPage = res.last_page
      console.log(res,1111)
      this.list = res.data
    },
    toPath(item) {
      if(item.is_link) {
        window.open(item.link_url)
        return
      }
      this.$router.push(`/news/detail?id=${item.id}`)
    },
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
        padding: 96px 135px 0px 135px;
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
        // justify-content: space-between;
        margin: 96px 135px 0 135px;
        border-bottom: 1px solid #ECECEC;
        .item {
          width: 370px;
          margin-bottom: 32px;
          background: #fff;
          border-bottom: 4px solid #fff;
          border-radius: 4px;
          cursor: pointer;
          margin-right: 15px;
          &:nth-child(3n) {
            margin-right: 0;
          }
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
    padding: 48px 135px;
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
            margin-right: 0;
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
