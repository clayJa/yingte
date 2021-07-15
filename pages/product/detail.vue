<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="require('@/static/images/about/banner/11.png')" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="require('@/static/images/about/mobile_banner/mobile_banner_5.png')" alt="">
    </div>
    <div class="detail">
      <div class="title-wrapper clearfix">
        <div class="title">壳管式换热器</div>
        <div class="product-image">
          <img :src="require('@/static/images/product/product_image.png')" alt="">
        </div>
      </div>
      <div class="product-description">
        <div class="sub-title">产品描述</div>
        <div class="description">
          <div>采用分配器分液，保证管程冷媒分配均匀，改善了管程的设计，最大限度地利用了换热面积，换热性能良好；</div>
          <div>工艺上改胀接为焊接，耐压强度高，大幅提升了产品的可靠性。取消了管板和管箱，分配器、收集器、换热管焊接一体，使得多个系统完全独立，不存在密封泄漏风险，特别适合R410a、R32等新型环保制冷剂；</div>
          <div>耐脏、耐堵、耐冻，尾部悬伸短，抗振性好，克服了振动断裂的风险；</div>
          <div>产品标准化、模块化设计，适合批量化生产，大大提高产品质量，易于拆装维护，缩短生产交货周期。</div>
        </div>
      </div>
      <div class="product-display">
        <div class="sub-title">产品展示</div>
        <div class="display">
          <div class="display-item" v-for="(item,index) in product" :key="index">
            <div class="image">
              <img :src="item.image" alt="">
            </div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="product-advantage">
        <div class="title">产品优势</div>
        <div class="advantage">
          <div class="item" v-for="(item,index) in advantage" :key="index">{{ item }}</div>
        </div>
      </div>
      <div class="product-application">
        <div class="sub-title">应用领域</div>
        <div class="application">
          <div class="item" v-for="(item,index) in application" :key="index">
            <div class="image">
              <img :src="item.image" alt="">
              <div class="info">
                <div class="info1">{{ item.name }}</div>
                <div class="info2">{{ item.info }}</div>
              </div>
            </div>
          </div>
        </div>
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
      advantage: ['易于维护','广泛应用套筒轴承和免维护','适用冷凝器的电机和轴承，防止电机过热，减少轴承磨损',],
      product: [
        { image: require('@/static/images/product/sub_image_1.png'), name: '塑料壳管' },
        { image: require('@/static/images/product/sub_image_1.png'), name: '带分配器的壳管式换热器' },
        { image: require('@/static/images/product/sub_image_1.png'), name: '带分配器的壳管式换热器' },
      ],
      application: [
        { image: require('@/static/images/product/application_image_1.png'), info: '换热器作为环境控制设备的重要组成部分，在工业生产中得到了广泛应用。作为冷凝器重要的细分市场，食品、医药、化工等行业的快速发展将带动换热器市场需求。', name: '工农业应用'},
        { image: require('@/static/images/product/application_image_2.png'), info: '换热器作为环境控制设备的重要组成部分，在工业生产中得到了广泛应用。作为冷凝器重要的细分市场，食品、医药、化工等行业的快速发展将带动换热器市场需求。', name: '工农业应用'},
        { image: require('@/static/images/product/application_image_3.png'), info: '换热器作为环境控制设备的重要组成部分，在工业生产中得到了广泛应用。作为冷凝器重要的细分市场，食品、医药、化工等行业的快速发展将带动换热器市场需求。', name: '工农业应用'},
        { image: require('@/static/images/product/application_image_4.png'), info: '换热器作为环境控制设备的重要组成部分，在工业生产中得到了广泛应用。作为冷凝器重要的细分市场，食品、医药、化工等行业的快速发展将带动换热器市场需求。', name: '工农业应用'},
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
  .detail {
    padding: 96px 150px 144px 150px;
    .title-wrapper {
      .title {
        font-size: 46px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #181E2D;
        line-height: 54px;
        margin-top: 38px;
        padding-bottom: 64px;
        width: 800px;
        border-bottom: 1px solid #E5E5E5;
        float: left;
      }
      .product-image {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        float: right;
        padding: 18px;
        width: 240px;
        height: 240px;
        background: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #ECECEC;
      }
    }
    .sub-title {
      display: flex;
      align-items: center;
      font-size: 28px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #404040;
      line-height: 45px;
      &::before {
        content: '';
        width: 59px;
        height: 1px;
        background: #404040;
        margin-right: 32px;
      }
    }
    .description {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #9A9A9A;
      line-height: 56px;
      margin-top: 24px;
      margin-bottom: 97px;
      & div::before {
        content: '·';
        display: inline-block;
        margin-right: 1em;
      }
    }
    .display {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .display-item {
        &:nth-child(3n) {
          margin-right: 0;
        }
        margin-right: 20px;
        margin-bottom: 20px;
      }
      .image {
        width: 360px;
        height: 310px;
      }
      .name {
        margin-top: 24px;
        font-size: 16px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #9A9A9A;
        line-height: 25px;
      }
    }
    .product-advantage {
      padding: 96px;
      background-image: url('@/static/images/product/advantage_bg.png');
      background-size: 100% 100%;
      border-radius: 4px;
      margin-top: 76px;
      margin-bottom: 96px;
      object-fit: cover;
      .title {
        font-size: 46px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 54px;
        margin-bottom: 45px;
      }
      .advantage {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          font-size: 24px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #FFFFFF;
          line-height: 33px;
          max-width: 362px;
          display: inline-flex;

          &::before {
            display: inline-block;
            content: '';
            flex-shrink: 0;
            width: 32px;
            height: 29px;
            margin-right: 16px;
            background-image: url('@/static/images/product/check-square.png');
          }
        }
      }
    }
    .application {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 48px;
      .item {
        margin-bottom: 20px;
        .image {
          width: 560px;
          height: 555px;
          position: relative;
          border-radius: 4px;
          img {
            border-radius: 4px;
          }
          &:hover {
            .info {
              visibility: visible;
            }
          }
          .info {
            position: absolute;
            visibility: hidden;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(53, 65, 148, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 106px;
            text-align: center;
            .info1 {
              font-size: 28px;
              font-family: PingFangSC-Light, PingFang SC;
              font-weight: 300;
              color: #FFFFFF;
              line-height: 34px;
              margin-bottom: 32px;
            }
            .info2 {
              font-size: 16px;
              font-family: PingFangSC-Light, PingFang SC;
              font-weight: 300;
              color: #FFFFFF;
              line-height: 25px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .detail {
      padding: 26px 16px 96px 16px;
      .title-wrapper {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 48px;
        .title {
          font-size: 32px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #181E2D;
          line-height: 54px;
          margin-top: 48px;
          padding-bottom: 48px;
          width: auto;
          border-bottom: 1px solid #E5E5E5;
          float: none;
        }
        .product-image {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          float: none;
          padding: 18px;
          width: 240px;
          height: 240px;
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #ECECEC;
        }
      }
      .sub-title {
        display: flex;
        align-items: center;
        font-size: 28px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #404040;
        line-height: 45px;
        &::before {
          content: '';
          width: 59px;
          height: 1px;
          background: #404040;
          margin-right: 32px;
        }
      }
      .description {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #9A9A9A;
        line-height: 42px;
        margin-top: 24px;
        margin-bottom: 48px;
        & div::before {
          content: '·';
          display: inline-block;
          margin-right: 1em;
        }
      }
      .display {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 48px;
        .display-item {
          &:nth-child(3n) {
            margin-right: 0;
          }
          margin-right: 0;
          margin-bottom: 48px;
        }
        .image {
          width: 100%;
          height: 300px;
        }
        .name {
          margin-top: 24px;
          font-size: 16px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #9A9A9A;
          line-height: 25px;
        }
      }
      .product-advantage {
        padding: 96px 32px;
        background-image: url('@/static/images/product/advantage_bg.png');
        background-size: 100% 100%;
        border-radius: 4px;
        margin-top: 16px;
        margin-bottom: 48px;
        .title {
          font-size: 32px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #FFFFFF;
          line-height: 54px;
          margin-bottom: 45px;
        }
        .advantage {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: space-between;
          .item {
            font-size: 18px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #FFFFFF;
            line-height: 25px;
            max-width: 100%;
            display: inline-flex;
            &:not(:last-child) {
              margin-bottom: 24px;
            }
            &::before {
              display: inline-block;
              content: '';
              flex-shrink: 0;
              width: 32px;
              height: 29px;
              margin-right: 16px;
              background-image: url('@/static/images/product/check-square.png');
            }
          }
        }
      }
      .application {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 48px;
        .item {
          margin-bottom: 24px;
          width: 100%;
          .image {
            width: 100%;
            height: auto;
            position: relative;
            border-radius: 4px;
            img {
              border-radius: 4px;
            }
            &:hover {
              .info {
                visibility: visible;
              }
            }
            .info {
              position: absolute;
              visibility: hidden;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background: rgba(53, 65, 148, 0.9);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 0 106px;
              text-align: center;
              .info1 {
                font-size: 28px;
                font-family: PingFangSC-Light, PingFang SC;
                font-weight: 300;
                color: #FFFFFF;
                line-height: 34px;
                margin-bottom: 32px;
              }
              .info2 {
                font-size: 16px;
                font-family: PingFangSC-Light, PingFang SC;
                font-weight: 300;
                color: #FFFFFF;
                line-height: 25px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
