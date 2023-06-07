<script setup>
import AppButton from "@/components/AppButton.vue";
import { defineProps, computed, } from 'vue';
defineProps({'title':String, 'showAddTask':Boolean});
import { useRoute } from 'vue-router'
const route = useRoute();
const homePage = computed(() => {
  if (route.path === '/') {
    return true;
  } else {
    return false;
  }
})
</script>

<template>
  <header>
    <h1>{{title}}</h1>
    <AppButton
        v-show="homePage"
        @btn-click='$emit("toggle-add-task")'
        :text="showAddTask ? 'Close' : 'Add Task'"
        :color="showAddTask ? 'red' : 'green'"/>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

}
</style>