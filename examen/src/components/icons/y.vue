<template>
  <div>
    <h1>📅 Años de Becas</h1>
    <ul>
      <li v-for="year in years" :key="year">
        <router-link :to="`/beques/${year}`">{{ year }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useScholarships } from '@/composables/useScholarships';

const { data, loading, error } = useScholarships();

const years = computed(() =>
  [...new Set(data.value.map(item => item.any_convocatoria))].sort((a, b) => b - a)
);
</script>
