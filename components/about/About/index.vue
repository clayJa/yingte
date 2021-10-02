<template>
  <div class="about-wrapper">
    <div class="background-wrapper">
      <img :src="require('@/static/images/about/about-background.png')" class="background" />
    </div>
    <div class="content">
      <div class="title-en">About us</div>
      <div class="title"><span>关于</span><strong>英特</strong></div>
      <div class="description" v-html="info.remark">
      </div>
      <div class="button-wrapper">
        <div class="button" @click="toPath('/about')">了解英特</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {aboutInfo} from '@/service/public'
export default {
  name: 'About',
  data() {
    return {
      info: {}
    }
  },
  computed: {
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    },
    async fetchData() {
      const res = await aboutInfo()
      this.info = res
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
  height: 570px;
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
    padding: 96px 135px;
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
      text-indent: 2em;
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
  @media only screen and (max-width: 950px) {
    height: 761px;
    .background {
      width: 100%;
      height: 761px;
      object-fit: cover;
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
      padding: 96px 16px;
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
        font-size: 40px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #404040;
        line-height: 64px;
        margin-top: 14px;
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
}
</style>
