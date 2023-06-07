<script setup>
import AppTasks from "@/components/AppTasks.vue";
import AddTask  from "@/components/AddTask.vue";
import {onMounted, defineProps, reactive} from 'vue';
defineProps({showAddTask: Boolean});
let tasks = reactive([]);
onMounted(async () => {
  tasks.push(...await fetchTasks());
});

const deleteTask = async (id) => {
  if (confirm('Are you sure?')) {
    const res = await fetch(`api/tasks/${id}`, {
      method: 'DELETE',
    })
    // res.status == 200 ? (tasks = tasks.filter(task => task.id !== id))
    //     : alert('Error deleting task');
    if (res.status === 200) {
      const index = tasks.findIndex(task => task.id === id);
      tasks.splice(index, 1);
    } else {
      alert('Error deleting task');
    }
  }
}
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id);
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
  const res = await fetch(`api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const data = await res.json();
  // tasks = tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task);
  const task = tasks.find(task => task.id === id);
  task.reminder = data.reminder;
}


const addTask = async (task) => {
  const res = await fetch('api/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task)

  });
  const data = await res.json();
  // tasks = [...tasks, data];
  tasks.push(data);
}
const fetchTasks = async () => {
  const res = await fetch('api/tasks');
  const data = await res.json();
  return data;
}
const fetchTask = async (id) => {
  const res = await fetch(`api/tasks/${id}`);
  const data = await res.json();
  return data;
}
</script>

<template>
  <AddTask @add-task="addTask" v-show="showAddTask" />
  <AppTasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder" />
</template>

<style scoped>

</style>