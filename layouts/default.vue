<template>
  <div class="max-w-[460px] h-full mx-auto">
    <div class="flex justify-center items-center">
      <ClipboardDocumentCheckIcon class="mr-2 w-12 h-12" />
      <h1 class="my-10 text-[40px] font-bold text-center">StudyTracker</h1>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid'

</script>