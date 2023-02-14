<script setup lang="ts">
import First from './components/First.vue'
import Second from './components/Second.vue'
import Third from './components/Third.vue'
import { ref, reactive } from 'vue'
const zhu: any = reactive({
  made: 'fade',
  loadCount: 0,
  countNum: 0,

})
const currentTab: any = ref('First')

const tabs: any = {
  First,
  Second,
  Third
}
const getImageUrl = (name: any) => {  //图片资源地主返回
  return new URL(`./assets/${name}`, import.meta.url).href
}
function loadImage() {  //图片资源预加载
  let imgs = [
    "img/FisrtImg/backgroud.jpg",
    "img/FisrtImg/1-1text.png",
    "img/FisrtImg/1.2text.png",
    "img/FisrtImg/1-3text.png",
    "img/FisrtImg/1.4liu.png",
    "img/FisrtImg/1.5liu.png",
    "img/Second.jpg",
    "img/Third.jpg",
  ]
  for (let img of imgs) {
    let image = new Image()
    image.src = getImageUrl(img)
    image.onload = () => {
      zhu.countNum++
      console.log(image.src)
      zhu.loadCount = Math.floor(zhu.countNum / imgs.length * 100)
    }
  }
}
function swipeupAction(evenObject: any) {  //上滑检测
  zhu.made = 'fade'
  if (currentTab.value === 'First') {
    currentTab.value = 'Second'
    console.log(1);
  }
  else if (currentTab.value === 'Second') {
    currentTab.value = 'Third'
    console.log(2);
  }
  else if (currentTab.value === 'Third') {
    currentTab.value = 'First'
    console.log(2);
  };
}
function swipedownAction(evenObject: any) {   //下滑检测
  zhu.made = 'fada'
  if (currentTab.value === 'First') {
    currentTab.value = 'Third'
    console.log(1);
  }
  else if (currentTab.value === 'Second') {
    currentTab.value = 'First'
    console.log(2);
  }
  else if (currentTab.value === 'Third') {
    currentTab.value = 'Second'
    console.log(2);
  }

}
loadImage()

</script>

<template>
  <header>
    <div>
      <div v-if="zhu.loadCount >= 100">
        <transition :name="zhu.made">
          <component :is="tabs[currentTab]" class="tab" v-touch:swipeup="swipeupAction"
            v-touch:swipedown="swipedownAction"></component>
        </transition>
        <!-- <div class="button">
          <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab">
            {{ tab }}
          </button>
        </div> -->
      </div>
      <div v-if="zhu.loadCount < 100">
        {{ zhu.loadCount }}
      </div>
    </div>
  </header>

  <main>

  </main>
</template>

<style scoped>
.button {
  position: fixed;
  top: 500px;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

.tab {
  width: 100vw;
  ;
  height: 100vh;
}


.fade-leave-active,
.fade-enter-active {
  transition: all 0.8s ease
}

.fade-enter-from {
  transform: translateY(667px);
  opacity: 0.1;
}

.fade-leave-to {
  transform: translateY(-667px);
  opacity: 0.1;

}

.fada-leave-active,
.fada-enter-active {
  transition: all 0.8s ease
}

.fada-enter-from {
  transform: translateY(-667px);
  opacity: 0.1;
}

.fada-leave-to {
  transform: translateY(667px);
  opacity: 0.1;

}
</style>
