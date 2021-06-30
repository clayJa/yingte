<template>
  <div class="field-container">
    <div class="main-image-wrapper">
      <img :src="list[active].image" alt="">
      <div class="content">
        <div class="title">{{list[active].name}}</div>
        <div class="button">Load More</div>
      </div>
    </div>
    <div class="image-list">
      <div :class="['item', { active: active === index}]" v-for="(item,index) in list"
        :key="index"
        @click="changeClick(index)"
      >
        <img :src="item.thumbnail" alt="">
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          icon: require('@/static/images/about/field/icon_Data Center.png'),
          thumbnail: require('@/static/images/about/field/pic_数据中心_thumbnail.png'),
          image:  require('@/static/images/about/field/pic_数据中心.png'),
          name: '数据中心'
        },
        {
          icon: require('@/static/images/about/field/icon_ Industry and Agriculture.png'),
          thumbnail: require('@/static/images/about/field/pic_工农业应用_thumbnail.png'),
          image:  require('@/static/images/about/field/pic_工农业应用.png'),
          name: '工农业应用'
        },
        {
          icon: require('@/static/images/about/field/icon_ HVAC.png'),
          thumbnail: require('@/static/images/about/field/pic_暖通空调_thumbnail.png'),
          image:  require('@/static/images/about/field/pic_暖通空调.png'),
          name: '暖通空调'
        },
        {
          icon: require('@/static/images/about/field/icon_Subway traffic.png'),
          thumbnail: require('@/static/images/about/field/pic_轨道交通_thumbnail.png'),
          image:  require('@/static/images/about/field/pic_轨道交通.png'),
          name: '轨道交通'
        },
        {
          icon: require('@/static/images/about/field/icon_heating.png'),
          thumbnail: require('@/static/images/about/field/pic_北方供热采暖_thumbnail.png'),
          image:  require('@/static/images/about/field/pic_北方供热采暖.png'),
          name: '北方供热采暖'
        },
        {
          icon: require('@/static/images/about/field/icon_Home air conditioner.png'),
          thumbnail: require('@/static/images/about/field/pic_家用户式空调_thumbnail.png'),
          image:  require('@/static/images/about/field/pic_家用户式空调.png'),
          name: '家用户式空调'
        },
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changeClick(index) {
      this.active = index
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.field-container {
  .main-image-wrapper {
    position: relative;
    .content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 144px;
      padding-left: 150px;
      .title {
        font-size: 72px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 64px;
        margin-bottom: 64px;
      }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 165px;
        height: 45px;
        background: #354194;
        border-radius: 100px;
        border: 1px solid rgba(24, 30, 45, 0.2);
        font-size: 12px;
        font-family: Montserrat-Regular, Montserrat;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
  }
  .image-list {
    display: flex;
    justify-content: space-between;
    padding: 64px 150px 96px 150px;
    .item {
      cursor: pointer;
      .name {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #404040;
        line-height: 32px;
        text-align: center;
        margin-top: 24px;
      }
      &.active {
        .name {
          color: #354194;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
