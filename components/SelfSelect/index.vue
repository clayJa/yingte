<template>
  <div :class="['self-select-wrapper', { opened }]" @click.stop>
    <div class="input-wrapper" @click="changeOpenStatus">
      {{ currentItem && currentItem.label }}
      <i class="iconfont">&#xe629;</i>
    </div>
    <div class="select-options">
      <div
        :class="['select-item', { active:  current && current === item.value }]" v-for="(item,index) in options"
        :key="index"
        @click="handleClick(item.value)"
      >
        <span>{{item.label}}</span>
         <i class="iconfont">&#xe628;</i>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SelfSelect',
  components: {
  },
  props: {
    label: {
      type: String
    },
    value: {
      type: String | Number
    },
    options: {
      type: Array
    }
  },
  computed: {
    currentItem() {
      return this.options.find(it => it.value === this.value)
    }
  },
  mounted(){
    document.body.addEventListener('click',()=>{
        this.opened = false;
    },false);
  },
  watch: {
    value(val) {
        this.current = val
    }
  },
  data() {
    return {
      opened: false,
      current: this.value,
    }
  },
  methods: {
    changeOpenStatus() {
      this.opened = !this.opened
    },
    handleClick(value) {
      this.$emit('onChange',value)
      this.opened = false
    }
  }
}
</script>

<style lang="less" scoped>
.self-select-wrapper {
  position: relative;
  &.opened {
    .input-wrapper i {
      transform: translateY(-50%) scale(0.5);
    }
    .select-options {
      display: block;
    }
  }
  .input-wrapper {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    padding: 8px 18px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #03101F;
    line-height: 17px;
     min-height: 33px;
    cursor: pointer;
    min-width: fit-content;
    white-space: nowrap;
    i {
      position: absolute;
      color: #03101F;
      right: 0;
      top: 50%;
      font-size: 12px;
      transform: translateY(-50%) scale(0.5) rotate(-180deg);
    }
  }
  .select-options {
    display: none;
    padding-top: 14px;
    position: absolute;
    top: 100%;
    right: 0;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px 0px rgba(71, 71, 71, 0.4);
    border: 1px solid #E5E5E5;
    transform: translateY(4px);
    min-width: fit-content;
    .select-item {
      position: relative;
      cursor: pointer;
      padding-left: 48px;
      padding-right: 20px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #03101F;
      line-height: 17px;
      margin-bottom: 18px;
      white-space: nowrap;
      min-width: fit-content;
      &.active i,&:hover i{
        visibility: visible;
      }
      i {
          visibility: hidden;
          position: absolute;
          color: #1A82FF;
          left: 16px;
          top: 50%;
          font-size: 12px;
          transform: translateY(-50%);
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .input-wrapper {
      padding: 8px 18px;
      font-size: 12px;
      line-height: 17px;
      min-height: 33px;
      i {
        font-size: 12px;
      }
    }
    .select-options {
      padding-top: 14px;
      box-shadow: 0px 2px 6px 0px rgba(71, 71, 71, 0.4);
      border: 1px solid #E5E5E5;
      transform: translateY(4px);
      .select-item {
        padding-left: 48px;
        padding-right: 20px;
        font-size: 12px;
        line-height: 17px;
        margin-bottom: 18px;
        i {
            left: 16px;
            font-size: 12px;
        }
      }
    }
  }
}
</style>
