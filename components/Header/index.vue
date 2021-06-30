<template>
  <div :class="['header-nav', scroll ? 'scroll' : 'static']">
    <div class="header">
      <div class="header-wrapper">
        <div class="logo" @click="$router.push('/')"></div>
        <div class="nav-wrapper">
          <div :class="['nav-item', {active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.sub_path !== '/')}]"
            v-for="item in menus" :key="item.id">
            <a @click.stop="toPath(item)">
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
        { name: '关于英特', path: '/' },
        { name: '产品应用', path: '/product' },
        { name: '新闻资讯', path: '/news' },
        { name: '投资者关系', path: '/investor-relations'},
        { name: '联系我们', path: '/contact' },
        { name: '联系', path: '/contact' },
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
      const path = this.computePath(item)
      this.$router.push(path)
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
</style>
