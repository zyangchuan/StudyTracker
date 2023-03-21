<template>
  <div class="p-2 bg-emerald-50 pill h-9 flex items-center">
    <MagnifyingGlassIcon class="w-6 h-6 text-emerald-500" />
    <slot />
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

