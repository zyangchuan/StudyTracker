<template>
  <div class="mb-4 w-full h-15 task flex items-center justify-between" :class="{ 'animate-disappear': deleted }">
    <p class="text-lg font-weight-bold text-cyan-900">{{ task.taskname }}</p>
    <div class="flex items-center">
      <ToggleComplete :task='task' />
      <TrashIcon class="w-6 h-6 fill-cyan-900 hover:fill-rose-500 transition ease-out duration-150 cursor-pointer" @click="deleteTask()"/>
    </div>
  </div>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid"
const { task } = defineProps(['task'])

import { useTaskStore } from '../stores/TaskStore'
import { storeToRefs } from 'pinia'
const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)

const deleted = ref(false)
const deleteTask = () => {
  deleted.value = true
  setTimeout(() => taskStore.deleteTask(task), 300)
}
</script>