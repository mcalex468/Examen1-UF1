<template>
  <div>
    <h1>📄 Detalles de Becas - {{ $route.params.center }}</h1>
    <ul>
      <li v-for="item in scholarships" :key="item.codi_expedient">
        {{ item.titol_projecte }} - {{ item.import_total }}€
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

const scholarships = computed(() =>
  data.value.filter(
    item => item.any_convocatoria == route.params.year && item.nom_entitat == route.params.center
  )
);
</script>
