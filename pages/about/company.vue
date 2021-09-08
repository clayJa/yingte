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
 <!--   <div class="media">
      <div class="media-description">
        <div class="title">{{videoInfo.title}}</div>
        <div class="info">{{videoInfo.remark}}</div>
        <div class="button">了解更多</div>
      </div>
      <div class="media-wrapper" >
        <div class="media-back">
          <img style="width:100%;height:100%;object-fit: cover;" :src="videoInfo.cover_picture" alt="">
        </div>
        <img class="play-btn" @click="playVideo()" src="@/static/images/about/icon_Video_Player.png" alt="">
        <template v-if="isPlay && videoInfo.video">
          <video class="video" controls width="100%" height="100%" autoplay>
            <source :src="`${videoInfo.video}`" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </template>
      </div>
    </div>-->
    <div class="about-wrapper">
      <div class="content">
        <div class="title-en">About us</div>
        <div class="title"><span>关于</span><strong>英特</strong></div>
        <div class="description" v-html="aboutInfo.remark">
          <!-- {{aboutInfo.remark}} -->
          <!-- <div>
            公司是一家专业从事高效换热器的研发、生产及销售的高新技术企业，产品主要包括高效新型壳管式换热器、同轴套管式换热器、降膜式换热器等产品以及分配器等系统配件，广泛应用于供热采暖、空调、轨道交通、数据中心、工农业应用等领域。公司凭借先进的研发能力、高水平的生产工艺以及严格的质量管控，在行业内已建立起较高的品牌知名度，成为换热器领域主要生产企业，2018至2020连续三个年度，被中国节能协会热泵专业委员会评选为中国热泵行业优秀零部件供应商。
          </div>
          <div>
            公司与国内的海尔、天加、美的、格力，美系的麦克维尔、约克、特灵、开利，日系的大金、日立、三菱重工等大型知名厂商建立了长期稳定的合作关系，被多家客户授予“战略合作供应商”、“优秀合作伙伴”、“卓越品质奖”及“技术创新奖”等荣誉称号。
          </div>
          <div>
            公司一直致力于高效传热设备关键技术研究和新产品开发，被授予高新技术企业和省级高新技术企业研究开发中心，承担了国家火炬计划项目之“同轴换热器”等重点项目。公司及子公司共拥有专利86项，其中，发明专利8项，并负责制定了GB/T25862-2010《制冷与空调用同轴套管式换热器》国家标准和JB/T11132-2011《制冷与空调用套管换热器》行业标准，参与制定了GB/T30261-2013《制冷空调用板式热交换器㶲效率评价方法》和GB/T30262-2013《空冷式热交换器㶲效率评价方法》国家标准。
          </div> -->
        </div>
      </div>
    </div>
    <div class="works-wrapper">
      <div class="title-wrapper">
        <div class="title-en">WORKS</div>
        <div class="title"><strong>英特 </strong>时刻</div>
      </div>
      <div class="work-list-wrapper clearfix">
        <div class="work-item item1 left">
          <img :src="require('@/static/images/about/company/works_Photo1.png')" alt="">
        </div>
        <div class="work-item item2 right">
          <img :src="require('@/static/images/about/company/works_Photo2.png')" alt="">
        </div>
        <div class="work-item item3 left">
          <img :src="require('@/static/images/about/company/works_Photo3.png')" alt="">
        </div>
        <div class="work-item item4 left">
          <img :src="require('@/static/images/about/company/works_Photo4.png')" alt="">
        </div>
        <div class="work-item item5 left">
          <img :src="require('@/static/images/about/company/works_Photo5.png')" alt="">
        </div>
        <div class="work-item item6 right">
          <img :src="require('@/static/images/about/company/works_Photo6.png')" alt="">
        </div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import TabBar from '@/components/about/TabBar/index.vue'
