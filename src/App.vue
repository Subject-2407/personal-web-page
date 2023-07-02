<template>
  <div id="wrapper" class="bg-white dark:bg-slate-700">
    <header class="sticky top-0 z-50">
      <!-- komponen navbar -->
      <Navbar />
    </header>
    <main class="z-1">
      <!-- komponen halaman utama -->
      <Home />
      <hr class="border-2 dark:border-slate-500">
      <Transition name="slide-fade">
        <!-- komponen tentang saya -->
        <About v-if="show" />
      </Transition>
      <hr class="border-2 dark:border-slate-500">
      <Transition name="slide-fade">
         <!-- komponen keterampilan saya -->
        <Skills v-if="show" />
      </Transition>
      <hr class="border-2 dark:border-slate-500">
       <!-- komponen proyek - proyek -->
      <Projects />
    </main>
  </div>
</template>

<script>

export default{
    data(){
        return{
            show : false,
        }
    },
    mounted(){
      setTimeout(()=>{this.show = true},4500);
    }
}

setTimeout(() => {
  var elements = document.querySelectorAll("hr");
  for(let i = 0; i < elements.length; i++){
    elements[i].style.opacity = "1";
    elements[i].style.width = '100%';
  }
},4800);

</script>
<style scoped>
#wrapper{
  width: 1050px;
  padding-left: 50px;
  padding-right: 50px;
}
hr{
  opacity: 0;
  transition: opacity 1s;
  transition: width 0.5s ease;
  margin: 0 auto;
  width: 0px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
