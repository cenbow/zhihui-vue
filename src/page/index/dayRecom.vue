<template>
  <div class="day_recom">
    <div class="day_recom_top">
      <p>小编推荐</p>
      <p>
          <span @click="$router.push({ name: 'moreRecommendList', params: { id: 'xbtj',status:'undefined' }})"
                class="fontSm"
          >更多推荐
            <i class="iconfont icon-iconfontjiantou5 fontSm"></i></span>
      </p>
    </div>
    <div class="day_recom_bottom">
      <div class="swiper-container" id="recommend">
        <div class="swiper-wrapper day_recom_swiper">
          <div :key="item.id" @click="$router.push({ name: 'detail', params: { id: item.id,status:1 }})" class="swiper-slide"
               v-for="item in recommendList"
          >
            <img :src="`${baseImgUrl}${item.store_images}`" alt="" class="slide_img">
            <div class="slide_div">
              <p>{{item.shop_name}}</p>
              <p>{{item.address}}</p>
              <p style="display: flex;justify-content: space-between;align-items:baseline;width: 100%;">
                <!--<span class="dollar colorRed">￥</span>-->
                <span class="colorRed" style="font-size: .1rem" v-show="item.discount !== '无折扣' && item.discount/1 !== 100 && item.discount !== 0"><span style="font-size: .16rem">{{item.discount/1}}</span>折起</span>
                <!--<span class="through_span">￥188</span>-->
                <span class="dollar">{{item.distance}}km</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ImgBaseUrl, recommendList} from '../../api'

  export default {
    name: "dayRecom",
    data() {
      return {
        baseImgUrl: ImgBaseUrl,
        recommendList: [],
        toJSON: ''
      }
    },
    methods: {
      async getRecommendList() {
        let result = await recommendList(localStorage.longitude_latitude, localStorage.area_id);
        if (result.code === 1) {
          this.recommendList = result.data.data;
          console.log(result)
        }
      },
    },
    created() {
      this.getRecommendList()
    },
    mounted() {
      let recommend = new Swiper('#recommend', {
        freeMode: true,
        slidesPerView: 1.3,
        spaceBetween: 20,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
      })
    }
  }
</script>

<style scoped>

</style>
