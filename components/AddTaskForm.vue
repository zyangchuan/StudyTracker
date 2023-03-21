<template>
  <div class="w-screen max-w-[460px] h-[450px] p-3 rounded-t-3xl bg-white drop-shadow-[0_-0.1px_5px_rgba(0,0,0,0.25)]">
    <div class="flex justify-end">
      <XCircleIcon class="w-9 h-9 fill-black cursor-pointer" @click="toggleTaskForm"/>
    </div>
    <h1 class="text-3xl text-center font-bold">Add a new task</h1>
    <div class="p-8">
      <div class="mb-6">
        <p class="mb-2 text-2xl font-bold">Task title</p>
        <div class="px-3 w-full h-12 rounded-xl bg-emerald-100 flex items-center">
          <input type="text" class="w-full text-xl bg-emerald-100 focus:outline-none" v-model="taskTitle">
        </div>
      </div>
      <div>
        <p class="mb-2 text-2xl font-bold">Resource link</p>
        <div class="px-3 w-full h-12 rounded-xl bg-emerald-100 flex items-center">
          <input type="text" class="w-full text-xl bg-emerald-100 focus:outline-none" v-model="resourceLink">
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <div class="w-[110px] h-[40px] rounded-xl bg-emerald-200 hover:bg-emerald-300 active:bg-emerald-400 transition duration-150 ease-in-out cursor-pointer flex justify-center items-center" @click="addTask">
          <p class="text-lg text-emerald-900 font-medium">Add Task</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/24/solid'
import { useTaskStore } from '../stores/TaskStore'

const emit = defineEmits(['toggleTaskForm'])
const toggleTaskForm = () => {
  emit('toggleTaskForm')
}

const taskStore = useTaskStore()

const taskTitle = ref('')
const resourceLink = ref('')

const addTask = () => {
  const id = taskStore.lastTaskID + 1
  taskStore.addTask({ id: id, taskname: taskTitle.value, link: resourceLink.value, completed: false })
  taskTitle.value = ''
  resourceLink.value = ''
  emit('toggleTaskForm')
}
</script>