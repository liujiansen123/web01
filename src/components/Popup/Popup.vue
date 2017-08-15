<!-- Header下面的子组件 -->
<!-- 弹出层 -->
<template lang="html">
  <div class="popup">
    <h1>{{seller.name}}</h1>
    <div class="discount">

        <h2>优惠信息</h2>
        <ul class="dis">
          <li v-for="(item,index) in seller.supports">{{item.description}}</li>
        </ul>
    </div>
    <div class="discount1">
        <h2>商家公告</h2>
        <p>{{seller.bulletin}}</p>
    </div>
    <div class="chacha" @click = "chacha">X

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    chacha(){
      this.$emit('chacha')
    }
  },
  props:{
    seller:{
      type:Object,
      required:true
    }
  },

}
</script>

<style lang="less">
    .popup{
      z-index: 999;
      position: fixed;
      left:0;
      right:0;
      top:0;
      bottom:0;
      background: rgba(7,17,27,.8);
      h1 {
        margin-top:64px;
        text-align:center;
        font-size:16px;
        font-weight:700;
      }
      .discount,.discount1{
          color:#fff;
          font-size:12px;
          font-weight:200;
          line-height: 24px;
          h2{
            font-size:14px;
            line-height: 50px;
            text-align: center;
            font-weight:700;
            margin-top:20px;
          }
          p{
            margin-left:48px;
            margin-right:48px;
          }
      }
      .dis{
        margin-left:48px;
        margin-right:48px;
      }
      .chacha{
        // text-align: center;
        position:absolute;
        bottom:32px;
        margin-left:50%;
        transform: translateX(-50%);
        font-size:32px;
      }
    }

</style>
