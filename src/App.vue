<script setup lang="ts">
import First from './components/First.vue'
import Second from './components/Second.vue'
import Third from './components/Third.vue'
import { ref, reactive } from 'vue'
const zhu: any = reactive({
  made: 'fade',
  loadCount:0,
  countNum:0,

})
const currentTab: any = ref('First')

const tabs: any = {
  First,
  Second,
  Third
}
const getImageUrl =(name:any)=>{
  return new URL(name,import.meta.url).href
}
function loadImage(){
  let imgs = [
    "./src/assets/img/Fitsrt.jpg",
    "./src/assets/img/Second.jpg",
    "./src/assets/img/Third.jpg",
]
for (let img of imgs){
  let image = new Image()
  image.src = getImageUrl(img)
  image.onload = ()=>{
    zhu.countNum++
    console.log(zhu.countNum)
    zhu.loadCount = Math.floor(zhu.countNum/ imgs.length * 100)
  }
}
}
loadImage()

</script>

<template>
  <header>
    <div>
      <div v-if="zhu.loadCount>=100">
        <transition :name="zhu.made">
          <component :is="tabs[currentTab]" class="tab"></component>
        </transition>
        <div class="button">
          <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab">
            {{ tab }}
          </button>
        </div>
      </div>
      <div v-if="zhu.loadCount<100">
        {{ zhu.loadCount}}
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
  transition: all 0.8s
}

.fade-enter-from {
  transform: translateY(667px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-667px);
  opacity: 0;

}

.fada-leave-active,
.fada-enter-active {
  transition: all 0.8s
}

.fada-enter-from {
  transform: translateY(-667px);
  opacity: 0;
}

.fada-leave-to {
  transform: translateY(667px);
  opacity: 0;

}
</style>
