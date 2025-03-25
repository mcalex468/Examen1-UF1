<template>
  <div>
    <h1>🏢 Centros del Año {{ $route.params.year }}</h1>
    <ul>
      <li v-for="center in centers" :key="center">
        <router-link :to="`/beques/${$route.params.year}/${center}`">{{ center }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useScholarships } from '@/composables/useScholarships';
import { useRoute } from 'vue-router';

const { data } = useScholarships();
const route = useRoute();

const centers = computed(() =>
  [...new Set(data.value
    .filter(item => item.any_convocatoria == route.params.year)
    .map(item => item.nom_entitat))].sort()
);
</script>
