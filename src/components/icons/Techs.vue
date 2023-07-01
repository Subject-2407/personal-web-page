<script setup>
defineProps({
    img: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <li class="techCard flex flex-col items-center gap-2 justify-between">
        <div class="h-full flex items-center justify-center">
            <img :src="`src/assets/img/skills/${img}`" :style="{width: `${size}px`}">
        </div>
    </li>
</template>