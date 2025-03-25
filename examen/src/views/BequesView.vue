<template>
    <div>
      <h1>Anys Beques</h1>
      <ul>
        <li v-for="any in anys" :key="year">
          <router-link :to="`/beques/${any}`">{{ any }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useBeques } from '../composables/useBeques.js';
  
  const { data } = useBeques();
  
  console.log("DADES")
  console.log(dades);

  const anys = computed(() =>
    [...new Set(data.value.map(item => item.any_convocatoria))].sort((a, b) => b - a)
  );
  </script>
  