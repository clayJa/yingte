<template>
<div>
  <div class="select-wrapper d-md-none">
    <div :class="['select-item ', { active: select === item.value}]" v-for="(item,index) in options"
      :key="item.value" @click="changeSelect(item,index)">
      {{item.name}}
    </div>
  </div>
  <div class="d-none d-md-block">
    <div class="mobile-my-swiper" v-swiper:myMobileSwiper="swiperMobileOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
          v-for="(item,index) in options" :key="index">
          <div :class="['select-item', { active: select === item.value}]" @click="changeSelect(item,index)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
export default {
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    select: {
    }
  },
  data () {
    return {
      swiperMobileOption: {
        loop: false,
        // initialSlide: 1,
        slidesPerView: 2.4,
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
    }
  },
  methods: {
    changeSelect(item,index) {
      this.myMobileSwiper.swipeTo(index, 1000, false)
      this.$emit('onChange',item,index)
    }
  },
  mounted() {
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
.select-wrapper {
  display: flex;
  .select-item {
    cursor: pointer;
    font-size: 12px;
    font-family: Montserrat-Regular, Montserrat;
    font-weight: 400;
    color: #9A9A9A;
    line-height: 12px;
    padding: 15px 32px;
    border-radius: 100px;
    border: 1px solid #ECECEC;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover,  &.active{
      color: #354194;
      border-color: #354194;
    }
  }
}
.mobile-my-swiper {
  width: calc(100vw - 32px);
  .swiper-wrapper {
    width: 100%;
  }
  .select-item {
    display: inline-block;
    cursor: pointer;
    font-size: 12px;
    font-family: Montserrat-Regular, Montserrat;
    font-weight: 400;
    color: #9A9A9A;
    line-height: 12px;
    padding: 15px 32px;
    border-radius: 100px;
    border: 1px solid #ECECEC;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover,  &.active{
      color: #354194;
      border-color: #354194;
    }
  }
}
</style>
