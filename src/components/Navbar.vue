<template>
    <div id="navbarContainer" class="bg-white dark:bg-slate-700">
        <p id="navbarTitle" @click="scrollHome" class="elementsHide dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400 hover:cursor-pointer">⭐ Bintang</p>
        <ul id="navbarList">
            <li class="elementsHide">
                <a @click="scrollAbout" class="dark:text-white hover:text-purple-600 dark:hover:text-purple-500">About</a>
            </li>
            <li class="elementsHide">
                <a @click="scrollSkills" class="dark:text-white hover:text-purple-600 dark:hover:text-purple-500">Skills</a>
            </li>
            <li class="elementsHide">
                <a @click="scrollProjects" class="dark:text-white hover:text-purple-600 dark:hover:text-purple-500">Projects</a>
            </li>
            <li @click="theme" class="hover:ring-offset-4 hover:ring-offset-white dark:hover:ring-offset-slate-700 hover:cursor-pointer hover:ring-2 hover:ring-black dark:hover:ring-gray-200 " style="border-radius: 50%;">
                <img id="themeIcon" class="w-7" src="@/assets/img/icons/light.png" alt="Light/Dark Mode">
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
            loadingFinish: false,
        }
    },
    methods: {
        scrollHome(){
            window.scrollTo(0,0);
        },
        scrollAbout(){
            window.scrollTo(0,600);
        },
        scrollSkills(){
            window.scrollTo(0,1100);
        },
        scrollProjects(){
            window.scrollTo(0,1630);
        },
        theme(){
            const themeIcon = document.querySelector("#themeIcon")
            const catoLogo = document.querySelector("#catoLogo")
            const incubatorLogo = document.querySelector("#incubatorLogo")
            if(localStorage.getItem('colorTheme') === 'dark'){
                localStorage.setItem('colorTheme','light');
                document.documentElement.classList.remove('dark');
                themeIcon.src="src/assets/img/icons/light.png";
                themeIcon.style.filter = 'invert(0)';
                if(this.loadingFinish){
                    document.querySelector('body').style.backgroundColor = '#fafafa';
                } else {
                    document.querySelector('body').style.backgroundColor = 'white';
                }
                catoLogo.src="src/assets/img/projects/cato.png";
                incubatorLogo.src="src/assets/img/projects/incubator.png";
            } else {
                localStorage.setItem('colorTheme','dark');
                document.documentElement.classList.add('dark');
                themeIcon.src="src/assets/img/icons/dark.png";
                themeIcon.style.filter = 'invert(1)';
                if(this.loadingFinish){
                    document.querySelector('body').style.backgroundColor = '#1e293b';
                } else {
                    document.querySelector('body').style.backgroundColor = '#334155';
                }
                catoLogo.src="src/assets/img/projects/cato_dark.png";
                incubatorLogo.src="src/assets/img/projects/incubator_dark.png";
            }
        }
    },
    mounted(){
        setTimeout(() => {this.loadingFinish = true},4500);
    }
}
</script>

<style scoped>
#navbarContainer{
    display: flex;
    justify-content: space-between;
    padding: 30px 50px 30px 50px;
    margin-left: -50px;
    margin-right: -50px;
}

#navbarTitle{
    font-family: Quicksand-SemiBold;
    font-size: 20px;
}

ul{
    display: flex;
    align-items: center;
    gap: 30px;
}

li a{
    font-family: Quicksand-SemiBold;
    cursor: pointer;
}
</style>