import {aboutAboutInfo,aboutVideo} from '@/service/public'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      isPlay: false,
      works: [
        require('@/static/images/about/company/works_Photo1.png'),
        require('@/static/images/about/company/works_Photo2.png'),
        require('@/static/images/about/company/works_Photo3.png'),
        require('@/static/images/about/company/works_Photo4.png'),
        require('@/static/images/about/company/works_Photo5.png'),
      ],
      videoInfo: {},
      aboutInfo: {},
      banner: {}
    }
  },
  mounted() {
    this.fetchBannerData()
    this.fetchData()
  },
  methods: {
    playVideo() {
      console.log('play')
      this.isPlay = true
    },
    async fetchData() {
      const [res1,res2] = await Promise.all([aboutAboutInfo(),aboutVideo()])
      if(res1) {
        this.aboutInfo = res1
      }
      if(res2) {
        this.videoInfo = res2
      }
      console.log(res1,res2)
      // aboutAboutInfo()
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
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  .media {
    display: flex;
    padding: 96px 135px;
    align-items: center;
    justify-content: space-between;
  }
  .media-wrapper {
    width: 499px;
    height: 321px;
    position: relative;
    border-radius: 4px;
    .media-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: @bgColor;
      border-radius: 4px;
    }
    .play-btn {
      position: absolute;
      width: 92px;
      height: 92px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .video {
      position: absolute;
      top: 0;
      bottom: 0;
      object-fit: cover;
      border-radius: 4px;
    }
  }
  .media-description {
    max-width: 540px;
    .title {
      font-size: 46px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #404040;
      line-height: 64px;
      max-width: 8em;
    }
    .info {
      font-size: 18px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #9A9A9A;
      line-height: 28px;
      margin-top: 24px;
      margin-bottom: 60px;
    }
    .button {
      cursor: pointer;
      display: inline-block;
      padding: 0 42px;
      height: 54px;
      background: #354194;
      border-radius: 4px;
      border: 1px solid rgba(24, 30, 45, 0.2);
      text-align: center;
      font-size: 16px;
      font-family: Montserrat-Regular, Montserrat;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 54px;
    }
  }
  .about-wrapper {
    padding: 96px 135px 64px 135px;
    .content {
      background-image: url('@/static/images/about/about_company_bg.png');
      background-size: 100% 100%;
    }
    .title-en {
      font-size: 18px;
      font-family: Montserrat-Light, Montserrat;
      font-weight: 300;
      color: #9A9A9A;
      line-height: 32px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: center;
    }
    .description div {
      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #404040;
      line-height: 32px;
      margin-bottom: 2em;
    }
    .title {
      position: relative;
      font-size: 56px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #404040;
      line-height: 64px;
      text-align: center;
      margin-bottom: 75px;
      margin-top: 24px;
      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: -24px;
        left: 50%;
        transform: translateX(-50%);
        width: 62px;
        height: 3px;
        background: #354194;
      }
    }
  }
  .works-wrapper {
    padding: 0 134px;
    padding-bottom: 144px;
    .title-wrapper {
      .title-en {
        font-size: 18px;
        font-family: Montserrat-Light, Montserrat;
        font-weight: 300;
        color: #9A9A9A;
        line-height: 32px;
        letter-spacing: 2px;
      }
      .title {
        position: relative;
        font-size: 56px;
        font-family: PingFang SC;
        color: #404040;
        font-weight: 300;
        line-height: 64px;
        margin-top: 24px;
        margin-bottom: 75px;
        &::after {
          content: '';
          position: absolute;
          display: block;
          bottom: -24px;
          left: 0;
          width: 62px;
          height: 3px;
          background: #354194;
        }
      }
    }
  }
  .work-list-wrapper {
    // img {
    //   width: auto;
    // }
    .left {
      float: left;
    }
    .work-item {
      overflow: hidden;
      &:hover img {
        transition: all 1s;
        transform: scale(1.2);
      }
    }
    .right {
      float: right;
    }
    .item1 {
      width: 692px;
      margin-bottom: 24px;
    }
    .item2 {
      width: 440px;
    }
    .item3,.item4 {
      width: 333px;
      margin-right: 18px;
      margin-bottom: 24px;
    }
    .item5 {
      width: 692px;
      margin-right: 11px;
    }
    .item6 {
      width: 439px;
    }
  }
  @media only screen and (max-width: 950px) {
    .media {
      display: flex;
      flex-direction: column-reverse;
      padding: 60px 16px 96px 16px;
      align-items: center;
      justify-content: space-between;
    }
    .media-wrapper {
      width: 100%;
      height: 221px;
      position: relative;
      border-radius: 4px;
      .media-back {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: @bgColor;
        border-radius: 4px;
      }
      .play-btn {
        position: absolute;
        width: 92px;
        height: 92px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      .video {
        position: absolute;
        top: 0;
        bottom: 0;
        border-radius: 4px;
      }
    }
    .media-description {
      margin-top: 48px;
      max-width: 100%;
      .title {
        font-size: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #404040;
        line-height: 64px;
        max-width: 100%;
      }
      .info {
        font-size: 18px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #9A9A9A;
        line-height: 28px;
        margin-top: 24px;
        margin-bottom: 32px;
      }
      .button {
        cursor: pointer;
        display: inline-block;
        padding: 0 42px;
        height: 54px;
        background: #354194;
        border-radius: 4px;
        border: 1px solid rgba(24, 30, 45, 0.2);
        text-align: center;
        font-size: 16px;
        font-family: Montserrat-Regular, Montserrat;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 54px;
      }
    }
    .about-wrapper {
      padding: 96px 16px;
      .content {
        background-image: url('@/static/images/about/about_company_bg.png');
        background-size: 100% 100%;
        object-fit: cover;
      }
      .title-en {
        font-size: 16px;
        font-family: Montserrat-Light, Montserrat;
        font-weight: 300;
        color: #9A9A9A;
        line-height: 32px;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: center;
      }
      .description div {
        font-size: 16px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #404040;
        line-height: 32px;
        margin-bottom: 2em;
      }
      .title {
        position: relative;
        font-size: 40px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #404040;
        line-height: 64px;
        text-align: center;
        margin-bottom: 75px;
        margin-top: 12px;
        &::after {
          content: '';
          position: absolute;
          display: block;
          bottom: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 62px;
          height: 3px;
          background: #354194;
        }
      }
    }
    .works-wrapper {
      padding: 0 16x;
      padding-bottom: 96px;
      .title-wrapper {
        .title-en {
          font-size: 18px;
          font-family: Montserrat-Light, Montserrat;
          font-weight: 300;
          color: #9A9A9A;
          line-height: 32px;
          letter-spacing: 2px;
        }
        .title {
          font-size: 56px;
          font-family: PingFang SC;
          color: #404040;
          font-weight: 300;
          line-height: 64px;
          margin-top: 24px;
          margin-bottom: 75px;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            display: block;
            bottom: -24px;
            left: 0;
            width: 62px;
            height: 3px;
            background: #354194;
          }
        }
      }
    }
    .work-list-wrapper {
      // img {
      //   width: auto;
      // }
      .left {
        float: none;
      }
      .work-item {
        overflow: hidden;
        &:not(:last-child) {
          margin-bottom: 32px;
        }
        &:hover img {
          transition: all 1s;
          transform: scale(1.2);
        }
      }
      .right {
        float: none;
      }
      .item1 {
        width: 100%;
        margin-bottom: 0;
      }
      .item2 {
        width: 100%;
      }
      .item3,.item4 {
        width: 100%;
        margin-right: 0;
        margin-bottom: 0;
      }
      .item5 {
        width: 100%;
        margin-right: 0;
      }
      .item6 {
        width: 0;
      }
    }
  }
}
</style>
