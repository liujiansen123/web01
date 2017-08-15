<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ele-header :seller= "seller"></ele-header>
    <ul class="nav">
      <li><router-link to="/">商品</router-link></li>
      <li><router-link to="/ratings">评论</router-link></li>
      <li><router-link to="/seller">商家</router-link></li>

    </ul>
    <router-view></router-view>
    <!-- <ele-cart></ele-cart> -->
  </div>
</template>


<script>
//引入头部的组件
import Header from "./components/Header/Header.vue"
//引入购物车 组件
// import Cart from "./components/Cart/Cart.vue"
const shop = require('./api/data.json')
export default {
  name: 'app',
  data(){
    return {
      seller : {}
    }
  },
  created(){
    this.seller = shop.seller
  },
  components :{
    "ele-header":Header,
    // "ele-cart" : Cart
  }
}
</script>

<style lang="less" scoped>
  .nav{
    display: flex;
    justify-content: space-around;
    height:40px;
    line-height: 40px;
    border-bottom:1px solid rgba(7, 17, 27, .1);
    a{
      color: rgb(77, 85, 93);
      font-size: 14px;
      text-decoration: none;
      &.router-link-exact-active{
        color:rgb(240,20,20);
      }
    }
  }
</style>
