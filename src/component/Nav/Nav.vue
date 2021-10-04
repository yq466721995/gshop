<template>
  <!--首页导航-->
  <nav class="nav">
    <!--如果数据请求还没返回时，显示svg图片-->
    <div class="swiper-container"  v-if="categorys.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
          <a href="javascript:" class="link_to_food" v-for="category in categorys" :key="category.id">
            <div class="food_container">
              <img :src="baseImgUrl + category.image_url">
            </div>
            <span>{{category.title}}}</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <img src="./images/nav_back.svg" alt="back" v-else/>
  </nav>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    name: "Nav",
    data(){
      return{
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed:{
      //读取categorys
      ...mapState(['categorys']),
      /*
        根据categorys一维数组生成一个二维数组
        小数组的最大个数为8个
      */
      categorysArr(){
        const {categorys} = this
        //准备一个空的二维数组
        const arr = []
        //准备一个小数组(最大长度是8)
        let minArr = []
        //遍历categorys
        categorys.forEach(c => {
          //如果当前小数组满了，则创建一个新的
          if(minArr.length === 8){
            minArr = []
          }
          //如果minArr是空的，则将minArr保存到大数组中
          if(minArr.length === 0){
            arr.push(minArr)
          }
          //将当前分类保存在小数组中
          minArr.push(c)
        })
        return arr
      }
    },
    watch: {
      categorys(value){ //监听categorys的变化
        //界面更新就立即创建swiper对象
        this.$nextTick(() => {//将回调延迟到下次 DOM 更新循环之后执行;一旦完成界面更新，立即调用(此条语句要写在数据更新之后)
          //创建一个swiper实例对象，来实现轮播
          new Swiper('.swiper-container',{
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
