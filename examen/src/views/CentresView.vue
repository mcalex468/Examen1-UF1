<template>
    <div>
      <h1>Centros del Año - {{ $route.params.year }}</h1>
      <ul>
        <li v-for="centre in centres" :key="center">
          <router-link :to="`/beques/${$route.params.year}/${centre}`">{{ centre }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useScholarships } from '../composables/useBeques.js';
  import { useRoute } from 'vue-router';
  
  const { data } = useScholarships();
  const route = useRoute();
  
  const centres = computed(() =>
    [...new Set(data.value.filter(item => item.any_convocatoria == route.params.year).map(item => item.nom_entitat))].sort());
  </script>
  