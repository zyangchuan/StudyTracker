<template>
  <div class="cursor-pointer" @click="taskStore.toggleComplete(task)">
    <CheckCircleIcon class="mr-2 w-7 h-7 stroke-2 stroke-cyan-800 hover:stroke-emerald-500 transition ease-in-out duration-150" v-if="!task.completed" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-7 h-7 scale-110 fill-emerald-500 drop-shadow-sm animate-scale-up-down" v-if="task.completed">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/outline"
defineProps(['task'])

import { useTaskStore } from '../stores/TaskStore'
const taskStore = useTaskStore()
</script>