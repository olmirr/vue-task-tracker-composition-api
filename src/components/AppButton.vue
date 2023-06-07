<script setup>
import { defineProps } from 'vue';
defineProps({'text':String, 'color':String});
</script>

<template>
  <button @click='$emit("btn-click")' class="btn" :style="{background: color}" >{{ text }}</button>
</template>

<style scoped>

</style>