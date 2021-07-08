<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner">
      <img :src="require('@/static/images/about/banner/12.png')" alt="">
    </div>
    <TabBar />
    <div>
      <!-- <div class="media-wrapper" >

        <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">
        <div class="media-back" :style="{background: `url('${aboutIntroduce.video_image}')  no-repeat center center`}"  />
        <img class="play-btn" @click="playVideo()" src="@/assets/images/about/play.png" alt="">
        <template v-if="isPlay">
          <video class="video" controls width="100%" height="100%" autoplay>
            <source :src="aboutIntroduce.video_url" type="video/mp4">

            Sorry, your browser doesn't support embedded videos.
          </video>
        </template>

      </div> -->
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import TabBar from '@/components/about/TabBar/index.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    TabBar,
  }
}
</script>

<style lang="less" >
</style>
