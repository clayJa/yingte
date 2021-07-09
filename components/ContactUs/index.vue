<template>
  <div class="ContactUs-wrapper">
    <div class="title">选择英特，打造企业未来得到100%的提升!</div>
    <div class="button">联系我们</div>
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
.ContactUs-wrapper {
  width: 100%;
  height: 182px;
  background: #354194;
  padding: 0 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 24px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #FFFFFF;
    max-width: 11em;
  }
  .button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 172px;
    height: 46px;
    background: #FFFFFF;
    border-radius: 4px;
    font-size: 18px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #354194;
  }
  @media only screen and (max-width: 760px) {
    width: 100%;
    height: 288px;
    background: #354194;
    padding: 64px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .title {
      font-size: 24px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #FFFFFF;
      max-width: 11em;
    }
    .button {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 172px;
      height: 46px;
      background: #FFFFFF;
      border-radius: 4px;
      font-size: 18px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #354194;
    }
  }
}
</style>
