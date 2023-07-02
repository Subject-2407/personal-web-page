<template>
    <div class="spreadLinks bg-white dark:bg-slate-700 ring-4 ring-slate-200 dark:ring-slate-500 hover:ring-slate-300 hover:shadow-xl dark:hover:ring-slate-400 hover:scale-100" :style="{
        width: `${size}px`, 
        height: `${size}px`,
        transform: `translate(${transform.translateX}px, ${transform.translateY}px)`
        }">
        <a :href="url" target="_blank" tabindex="-1">
            <img :src="imageSrc" :style="{width: `${imgSize}px`}"/>
        </a> 
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            required: true,
        },
        url: {
            type: String,
            required: false,
        },
        img: {
            type: String,
            required: true
        },
        imgSize: {
            type: Number,
            required: true,
        },
        transform: {
            type: Object,
            default: () => ({ translateX: 0, translateY: 0 })
        }
    },
    computed: {
        imageSrc(){
            return new URL(`../../assets/img/icons/${this.img}`, import.meta.url).href;
        }
    }   
}
</script>


<style scoped>
.spreadLinks{
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>