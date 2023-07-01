<template>
    <div id="homeContainer">
        <div id="homeLeft" style="margin-top: 120px; flex-basis: 713px;">
            <p id="hw" class="dark:text-white"><VueWriter :array="['Hello, World!']" :typeSpeed=50 :iterations="1"/><VueWriter :array="['','My name is']" :delay=1100 :typeSpeed=50 :iterations="1"/></p>
            <p class="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" id="myName">
                <VueWriter :array="['','Bintang A\'raaf Stevan Putra']" :typeSpeed=50 :delay="2000" :iterations="1"/>
            </p>
            <br>
            <div id="codeBox" class="elementsHide">
                /* I'm interested in.. */<br>
                <p id="interest"><span class="codeSymbol">&lt;</span><span style="color: #f73374;">p</span><span class="codeSymbol">&gt;</span><span style="color: #f4f7fa;">
                    <VueWriter :array=interests :typeSpeed="80" :eraseSpeed="50"/>
                </span><span class="codeSymbol">&lt;/</span><span style="color: #f73374;">p</span><span class="codeSymbol">&gt;</span></p>
            </div>
        </div>
        <div class="elementsHide" id="homeRight" style="flex-shrink: 2;">
            <img class="w-auto rounded-full ring ring-offset-8 ring-slate-200 dark:ring-slate-500 dark:ring-offset-slate-700" src="@/assets/img/avatar.jpg" style="width: 961px;" alt="My Avatar">
        </div>
        <div id="links">
            <HomeLinks :size="120" url="https://bit.ly/3r9sOwj" img="linkedin.png" :imgSize="70" :transform="{ translateX: 520, translateY: 345 }"/>
            <HomeLinks :size="90" url="https://bit.ly/3pzUSbA" img="github.png" :imgSize="70" :transform="{ translateX: 860, translateY: 340 }"/>
            <HomeLinks :size="70" url="https://bit.ly/3JB7Cpm" img="whatsapp.png" :imgSize="55" :transform="{ translateX: 835, translateY: 0 }"/>
            <HomeLinks :size="45" url="https://bit.ly/3Jx7XJt" img="telegram.png" :imgSize="30" :transform="{ translateX: 907, translateY: -15 }"/>
            <HomeLinks :size="60" url="https://bit.ly/3PAMao9" img="gmail.png" :imgSize="37" :transform="{ translateX: 920, translateY: 120 }"/>
        </div>
    </div>
</template>

<script>
import HomeLinks from './icons/HomeLinks.vue'

export default{
    data(){
        return{
            interests : ['Web Development', 'Software Development', 'Internet of Things', 'Cyber Security']
        }
    },
    components: {
        HomeLinks
    }
}

setTimeout(() => {
    document.getElementById('links').classList.add('visible');
},4700)
</script>

<style scoped>
.homeHide{
    opacity: 0;
    transition: opacity 1s;
}

.homeHide.visible{
    opacity: 1;
}
.is-typed{
    display: inline-block;
}

.is-typed span.typed{
    font-family: Cascadia;
}

#homeContainer{
    display: flex;
    justify-content: space-between;
    margin: 30px 0 100px 0;
}

#hw{
    font-family: Quicksand-Regular;
    font-size: 18px;
}

#myName{
    width: 380px;
    font-family: Poppins-SemiBold;
    font-size: 50px;
    line-height: 60px;
}

#codeBox{
    background-color: #22272e;
    width: fit-content;
    border-radius: 7px;
    padding: 15px;
    font-family: Cascadia;
    color: #70a55b;
}

#interest{
    font-size: 24px;
}

#interest span{
    font-family: Cascadia;
}

.codeSymbol{
    color: #979797;
}

#links{
    position: absolute;
    opacity: 0;
    transition: opacity 1s, transform 1s;
    transform: translate(-20px, 0);
}

#links.visible{
    opacity: 1;
    transform: translate(0, 0);
}
</style>