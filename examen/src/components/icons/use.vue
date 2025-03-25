import { ref, onMounted } from 'vue';
import axios from 'axios';

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json';

export function useScholarships() {
  const data = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchScholarships = async () => {
    try {
      const response = await axios.get(API_URL);
      data.value = response.data;
    } catch (err) {
      error.value = 'Error cargando datos';
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchScholarships);

  return { data, loading, error };
}


git config --global user.email "alexmaco468@gmail.com"
  git config --global user.name "mcalex468"