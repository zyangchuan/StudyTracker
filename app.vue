<template>
  <div>
    <NuxtLayout>
      <div class="w-full px-5 flex flex-col items-center">
        <div class="mb-8 flex grid grid-cols-12 gap-4">
          <SearchBar class="col-span-7">
            <input type="field" placeholder="Search Task" v-model="search" class="w-full mx-2 bg-emerald-50 placeholder:text-emerald-500 focus:outline-none">
          </SearchBar>
          <AddTaskFormToggleButton class="col-span-5" @click="showTaskForm = true" />
        </div>
        <div class="w-full" v-for="task in result" :key="task.id">
          <Task :task="task"/>
        </div>
      </div>
      <AddTaskForm class="fixed -bottom-[450px] transition duration-300 ease-out" :class="{ showTaskForm: showTaskForm }" @toggleTaskForm="showTaskForm = !showTaskForm"/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)

const search = ref('')
const result = computed(() => {
  return tasks.value.filter(task => task.taskname.toLowerCase().includes(search.value.toLowerCase()))
})

const showTaskForm = ref(false)
</script>
