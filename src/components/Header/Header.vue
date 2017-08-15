<template lang="html">
  <header>
      <!-- 商家的基本信息 -->
      <div class="seller">
            <img :src="seller.avatar" alt="">
            <div class="seller-info">
              <h2><i></i>{{seller.name}}</h2>
              <p class="delivery">{{seller.description}}/{{seller.deliveryTime}}分钟到达</p>
              <p class="pay">{{seller.supports[0].description}}</p>
          </div>
        <!-- 弹出的按钮 -->
          <div class="btn" @click = "show = true">5个 ></div>
      </div>
      <!-- 公告 -->
      <div class="bulletin" @click = "show = true">
          <i></i>
          <p>{{seller.bulletin}}</p>
          <span>></span>
      </div>
      <!-- 背景颜色 -->
      <div class="bg">
        <img :src="seller.avatar" alt="">
      </div>
      <!-- 弹出层 -->
      <!-- <div class="poput">

      </div> -->
      <transition name = "abc">
          <ele-popup :seller='seller' v-show = "show" @chacha = "show =false"></ele-popup>
      </transition>
  </header>
</template>

<script>
import Popup from '../Popup/Popup'
export default {
  data(){
    return {
      show:false
    }
  },
  props:{
    seller:{
      type:Object,
      required:true
    }
  },
  components : {
    'ele-popup' : Popup
  }
}
</script>

<style lang="less">
    header {
      width:100%;
      position:relative;
      height:134px;
      background:rgba(7,17,27,0.5);
      overflow:hidden;
      color:#fff;
      .seller{
          margin:24px 12px 18px 24px ;
          display:flex;
          img{
              width:64px;
              height:64px;
              border-radius:4px;
          }
          .seller-info{
            margin-left:16px;
            flex-grow:1;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
                h2{
                  font-size:16px;
                  font-weight:700;
                  line-height:18px;
                    i{
                      width:30px;
                      height:18px;
                      display: inline-block;
                      background:url('./brand@2x.png');
                      background-size:contain;
                      vertical-align: middle;
                      margin-right:5px;
                    }
                }
                .delivery{
                  font-size:12px;
                  font-weight:200;

                }
                .pay{
                  font-size:10px;
                  font-weight:200
                }

          }
          .btn{
            align-self:flex-end;
            font-size:10px;
            font-weight:200;
            background: rgba(0, 0, 0, .2);
            padding:10px 15px;
            border-radius:7px 8px;
          }
      }
      }
      .bulletin{
          height:28px;
          line-height:28px;
          padding:0 12px;
          font-size:10px;
          font-weight: 200;
          background:rgba(7,17,27,.2);
          display:flex;
          align-items: center;
          p{
              white-space:nowrap;
              overflow: hidden;
              text-overflow:ellipsis;
          }
          i{
              min-width:22px;
              min-height:12px;
              display:block;
              background: url('./bulletin@2x.png') 0 0 no-repeat;
              background-size:contain;
              margin-right:5px;


          }
      }
      .bg{
          position: absolute;
          width:100%;
          height:100%;
          left:0;
          top:0;
          z-index:-1;
          filter:blur(5px);
          img{
            width:100%
          }

      }
      @keyframes abc-in {
        0%{transform:scale(0);}
        50%{transform: scale(1.5);}
        100%{transform: scale(1);}
      }
      @keyframes abc-out {
        0%{transform: scale(1)}
        50%{transform:scale(1.5)}
        100%{transform:scale(0)}
      }
      .abc-enter-active{animation:abc-in .5s}
      .abc-leave-active{animation:abc-out .5s}

</style>
