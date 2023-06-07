<script setup>
import AppTask from "@/components/AppTask.vue";
import { defineProps, defineEmits } from 'vue';
defineProps({'tasks': Array});
defineEmits(['toggle-reminder', 'delete-task']);
</script>

<template>
  <div v-for="task in tasks" :key="task.id">
    <AppTask :task="task" @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)"></AppTask>
  </div>
</template>

<style scoped>

</style>