<!-- halaman proyek -->

<template>
    <div id="projectsContainer" class="my-12 px-3 overflow-x-hidden hidden">
        <p id="projectsTitle" class="text-right text-2xl mb-10 dark:text-white">My Recent Projects</p>
        <div id="projects" class="flex flex-row gap-8 5px">
            <!-- daftar proyek -->
            <button @click="selectProject(1)" id="project1" class="project focus:outline-none focus:ring-orange-500 dark:focus:ring-orange-500 hover:ring-orange-500 dark:hover:ring-orange-500 hover:shadow-xl dark:hover:shadow-xl hover:cursor-pointer ring-2 ring-slate-200 ring-offset-8 rounded dark:ring-slate-500 dark:ring-offset-slate-700">
                <img id="catoLogo" src="@/assets/img/projects/cato.png" style="height:60px;">
            </button>
            <button @click="selectProject(2)" id="project2" class="project focus:outline-none focus:ring-pale-orange dark:focus:ring-blue-300 hover:ring-pale-orange dark:hover:ring-blue-300 hover:shadow-xl dark:hover:shadow-xl hover:cursor-pointer ring-2 ring-slate-200 ring-offset-8 rounded dark:ring-slate-500 dark:ring-offset-slate-700">
                <img id="incubatorLogo" src="@/assets/img/projects/incubator.png" style="height:60px;">
            </button>
            <button @click="selectProject(3)" id="project3" class="project focus:outline-none focus:ring-yellow-400 dark:focus:ring-yellow-400 hover:ring-yellow-400 dark:hover:ring-yellow-400 hover:shadow-xl dark:hover:shadow-xl hover:cursor-pointer ring-2 ring-slate-200 ring-offset-8 rounded dark:ring-slate-500 dark:ring-offset-slate-700">
                <img src="@/assets/img/projects/smard.png" style="height:40px;">
            </button>
            <button @click="selectProject(4)" id="project4" class="project focus:outline-none focus:ring-green-500 dark:focus:ring-green-500 hover:ring-green-500 dark:hover:ring-green-500 hover:shadow-xl dark:hover:shadow-xl hover:cursor-pointer ring-2 ring-slate-200 ring-offset-8 rounded dark:ring-slate-500 dark:ring-offset-slate-700">
                <img src="@/assets/img/projects/aplatero.png" style="height:50px;">
            </button>
        </div>
        <div class="projectsCarousel" style="margin-top: 70px;">
            <!-- menggunakan komponen eksternal untuk menampilkan deskripsi proyek -->
            <Cato />
            <Incubator />
            <Smard />
            <Aplatero />
        </div>
        <br><br><br>
    </div>
</template>

<script>
import Cato from './projects/Cato.vue'
import Incubator from './projects/Incubator.vue'
import Smard from './projects/Smard.vue'
import Aplatero from './projects/Aplatero.vue'

export default{
    components: {
        Cato,Incubator,Smard,Aplatero
    },
    methods: {
        selectProject(number){
            const element = document.querySelector('.projectsCarousel');
            switch(number){
                case 1:
                    document.querySelector('.project').classList.toggle('active');
                    element.style.transform = 'translateX(0)';
                    break;
                case 2:
                    element.style.transform = 'translateX(-985px)';
                    break;
                case 3:
                    element.style.transform = 'translateX(-1970PX)';
                    break;
                case 4:
                    element.style.transform = 'translateX(-2960PX)';
                    break;
            }
        }
    },
    mounted(){
        setTimeout(() => {
            document.querySelector("#projectsContainer").style.display = 'block'
        },4800);
    }
};
</script>

<style>

#projectsTitle{
    font-family: Poppins-ExtraLight;
}
.project{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.projectsCarousel{
    transition: transform 0.7s;
    width: 5000px;
    display: flex;
    align-items: flex-start;
}

.projectContainer{
    width: 920px;
    display: inline-block;
    margin-right: 70px;
    padding-left: 0px;
}

.projectContainer img{
    max-height: 500px;
    border-radius: 10px;
}

.projectTitle{
    font-family:Quicksand-Bold;
    font-weight: bold;
    font-size: 30px;
}
.projectDescription{
    width: 95%;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    line-height: 33px;

}

@keyframes testAnim{
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-500px);
    }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>