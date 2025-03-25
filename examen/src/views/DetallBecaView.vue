<template>
  <div>
    <h1>Detalles de Becas - {{ $route.params.center }}</h1>
    <ul>
      <li v-for="item in centres" :key="item.codi_expedient">
        {{ item.titol_projecte }} - {{ item.import_total }}€
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useBeques } from '../composables/useBeques.js';
import { useRoute } from 'vue-router';

const { data } = useBeques();
const route = useRoute();

const centres = computed(() =>
  data.value.filter(item => item.any_convocatoria == route.params.year && item.nom_entitat == route.params.center)
);
</script>
