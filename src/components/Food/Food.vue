<!-- 详情页 -->
<template lang="html">
  <div class="food">
    <!-- 返回箭头 -->
    <div @click = "cloce"><</div>
    <!-- 图片 -->
    <div class="">
      <!-- <img :src="" alt=""> -->
    </div>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    cloce(){
      this.$emit('cloce');
    }
  }
}
</script>

<style lang="less" scoped>
  .food{
    position: fixed;
    top:0px;
    right:0px;
    left:0px;
    bottom:48px;
    background-color: #fff;
  }
</style>
