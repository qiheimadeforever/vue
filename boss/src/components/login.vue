<template>
  <div class="body_sty">
    <!-- 轮播图 -->
    <van-swipe
      class='loginMask'
      :show-indicators='false'
      :autoplay="1500"
    >
      <van-swipe-item class='loginBg_1'></van-swipe-item>
      <van-swipe-item class='loginBg_2'></van-swipe-item>
      <van-swipe-item class='loginBg_3'></van-swipe-item>
      </van-swipe>

      <!-- 我要招人、我要应聘，按钮 -->
      <van-button
        class='loginBtn_1'
        type="primary"
      >我要招人</van-button>
        <van-button
          class='loginBtn_2'
          type="primary"
          to="/index_jobList"
        >我要应聘</van-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'vue+vant高仿boss直聘app'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty {
  height: 100%;
  position: relative;
}
.loginMask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.loginBg_1 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/loginMask/1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.loginBg_2 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/loginMask/1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.loginBg_3 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/loginMask/1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0;
}
.loginBtn_1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 5;
  height: 0.6rem;
  line-height: 0.8rem;
}
.loginBtn_2 {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 5;
  height: 0.6rem;
  line-height: 0.8rem;
}
</style>
