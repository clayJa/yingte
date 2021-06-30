<template>
  <div class="footer-wrapper">
    <div class="content">
      <div class="left-wrapper">
        <div class="logo"></div>
        <div class="item">
          <div class="name">关于英特</div>
          <div class="name">产品应用</div>
          <div class="name">新闻资讯</div>
        </div>
        <div class="item">
          <div class="name">投资者关系</div>
          <div class="name">联系我们</div>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="address">
          <div class="text">
            <div>浙江省安吉县递铺街道乐三路</div>
            <div>468 Lesan Road, Dipu street, Anji County, Zhejiang Province</div>
          </div>
          <div class="icon"><img :src="require('@/static/images/icons/icon_Address.png')" alt=""></div>
        </div>
        <div class="follow">
          <div class="text">Follow us</div>
          <div class="links">
            <div class="wechat"></div>
            <div class="weibo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2021 EXTEK Technology. All Rights Reserved.
    </div>
  </div>
</template>

<script lang="ts">
export default {
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
.footer-wrapper {
  padding: 65px 150px 32px 150px;
  .logo {
    cursor: pointer;
    width: 182px;
    height: 55px;
    background-image: url('@/static/images/logo.jpg');
    background-size: 100% 100%;
    margin-right: 88px;
  }
  .copyright {
    font-size: 15px;
    font-family: Montserrat-Regular, Montserrat;
    font-weight: 400;
    color: #555963;
    line-height: 28px;
    display: flex;
    align-items: center;
    &::after {
      content: '';
      display: block;
      height: 1px;
      background: #ECECEC;
      flex-grow: 1;
    }
  }
  .left-wrapper {
    display: flex;
    .item {
      cursor: pointer;
      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #404040;
      line-height: 25px;
      .name:not(:last-child) {
        margin-bottom: 12px;
      }
      &:not(:last-child) {
        margin-right: 120px;
      }
    }
  }
  .right-wrapper {
    .address {
      display: flex;
      margin-bottom: 32px;
      .text {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #404040;
        line-height: 24px;
        text-align: right;
        max-width: 17em;
        margin-right: 8px;
      }
      .icon {
        width: 20px;
      }
    }
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .follow {
    text-align: right;
  }
  .links {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    margin-bottom: 32px;
    .wechat {
      cursor: pointer;
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-right: 20px;
      background-image: url('@/static/images/icons/icon_wechat.png');
      background-size: 100% 100%;
      &:hover {
        background-image: url('@/static/images/icons/icon_wechat_active.png');
      }
    }
    .weibo {
      cursor: pointer;
      display: inline-block;
      width: 40px;
      height: 40px;
      background-image: url('@/static/images/icons/icon_sina_weibo.png');
      background-size: 100% 100%;
      &:hover {
        background-image: url('@/static/images/icons/icon_sina_weibo_active.png');
      }
    }
  }
}
</style>
