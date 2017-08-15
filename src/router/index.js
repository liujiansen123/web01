import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Goods from "@/components/Goods/Goods"
import Rating from "@/components/Rating/Rating"
import Seller from "@/components/Seller/Seller"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
  ]
})
