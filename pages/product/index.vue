<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="require('@/static/images/about/banner/11.png')" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="require('@/static/images/about/mobile_banner/mobile_banner_5.png')" alt="">
    </div>
    <div class="wrapper">
      <div class="title">产品中心</div>
      <div class="list-wrapper">
        <div class="list-item" v-for="(item,index) in list" :key="index" @click="toDetail(item)">
          <div class="image">
            <img :src="`${item.cover_picture}`" alt="">
            <div class="button">应用</div>
          </div>
          <div class="description">
            <div class="name">{{item.title}}</div>
            <div class="link">Learn more <i class="iconfont icon">&#xe60a;</i></div>
          </div>
        </div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import { getProductList } from '@/service/public'
export default {
  data() {
    return {
      list: [
        { image: require('@/static/images/product/product_image_1.png'), name: '壳管式换热器' },
        { image: require('@/static/images/product/product_image_2.png'), name: '套管式换热器' },
        { image: require('@/static/images/product/product_image_3.png'), name: '降膜式换热器' },
        { image: require('@/static/images/product/product_image_4.png'), name: '蒸发式冷凝器' },
        { image: require('@/static/images/product/product_image_5.png'), name: '液冷散热器' },
        { image: require('@/static/images/product/product_image_6.png'), name: '分配器' },
      ]
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await getProductList({
        limit: 15
      })
      if(res.data && res.data.length) {
        this.list = res.data
      }
    },
    toDetail(item) {
      this.$router.push(`/product/detail?id=${item.id}`)
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  background: #F7F7F7;
  .wrapper {
    padding: 96px 135px 0px 135px;
    .title {
      position: relative;
      font-size: 46px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #000000;
      line-height: 54px;
      text-align: center;
      margin-bottom: 66px;
      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: -32px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 2px;
        background: #354194;
      }
    }
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 64px;
      .list-item {
        width: 555px;
        position: relative;
        margin-right: 30px;
        margin-bottom: 28px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #ECECEC;
        &:nth-child(2n) {
          margin-right: 0px;
        }
        &:hover {
          box-shadow: 20px 20px 40px 0px rgba(53, 65, 148, 0.2);
        }
        .image {
          width: 555px;
          height: 555px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          .button {
            position: absolute;
            top: 32px;
            right: 32px;
            cursor: pointer;
            display: inline-block;
            border-radius: 27px;
            border: 1px solid #9A9A9A;
            padding: 10px 46px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9A9A9A;
            line-height: 20px;
          }
          img {
            width: auto;
            max-width: 100%;
          }
        }
      }
      .description {
        padding: 32px;
        .name {
          font-size: 28px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #000000;
          line-height: 34px;
          text-align: center;
        }
        .link {
          cursor: pointer;
          font-size: 14px;
          font-family: Montserrat-Regular, Montserrat;
          font-weight: 400;
          color: #354194;
          line-height: 25px;
          text-align: center;
          margin-top: 12px;
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .wrapper {
      padding: 48px 16px 0px 16px;
      .title {
        position: relative;
        font-size: 46px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #000000;
        line-height: 54px;
        text-align: center;
        margin-bottom: 66px;
        &::after {
          content: '';
          position: absolute;
          display: block;
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: #354194;
        }
      }
      .list-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 64px;
        .list-item {
          width: 100%;
          position: relative;
          margin-right: 0;
          margin-bottom: 32px;
          background: #fff;
          border-radius: 4px;
          border: 1px solid #ECECEC;
          &:nth-child(2n) {
            margin-right: 0px;
          }
          &:hover {
            box-shadow: 20px 20px 40px 0px rgba(53, 65, 148, 0.2);
          }
          .image {
            width: 100%;
            height: 343px;
            padding: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .button {
              position: absolute;
              top: auto;
              bottom: -52px;
              right: auto;
              left: 50%;
              transform: translateX(-50%);

              display: inline-block;
              border-radius: 27px;
              border: 1px solid #9A9A9A;
              padding: 10px 46px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #9A9A9A;
              line-height: 20px;
            }
            img {
              width: 100%;
              max-height: 100%;
            }
          }
        }
        .description {
          padding: 32px;
          margin-top: 52px;
          .name {
            font-size: 28px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #000000;
            line-height: 34px;
            text-align: center;
          }
          .link {
            font-size: 14px;
            font-family: Montserrat-Regular, Montserrat;
            font-weight: 400;
            color: #354194;
            line-height: 25px;
            text-align: center;
            margin-top: 12px;
          }
        }
      }
    }
  }
}
</style>
