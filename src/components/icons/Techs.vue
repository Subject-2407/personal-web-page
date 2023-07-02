<template>
    <li class="techCard flex flex-col items-center gap-2 justify-between">
        <div class="h-full flex items-center justify-center">
            <img :src="imageSrc" :style="{width: `${size}px`}">
        </div>
    </li>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        }
    },
    computed: {
        imageSrc(){
            return new URL(`../../assets/img/skills/${this.img}`, import.meta.url).href;
        }
    } 
}
</script>