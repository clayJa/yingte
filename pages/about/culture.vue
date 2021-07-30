<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="require('@/static/images/about/banner/12.png')" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="require('@/static/images/about/mobile_banner/mobile_banner_3.png')" alt="">
    </div>
    <TabBar />
    <div class="list-wrapper">
      <div class="list-item" v-for="item in list" :key="item.id">
        <div class="image"><img :src="`/backApi/upload/${item.cover_picture}`" alt=""></div>
        <div class="content">
          <div class="name">{{ item.title }}</div>
          <div class="info">{{ item.description }}</div>
        </div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import TabBar from '@/components/about/TabBar/index.vue'
import { newsSearch } from '@/service/news'
export default {
  data() {
    return {
      list: [
        // { image: require('@/static/images/about/culture/culture_image_1.png'), name: '企业愿景',
        //   info: '把浙江英特科技股份有限公司打造成为技术领先、世界级的换热器公司，成为一家有价值、可持续发展和有社会责任感的集团公司'},
        // { image: require('@/static/images/about/culture/culture_image_2.png'), name: '企业价值观',
        //   info: '技术引领、卓越品质、以人为本、社会责任'},
        // { image: require('@/static/images/about/culture/culture_image_3.png'), name: '企业发展目标',
        //   info: '公司坚持“产品领先、技术驱动、资本运营”的发展思路，着力推进产品技术创新，引领行业发展'},
      ]
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res:any = await newsSearch({
        limit: 3,
        page: 1,
        category: 5,
      })
      this.list = res.data
    },
  },
  components: {
    TabBar,
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  .list-wrapper {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 96px 135px;
    .list-item {
      width: 370px;
      height: 460px;
      background: #FFFFFF;
      box-shadow: 10px 10px 40px 0px rgba(54, 33, 0, 0.1);
      border-radius: 12px;
      margin-right: 30px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
    .image {
      width: 370px;
      height: 256px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      img {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
    }
    .content {
      padding: 32px;
      .name {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #404040;
        line-height: 32px;
        text-align: center;
      }
      .info {
        font-size: 16px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #9A9A9A;
        line-height: 32px;
        margin-top: 12px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .list-wrapper {
      display: flex;
      flex-direction: column;
      padding: 48px 16px;
      .list-item {
        width: 100%;
        height: auto;
        background: #FFFFFF;
        box-shadow: 10px 10px 40px 0px rgba(54, 33, 0, 0.1);
        border-radius: 12px;
        margin-bottom: 48px;
        margin-right: 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      .image {
        width: 100%;
        height: 256px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        img {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
      }
      .content {
        padding: 32px;
        .name {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 600;
          color: #404040;
          line-height: 32px;
          text-align: center;
        }
        .info {
          font-size: 16px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #9A9A9A;
          line-height: 32px;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
