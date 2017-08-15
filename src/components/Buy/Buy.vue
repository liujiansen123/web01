<!-- 图标字体 -->

<template lang="html">
  <div class="buy">
    <transition name = "rotate">
      <div class="sub" v-show = "food.count" @click.stop = "jianjian">
        <i class="iconfont icon-jian"></i>
      </div>
    </transition>
    <transition name = "fade">
      <div class="count" v-show = "food.count">{{food.count}}</div>
    </transition>
    <div class="add" @click.stop = "addToCart">
      <i class="iconfont icon-jia"></i>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    food:{
      type:Object,
      required:true
    }
  },
  methods:{
    addToCart(){
      if(this.food.count){
        this.food.count++;
      }else{
        this.$set(this.food,"count",1)
      }
    },
    jianjian(){
      if(this.food.count){
        this.food.count--;
      }else{
        this.$set(this.food,"count",0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .rotate-enter,.rotate-leave-active{transform: translateX(200%) rotateZ(360deg);}
  .rotate-enter-active,.rotate-leave-active{transition: all 1s}
  .fade-enter,.fade-leave-active{opacity:0}
  .fade-enter-active,.fade-leave-active{transition: all 1s}
  @import '../../assets/css/font.css';
  .buy{
    width:72px;
    height:24px;
    position:relative;
    .sub,.add{
      width:24px;
      height:24px;
      color: rgb(0,160,220);
      position: absolute;
      top:0;
      i{font-size: 24px;}
    }
    .sub{
      left:0;
      top:-3px;
    }
    .add{right: 0}
    .count{text-align: center;line-height: 24px}
  }
</style>
