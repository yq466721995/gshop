<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-fcstubiao"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <Nav/>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang shop_icon"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  import HeaderTop from "../../component/HeaderTop/HeaderTop";
  import Nav from "../../component/Nav/Nav";
  import ShopList from "../../component/ShopList/ShopList";
  import {mapState} from 'vuex'
  export default {
    components:{
      HeaderTop,
      Nav,
      ShopList
    },
    computed:{
      ...mapState(['address','userInfo'])
    },
    mounted() {
      //发请求获取食品分类数据
      this.$store.dispatch('getCategorys')
      //发请求获取店铺数据
      this.$store.dispatch('getShops')
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
        .icon-fcstubiao
          font-size 25px
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          font-size 10px
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
