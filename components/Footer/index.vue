<template>
  <div class="footer-wrapper">
    <div class="content d-md-none">
      <div class="left-wrapper">
        <div class="logo-wrapper">
          <div class="logo"></div>
          <div class="follow">
            <div class="text">Follow us</div>
            <div class="links">
              <div class="wechat"></div>
              <div class="weibo"></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="name" @click="toPath('/about')">{{$t('home.about')}}</div>
          <div class="name" @click="toPath('/product')">{{$t('home.product')}}</div>
          <div class="name" @click="toPath('/news')">{{$t('home.news')}}</div>
        </div>
        <div class="item">
          <div class="name" @click="toPath('/news')" >{{$t('home.investorRelations')}}</div>
          <div class="name" @click="toPath('/join')">{{$t('home.join')}}</div>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="address">
          <div class="text">
            {{globalSetting.email}}
          </div>
          <div class="icon"><img :src="require('@/static/images/icons/icon_Contact_Email.png')" alt=""></div>
        </div>
        <div class="address">
          <div class="text" style="max-width: 100%">
            {{globalSetting.phone}}
          </div>
          <div class="icon"><img :src="require('@/static/images/icons/icon_Contact_Phone.png')" alt=""></div>
        </div>
        <div class="address">
          <div class="text">
            <div>{{globalSetting.address}}</div>
            <div>{{globalSetting.address_en}}</div>
          </div>
          <div class="icon"><img :src="require('@/static/images/icons/icon_Address.png')" alt=""></div>
        </div>
      </div>
    </div>
    <div class="mobile-content  d-md-block  d-none">
      <div class="logo"></div>
      <div class="info-wrapper">
        <div class="info">
          <div class="icon"><img :src="require('@/static/images/icons/icon_Contact_Email.png')" alt=""></div>
          <div class="text">
            {{globalSetting.email}}
          </div>
        </div>
        <div class="info">
          <div class="icon"><img :src="require('@/static/images/icons/icon_Contact_Phone.png')" alt=""></div>
          <div class="text" style="max-width: 100%">
            {{globalSetting.phone}}
          </div>
        </div>
        <div class="info">
          <div class="icon"><img :src="require('@/static/images/icons/icon_Address.png')" alt=""></div>
          <div class="text">
            <div>{{globalSetting.address}}</div>
            <div>{{globalSetting.address_en}}</div>
          </div>
        </div>
      </div>
      <div class="item-wrapper">
        <div class="item">
          <div class="name" @click="toPath('/about')">关于英特</div>
          <div class="name" @click="toPath('/about')">产品应用</div>
          <div class="name">新闻资讯</div>
        </div>
        <div class="item">
          <div class="name" @click="toPath('/join')">加入我们</div>
        </div>
      </div>
      <div class="follow">
        <div class="text">Follow us</div>
        <div class="links">
          <div class="wechat"></div>
          <div class="weibo"></div>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2021 EXTEK Technology. All Rights Reserved.
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['globalSetting'])
  },
  watch: {
  },
  mounted() {
    this.fetchGlobalSetting()
  },
  methods: {
    ...mapActions(['fetchGlobalSetting']),
    toPath(path) {
      this.$router.push(path)
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.footer-wrapper {
  padding: 65px 135px 32px 135px;
  background: #fff;
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
    .logo-wrapper {

    }
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
      justify-content: flex-end;
      &:not(:last-child) {
        margin-bottom: 16px;
      }
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
        width: 24px;
      }
    }
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .follow {
    margin-top: 52px;
  }
  .links {
    display: flex;
    margin-top: 12px;
    margin-bottom: 48px;
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
  @media only screen and (max-width: 760px) {
    padding: 64px 16px 96px 16px;
    .copyright {
      font-size: 15px;
      font-family: Montserrat-Regular, Montserrat;
      font-weight: 400;
      color: #555963;
      line-height: 28px;
      display: flex;
      align-items: left;
      padding-top: 30px;
      border-top: 1px solid #ECECEC;
      &::after {
        content: '';
        display: none;
        height: 1px;
        background: #ECECEC;
        flex-grow: 1;
      }
    }
  }
}
.mobile-content {
  .logo {
    cursor: pointer;
    width: 182px;
    height: 55px;
    background-image: url('@/static/images/logo.jpg');
    background-size: 100% 100%;
  }
  .info-wrapper {
    margin-top: 32px;
    margin-bottom: 48px;
  }
  .info {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    .text {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #404040;
      line-height: 24px;
      text-align: left;
      max-width: 17em;
      margin-right: 8px;
    }
    .icon {
      width: 24px;
      margin-right: 16px;
    }
  }
  .item-wrapper {
    display: flex;
    margin-bottom: 48px;
  }
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
  .links {
    display: flex;
    margin-top: 12px;
    margin-bottom: 48px;
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
