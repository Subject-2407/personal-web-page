<template>
    <div id="skillsContainer" class="my-12">
        <p id="skillsTitle" class="text-center text-3xl dark:text-white">💻 Skills 💻</p>
        <p id="skillsTitle2" class="text-center text-slate-400 mt-1">Top technologies I have experienced so far</p>
        <ul id="techContainer" class="flex flex-row flex-wrap gap-9 mt-7 px-12">
            <Techs img="html.png" :size="60"/>
            <Techs img="css.png" :size="60"/>
            <Techs img="js.png" :size="55"/>
            <Techs img="php.png" :size="70"/>
            <Techs img="jquery.png" :size="55"/>
            <Techs img="tailwind.png" :size="60"/>
            <Techs img="laravel.png" :size="60"/>
            <Techs img="mysql.png" :size="85"/>
            <Techs img="csharp.png" :size="60"/>
            <Techs img="java.png" :size="70"/>
            <Techs img="python.png" :size="70"/>
            <Techs img="net.png" :size="70"/>
            <Techs img="arduino.png" :size="70"/>
        </ul>
    </div>
</template>

<script>
import Techs from './icons/Techs.vue'

export default{
    components: {
        Techs
    }
}
</script>

<style scoped>
#skillsTitle{
    font-family: Cascadia;
}

#skillsTitle2{
    font-family: Quicksand-Regular;
}
</style>