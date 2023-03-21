<template>
  <div class="p-2 bg-emerald-200 hover:bg-emerald-300 active:bg-emerald-400 transtion duration-150 ease-in-out pill h-9 flex items-center cursor-pointer">
    <PlusCircleIcon class="w-5 h-5 mr-1 text-emerald-900" />
    <p class="text-sm font-weight-medium text-emerald-900">Add a new task</p>
  </div>
</template>

<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/solid'
</script>