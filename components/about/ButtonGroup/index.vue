<template>
  <div class="select-wrapper">
    <div :class="['select-item', { active: select === index}]" v-for="(item,index) in 3"
      :key="item" @click="changeSelect(index)">
      Model {{item}}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      select: 1,
    }
  },
  methods: {
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
    border: 1px solid transparent;
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
