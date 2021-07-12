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
    <div class="wrapper">
      <div class="list-wrapper">
        <div class="list-item" v-for="(item,index) in list" :key="index">
          <div class="image">
            <img :src="item.image" alt="">
          </div>
          <div class="description">
            <div class="name">{{item.name}}</div>
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
import TabBar from '@/components/about/TabBar/index.vue'
import ButtonGroup from '@/components/about/ButtonGroup/index.vue'
export default {
  data() {
    return {
      list: [
        { image: require('@/static/images/about/patent/patent_image_1.png'), name: '特种设备制造许可证' },
        { image: require('@/static/images/about/patent/patent_image_2.png'), name: '实用新型专利证书' },
        { image: require('@/static/images/about/patent/patent_image_3.png'), name: 'CRAA产品认证证书' },
        { image: require('@/static/images/about/patent/patent_image_4.png'), name: '实用新型专利证书' },
      ]
    }
  },
  methods: {
    handleChange(item,index) {
      this.select = item.value
    }
  },
  components: {
    TabBar,
    ButtonGroup,
  }
}
</script>

<style lang="less" >
.index-wrapper {
  .wrapper {
    padding: 96px 150px 0px 150px;
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ECECEC;
      .list-item {
        margin-bottom: 48px;
        width: 260px;
        position: relative;
        &:hover {
          .description {
            visibility: visible;
          }
        }
        &:nth-child(3n) {
          margin-right: 0px;
        }
        margin-right: 40px;
      }
      .description {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        background: rgba(53, 65, 148, 0.9);
        animation: all 1s;
        .name {
          font-size: 20px;
          font-family: Montserrat-Regular, Montserrat;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 26px;
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
      padding: 96px 16px 0px 16px;
      .list-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ECECEC;
        padding: 0 48px;
        .list-item {
          margin-bottom: 48px;
          width: 100%;
          position: relative;
          &:hover {
            .description {
              visibility: visible;
            }
          }
          &:nth-child(3n) {
            margin-right: 0px;
          }
          margin-right: 0;
        }
        .description {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          visibility: hidden;
          background: rgba(53, 65, 148, 0.9);
          animation: all 1s;
          .name {
            font-size: 20px;
            font-family: Montserrat-Regular, Montserrat;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 26px;
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
