<template>

<div class="abc">
        <img src="../assets/img/FisrtImg/1-3text.png" alt="" class="text1">
        <img src="../assets/img/FisrtImg/1.2text.png" alt="" class="text2">
        <img src="../assets/img/FisrtImg/1-1text.png" alt="" class="text3">
</div>

</template>
<script setup lang='ts'>
import { reactive } from 'vue';

</script>
<style scoped lang='less'>
.abc{
    background-image: url(../assets/img/FisrtImg/backgroud.jpg);
    width: 100vw;
    height:100vh;
    background-position: center;
    background-size: cover;
}
.text1{
    width: 234px;
    height: 13px;
    margin-left: 70px;
    margin-top: 48px;
    position: absolute;
    animation:fadeInUp 0.8s ease ;
    animation-delay: 0.3s;
    animation-fill-mode:both;
}
.text2{
    width: 189px;
    height: 14px;
    margin-left: 93px;
    margin-top: 629px;
    position: absolute;
    animation:fadeInUp 0.8s ease ;
    animation-delay: 0.9s;
    animation-fill-mode:both;
}
.text3{
    width: 205px;
    height: 138px;
    margin-left: 85px;
    margin-top: 89px;
    position: absolute;
    animation:fadeInUp 0.8s ease ;
    animation-delay: 0.6s;
    animation-fill-mode:both;//动画开始前隐藏
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 50px, 0);
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>