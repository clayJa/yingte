<template>
  <div class="about-wrapper">
    <div class="background-wrapper">
      <img :src="require('@/static/images/about/about-background.png')" class="background" />
    </div>
    <div class="content">
      <div class="title-en">About us</div>
      <div class="title"><span>关于</span><strong>英特</strong></div>
      <div class="description">
        <div>
            公司是一家专业从事高效换热器的研发、生产及销售的高新技术企业，产品主要包括高效新型壳管式换热器、同轴套管式换热器、降膜式换热器等产品以及分配器等系统配件，广泛应用于供热采暖、空调、轨道交通、数据中心、工农业应用等领域。公司凭借先进的研发能力、高水平的生产工艺以及严格的质量管控，在行业内已建立起较高的品牌知名度，成为换热器领域主要生产企业，2018至2020连续三个年度，被中国节能协会热泵专业委员会评选为中国热泵行业优秀零部件供应商。
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">了解英特</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'About',
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    toPath() {
      console.log(1111)
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.about-wrapper {
  position: relative;
  overflow: hidden;
  .background {
    width: 100%;
  }
  .background-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
  }
  .content {
    position: relative;
    text-align: center;
    padding: 96px 150px;
    padding-top: 96px;
    .title-en {
      font-size: 18px;
      font-family: Montserrat-Light, Montserrat;
      font-weight: 300;
      color: #9A9A9A;
      line-height: 32px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .title {
      font-size: 56px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #404040;
      line-height: 64px;
      margin-top: 24px;
      margin-bottom: 32px;
      span {
        display: inline-block;
        margin-right: 0.5em;
      }
    }
    .description {
      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #404040;
      line-height: 32px;
      margin-top: 32px;
      margin-bottom: 48px;
      text-align: left;
    }
    .button-wrapper {
      text-align: center;
    }
    .button {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 50px;
      background: #354194;
      border-radius: 4px;
      border: 1px solid #354194;

      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #FFFFFF;
      line-height: 20px;
      letter-spacing: 1px;
    }
  }
}
</style>
