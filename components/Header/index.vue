<template>
  <div :class="['header-nav', scroll ? 'scroll' : 'static']">
    <div class="header">
      <div class="header-wrapper d-md-none">
        <div class="logo" @click="$router.push('/')"></div>
        <div class="nav-wrapper">
          <div :class="['nav-item', {active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.sub_path !== '/')}]"
            v-for="item in menus" :key="item.id">
            <a @click.stop="toPath(item)" href="javascript:void(0);">
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="search-wrapper">
            <b-form-input
              id="input-search"
              v-model="text"
              @keyup.enter="handleEnter"
            ></b-form-input>
            <div class="search-item">
              <i class="iconfont icon" @click="showSearch">&#xe63a;</i>
            </div>
        </div>
      </div>
      <div class="mobile-header-wrapper d-none d-md-flex">
        <div class="mobile-logo" @click="$router.push('/')"></div>
        <div class="mobile-menu-icon" @click="showMobileMenu = true"></div>
      </div>
      <div class="d-none d-md-block mobile-menu" v-if="showMobileMenu">
        <div class="top">
          <div class="search clearfix">
            <i class="iconfont icon-search">&#xe63a;</i>
            <b-form-input
              id="input"
              v-model="text"
              @keyup.enter="handleEnter"
            ></b-form-input>
            <div class="button">搜索</div>
          </div>
          <div class="close-icon" @click="showMobileMenu = false"></div>
        </div>
        <div class="mobile-nav-wrapper">
          <div :class="['mobile-nav-item', {active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.sub_path !== '/')}]"
            v-for="item in menus" :key="item.id">
            <a @click.stop="toPath(item)" href="javascript:void(0);">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
interface Data {
  text: string,
  visible: boolean,
  menu: any[],
}
export default {
  data () {
    return {
      text: '',
      visible: false,
      modalShow: false,
      showMobileMenu: false,
      activePath: '',
      scroll: false,
      menus: [
        { name: '关于英特', path: '/about' },
        { name: '产品应用', path: '/product' },
        { name: '新闻资讯', path: '/news' },
        { name: '投资者关系', path: '/investor-relations'},
        { name: '加入我们', path: '/join' },
      ]
    }
  },
  methods: {
    showSearch() {
      this.modalShow = true
      this.text = ''
    },
    handleEnter() {
      localStorage.setItem('searchText',this.text)
      this.modalShow = false
      this.text = ''
      this.$router.push('/search')
    },
    toPath(item) {
      this.$router.push(item.path)
    },
  },
  mounted() {
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
.logo {
  cursor: pointer;
  width: 149px;
  height: 45px;
  background-image: url('@/static/images/logo.jpg');
  background-size: 100% 100%;
}
a {
  color: @textColor;
  text-decoration: none !important;
  &:hover {
    text-decoration: none;
    color: @mainColor;
  }
}
@headerHeight: 120px;
.header-nav {
  position: relative;
  height: @headerHeight;
  @media only screen and (max-width: 760px) {
    height: 80px;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: @headerHeight;
  padding: 0 150px;
}
.nav-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .nav-item {
    position: relative;
    white-space: nowrap;
  }
}
.nav-item {
  &:not(:last-child) {
    margin-right: 56px;
  }
  a {
    display: inline-block;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    padding-top: 49px;
    padding-bottom: 42px;
    color: @textColor;
    border-bottom: transparent 4px solid;
  }
  &.active > a {
    color:  @mainColor;
  }
  &.active a{
    border-color: @mainColor;
    color:  @mainColor;
  }
  .nav-icon {
    display: inline-block;
    transform: rotate(-180deg) scale(0.5);
    color: @iconColor;
  }
  &:hover {
    .nav-icon {
      transform: rotate(-0deg) scale(0.5);
      color:  @mainColor;
    }
    > a {
      color:  @mainColor;
    }
  }
}
.search-wrapper {
  position: relative;
  #input-search {
    padding-right: 40px;
  }
  .search-item {
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);
  }
}
.search-wrapper .icon {
  color: #A6AAB1;
  cursor: pointer;
}
.mobile-header-wrapper {
  padding-left: 32px;
  padding-right: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .mobile-logo {
    width: 79px;
    height: 24px;
    cursor: pointer;
    background-image: url('@/static/images/logo.jpg');
    background-size: 100% 100%;
  }
  .mobile-menu-icon {
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-image: url('@/static/images/menu.png');
    background-size: 100% 100%;
  }
}
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 999;
  .close-icon {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 14px;
    height: 14px;
    background-image: url('@/static/images/close.png');
    background-size: 100% 100%;
  }
  .top {
    background: #354194;
    padding: 74px 32px 20px 32px;
    position: relative;
    .search {
      background: #F7F7F7;
      border-radius: 4px;
      padding: 10px;
      position: relative;
      input {
        width: calc(100% - 86px);
        border: none;
        box-shadow: none;
        border-radius: 24px;
        display: inline-block;
        vertical-align: middle;
        background: transparent;
        padding-left: 36px;
      }
      .icon-search {
        position: absolute;
        left: 18px;
        top: 13px;
        color: #D8D8D8;
        font-size: 22px;
      }
      .button {
        vertical-align: middle;
        display: inline-block;
        width: 76px;
        height: 39px;
        background: #354194;
        border-radius: 4px;
        line-height: 39px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }
  .mobile-nav-wrapper {
    .mobile-nav-item {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 20px;
      padding-left: 32px;
      background: #fff;
      font-size: 24px;
      border-bottom: 1px solid #ECECEC;
      &:last-child {
        border-bottom: none;
      }
      > a {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #404040;
        line-height: 33px;
      }
      &.active {
        .mobile-nav-icon {
          transform: rotate(0deg) scale(0.5);
        }
        .mobile-sub-nav-wrapper {
          display: block !important;
        }
      }
    }
    .mobile-nav-icon {
      float: right;
      margin-right: 32px;
      transform: rotate(-180deg) scale(0.5);
    }
  }
}
</style>
