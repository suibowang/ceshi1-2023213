<template>

<div class="abb">
    <img src="../assets/img/FisrtImg/1.4liu.png" alt="" class="liu1-1">
    <img src="../assets/img/FisrtImg/1.4liu.png" alt="" class="liu1-2">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu1-3">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu2-1">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu2-2">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu2-3">
    <img src="../assets/img/Second/2.2.1text.png" alt="" class="text1-1">
    <img src="../assets/img/Second/2.2.2text.png" alt="" class="text1-2">
    <img src="../assets/img/Second/2.2.3text.png" alt="" class="text1-3">
    <img src="../assets/img/Second/2.2.4text.png" alt="" class="text1-4">
    <img src="../assets/img/Second/2.2.5text.png" alt="" class="text1-5">
    <img src="../assets/img/Second/2.2.6text.png" alt="" class="text1-6">
    <img src="../assets/img/Second/2.2.7text.png" alt="" class="text1-7">
    <img src="../assets/img/Second/2.2.8text.png" alt="" class="text1-8">
    <img src="../assets/img/Second/2.2.9text.png" alt="" class="text1-9">
    <img src="../assets/img/Second/2.2.10text.png" alt="" class="text1-10">
    <img src="../assets/img/Second/2.3xing.png" alt="" class="xing10-1">
    <img src="../assets/img/Second/2.4xing.png" alt="" class="xing10-2">
</div>

</template>
<script setup lang='ts'>
import { reactive } from 'vue';

</script>
<style scoped lang='less'>
.abb{
    background-image: url(../assets/img/Second/2.1backgroud.png);
    width: 100vw;
    height:100vh;
    position: absolute;
    background-position: center;
    background-size: cover;

}
.xing10-1{
  width: 310px;
  height: 315px;
  margin-left: 24px;
  margin-top: 28px;
  position: absolute;
  animation: xing 3s ease infinite;
  animation-fill-mode: both; //动画开始前隐藏
}
.xing10-2{
  width: 276px;
  height: 129px;
  margin-left: 50px;
  margin-top: 424px;
  position: absolute;
  animation: xing 2s ease  infinite;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-1 {
  width: 105px;
  height: 15px;
  margin-left: 136px;
  margin-top: 166px;
  position: absolute;
  animation: fadeInUp 1s  ease;
  animation-delay: 0.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-2 {
  width: 113px;
  height: 13px;
  margin-left: 132px;
  margin-top: 200px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 1.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-3 {
  width: 150px;
  height: 13px;
  margin-left: 114px;
  margin-top: 235px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 2.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-4 {
  width: 175px;
  height: 13px;
  margin-left: 101px;
  margin-top: 269px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 3.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-5 {
  width: 163px;
  height: 13px;
  margin-left: 107px;
  margin-top: 303px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 4.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-6 {
  width: 163px;
  height: 13px;
  margin-left: 107px;
  margin-top: 338px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 5.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-7 {
  width: 215px;
  height: 13px;
  margin-left: 81px;
  margin-top: 372px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 6.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-8 {
  width: 104px;
  height: 14px;
  margin-left: 138px;
  margin-top: 406px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 7.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-9 {
  width: 213px;
  height: 13px;
  margin-left: 82px;
  margin-top: 441px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 8.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.text1-10 {
  width: 139px;
  height: 14px;
  margin-left: 119px;
  margin-top: 475px;
  position: absolute;
  animation: fadeInUp 1s ease;
  animation-delay: 9.5s;
  animation-fill-mode: both; //动画开始前隐藏
}
.liu1-1 {
  width: 52px;
  height: 77px;
  margin-left: 100px;
  margin-top: -100px;
  position: absolute;
  animation: liu1 3.5s linear infinite;
  animation-delay: 1s;
  animation-fill-mode: both;
}
.liu1-2 {
  width: 52px;
  height: 77px;
  margin-left: 200px;
  margin-top: -100px;
  position: absolute;
  animation: liu1 4s linear infinite;
  animation-delay: 2s;
  animation-fill-mode: both;
}

.liu1-3 {
  width: 52px;
  height: 77px;
  margin-left: 300px;
  margin-top: -100px;
  position: absolute;
  animation: liu1 4.9s linear infinite;
  animation-delay: 3s;
  animation-fill-mode: both;
}
.liu2-1 {
  width: 87px;
  height: 125px;
  margin-left: 70px;
  margin-top: -100px;
  position: absolute;
  animation: liu2 3.5s linear infinite;
  animation-delay: 0.5s;
  animation-fill-mode: both;
}
.liu2-2 {
  width: 87px;
  height: 125px;
  margin-left: 150px;
  margin-top: -100px;
  position: absolute;
  animation: liu2 2.8s linear infinite;
  animation-delay: 1.5s;
  animation-fill-mode: both;
}
.liu2-3 {
  width: 87px;
  height: 125px;
  margin-left: 250px;
  margin-top: -100px;
  position: absolute;
  animation: liu2 2.5s linear infinite;
  animation-delay: 2.5s;
  animation-fill-mode: both;
}

@keyframes liu1 {
  from {
    opacity: 1;
    -webkit-transform: translate(100px, -100px);
    transform: translate3d(100px, -100px);
  }

  to {
    opacity: 1;
    -webkit-transform: translate(-300px, 800px);
    transform: translate(-300px, 800px);
  }
}
@keyframes liu2 {
  from {
    opacity: 1;
    -webkit-transform: translate(250px, -100px);
    transform: translate3d(250px, -100px);
  }

  to {
    opacity: 1;
    -webkit-transform: translate(-100px, 800px);
    transform: translate(-100px, 800px);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 15px, 0);
    transform: translate3d(0, 15px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes xing {
    from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
</style>