<template>
  <div class="header-wrapper">
    <div class="content">
      <div class="title">关于英特</div>
      <div class="nav-wrapper">
        <div :class="['nav-item', {active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.sub_path !== '/')}]"
          v-for="item in menus" :key="item.id">
          <a @click.stop="toPath(item)">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      menus: [
        { name: '公司简介', path: '/about/company' },
        { name: '企业荣誉', path: '/about/honor' },
        { name: '企业文化', path: '/about/culture' },
        { name: '资质专利', path: '/about/patent'},
      ]
    }
  },
  methods: {
    toPath(item) {
      console.log(item)
    },
  },
  mounted() {
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
a {
  color: @textColor;
  text-decoration: none !important;
  &:hover {
    text-decoration: none;
    color: @mainColor;
  }
}
.title {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #838181;
}
.header-wrapper {
  padding: 0 150px;
  .content {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid #ECECEC;
  }
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
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    padding-top: 54px;
    padding-bottom: 20px;
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
</style>
