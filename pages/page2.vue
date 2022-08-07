<script setup lang="ts">
definePageMeta({
  middleware: ['named-test'],
});
</script>

<template>
  <div>
    <NuxtLink to="/"><button>go back</button></NuxtLink>
    <h1>Page 2</h1>
  </div>
</template>
