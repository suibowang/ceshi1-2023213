<template>

  <div class="abc">
    <img src="../assets/img/FisrtImg/1-3text.png" alt="" class="text1">
    <img src="../assets/img/FisrtImg/1.2text.png" alt="" class="text2">
    <img src="../assets/img/FisrtImg/1-1text.png" alt="" class="text3">
    <img src="../assets/img/FisrtImg/1.4liu.png" alt="" class="liu1-1">
    <img src="../assets/img/FisrtImg/1.4liu.png" alt="" class="liu1-2">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu1-3">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu2-1">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu2-2">
    <img src="../assets/img/FisrtImg/1.5liu.png" alt="" class="liu2-3">
  </div>

</template>
<script setup lang='ts'>
import { reactive } from 'vue';

</script>
<style scoped lang='less'>
.abc {
  background-image: url(../assets/img/FisrtImg/backgroud.jpg);
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  position: absolute;
}

.text1 {
  width: 234px;
  height: 13px;
  margin-left: 70px;
  margin-top: 48px;
  position: absolute;
  animation: fadeInUp 0.8s ease;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.text2 {
  width: 189px;
  height: 14px;
  margin-left: 93px;
  margin-top: 629px;
  position: absolute;
  animation: fadeInUp 0.8s ease;
  animation-delay: 0.9s;
  animation-fill-mode: both;
}

.text3 {
  width: 205px;
  height: 138px;
  margin-left: 85px;
  margin-top: 89px;
  position: absolute;
  animation: fadeInUp 0.8s ease;
  animation-delay: 0.6s;
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