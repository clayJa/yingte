<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="banner.cover_picture" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="banner.cover_picture_small" alt="">
    </div>
    <TabBar />
    <div class="wrapper">
      <div class="select">
        <ButtonGroup :options="options" :select="select" @onChange="handleChange" />
      </div>
      <div class="list-wrapper">
        <div class="list-item" v-for="(item,index) in list" :key="index">
          <div class="image">
            <img :src="`${item.cover_picture}`" alt="">
          </div>
          <div class="description">
            <div class="name">{{item.title}}</div>
            <!-- <div class="date">{{item.updated_at}}</div> -->
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
import TabBar from '@/components/about/TabBar/index.vue'
import ButtonGroup from '@/components/about/ButtonGroup/index.vue'
import { newsSearch } from '@/service/news'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      options: [
        {name: '政府荣誉', value: 2},
        {name: '行业荣誉', value: 3},
        {name: '客户荣誉', value: 4},
      ],
      select: 2,
      list: [
        // { image: require('@/static/images/about/honor/honor_image_1.png'), name: '国家高新技术企业证书', date: '2021/03/12' },
        // { image: require('@/static/images/about/honor/honor_image_2.png'), name: '“AAA”级企业信用等级', date: '2021/03/23' },
        // { image: require('@/static/images/about/honor/honor_image_3.png'), name: '国家高新技术企业证书', date: '2018/04/12' },
        // { image: require('@/static/images/about/honor/honor_image_4.png'), name: '2018年度热泵行业优秀零部件供应商', date: '2019/03/23' },
        // { image: require('@/static/images/about/honor/honor_image_5.png'), name: '2019热泵技术创新奖', date: '2004/04/12' },
        // { image: require('@/static/images/about/honor/honor_image_6.png'), name: '国家高新技术企业证书', date: '2008/03/23' },
        // { image: require('@/static/images/about/honor/honor_image_7.png'), name: '国家高新技术企业证书', date: '2004/04/12' },
        // { image: require('@/static/images/about/honor/honor_image_8.png'), name: '国家高新技术企业证书', date: '2008/03/23' },
      ],
      lastPage: 1,
      page: 1,
      banner: {}
    }
  },
  mounted() {
    this.fetchBannerData()
    this.fetchData()
  },
  watch: {
    select() {
      this.page = 1
      this.fetchData()
    }
  },
  methods: {
    handleChange(item,index) {
      this.select = item.value
    },
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
        limit: 8,
        page: page,
        category: this.select,
      })
      this.page = res.current_page
      this.lastPage = res.last_page
      this.list = res.data
    },
    ...mapActions(['fetchBannerList']),
    async fetchBannerData() {
      const res = await this.fetchBannerList({subclass: 'about_us'})
      if(res && res.length) {
        this.banner = res[0]
      }
    }
  },
  components: {
    TabBar,
    ButtonGroup,
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  .wrapper {
    padding: 96px 135px 0px 135px;
    .select {
      display: flex;
      justify-content: center;
      margin-bottom: 32px;
    }
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      // align-items: center;
      // justify-content: space-between;
      border-bottom: 1px solid #ECECEC;
      .list-item {
        margin-top: 16px;
        margin-bottom: 48px;
        width: 260px;
        margin-right: 30px;
        &:nth-child(4n) {
          margin-right: 30px;
        }
      }
      .description {
        padding-top: 24px;
        padding-bottom: 12px;
        .name {
          font-size: 16px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #171717;
          line-height: 22px;
          text-align: center;
        }
        .date {
          font-size: 14px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #8F92A1;
          line-height: 20px;
          margin-top: 4px;
          text-align: center;
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
      padding: 96px 16px 0px 16px;
      .select {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
      }
      .list-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ECECEC;
        .list-item {
          margin-top: 16px;
          margin-bottom: 48px;
          width: 100%;
          margin-right: 0;
          &:nth-child(4n) {
            margin-right: 0;
          }
        }
        .description {
          padding-top: 24px;
          padding-bottom: 12px;
          .name {
            font-size: 16px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #171717;
            line-height: 22px;
            text-align: center;
          }
          .date {
            font-size: 14px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #8F92A1;
            line-height: 20px;
            margin-top: 4px;
            text-align: center;
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
