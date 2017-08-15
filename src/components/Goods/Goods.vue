  <!-- <h2>商品组件</h2> -->
<template lang="html">
  <div class="goods">
  <!-- 左边的分类 -->
    <div class="goods-menu" id="goods-menu">
      <ul>
        <li v-for = "(item,index) in goods" :key= "index" :class = "{active:index==current}"
        @click = "abc(index)"
        >
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <!-- 右边的分类 -->
    <div class="goods-list" id="goods-list">
      <div class="" ref="list">
        <dl class="" v-for = "(item,index) in goods" @click = "selectFood(item)">
          <dt>{{item.name}}</dt>
          <dd v-for = "(food,idx) in item.foods" :key = "idx">
            <img :src="food.icon" alt="">
            <div class="food">
              <h2>{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <p class="sale">月销量{{food.sellCount}} 好评率{{food.rating}}</p>
              <p class="price">
                <strong><span>¥</span>{{food.price}}</strong>
                <del v-if = "food.oldPrice">¥{{food.oldPrice}}</del>
              </p>

              <!-- 图标字体 -->
              <div class="ele-buy">
                <ele-buy :food = "food"></ele-buy>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- //详情页 -->
    <transition>
      <ele-food v-show = "show" @cloce = "show = false"></ele-food>
    </transition>
    <ele-cart :cartGoods="cartGoods"
              :minPrice = "seller.minPrice"
              :deliveryPrice="seller.deliveryPrice">
    </ele-cart>
  </div>
</template>

<script>
const shop = require("../../api/data.json")

import IScroll from '../../../static/js/iscroll-probe'
import Food from '../Food/Food.vue'
//图标字体组件引入
import Buy from '../Buy/Buy'
//引入购物车 组件
import Cart from "../Cart/Cart.vue"

export default {
  data(){
    return {
      goods:[],//该商家多有的商品
      current:0,//表示当前所有的分类
      listHeight:[],
      show:false,
      seller:{},  //表示商家信息
    }
  },
  computed:{
    cartGoods(){   //得到购物车的内容
      let cart = [];
      this.goods.forEach(item=>{
        item.foods.forEach(food=>{
          if(food.count){
            cart.push(food)
          }
        });
      });
      return cart;
    }
  },
  components : {     //注册组件的地方
    'ele-food' : Food,
    'ele-buy' : Buy,  //图标字体组件注册
    "ele-cart" : Cart,  //注册购物车组件
  },
  methods:{     //方法
    //控制详情页的显示隐藏状态
    selectFood(food){
      this.show = true;
    },

    abc(index){
      this.current = index;
      let dls = this.$refs.list.getElementsByTagName('dl');
      this.gl.scrollToElement(dls[this.current])
    },
    //获取右侧商品分类的高度
    _getListHeight(){
      let arr = [0];//所有的高度
      let dls = this.$refs.list.getElementsByTagName('dl');
      for(let i = 0;i<dls.length;i++){
        arr.push(dls[i].clientHeight+arr[i]) //clientHeight能得到每个商品的高度
      }
      return arr
    }
  },
  created(){   //组件创建成功
    this.goods = shop.goods;
    this.seller = shop.seller;
  },
  mounted(){   //组件挂载成功
    this.gm = new IScroll("#goods-menu",{click : true})
    this.gl = new IScroll("#goods-list",{probeType:2,click:true})

    this.listHeight = this._getListHeight()  //得到所有的高度
    // console.info(this.listHeight)
    //给this.gl注册scroll事件
    let _this = this;
    this.gl.on('scroll',function(){
      let dis = Math.abs(this.y)
      // console.log(dis);
      for (var i = 0; i < _this.listHeight.length; i++) {
        let one = _this.listHeight[i];
        let tow = _this.listHeight[i+1];
        if(dis>=one&&dis<tow){
          _this.current = [i]
        }
      }
    })

  }
}

</script>

<style lang="less" scoped>
  .goods {
    position:fixed;
    left:0;
    right:0;
    top:175px;
    bottom:48px;
    overflow: hidden;
    display: flex;
    .goods-menu{
      width:80px;
      min-width: 80px;
      background-color: #f3f5f7;
      li{
        height:54px;
        padding: 0 12px;
        // margin-top:30px;
        p{
          height:54px;
          border-bottom:1px solid rgba(7, 17, 27, .1);
          // border-bottom:1px solid red;
          font-weight: 200;
          // line-height: 54px;
          text-align: center;
          font-size:12px;
          display: flex;
          align-items: center;
        }
        &.active{
          background-color: #fff;
          p{border-bottom: none}
        }
      }
    }
    .goods-list{
      dt{
        font-size:12px;
        height:26px;
        background-color:#f3f5f7;
        color: rgb(147, 153, 159);
        line-height: 26px;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      }
      dd{
        display: flex;
        padding-top:18px;
        padding-left: 18px;
        img{width:57px;height:57px;margin-right:10px;}
        .food{
          position:relative;
          flex-grow: 1;
          h2{font-size: 14px;color: rgb(7,17,27);line-height: 14px;}
          p{
            font-size: 10px;
            color: rgb(147,153,159);
            line-height: 20px;
            margin-top: 3px;
            strong{
              font-size:14px;
              color: red;
            }
          }
          .ele-buy{
            position: absolute;
            right: 10px;
            bottom: 0px;
          }
        }
      }
    }
  }
</style>
