<template>
  <div>
    <form class="generation" @submit.prevent="handleSubmit">
      <textarea v-model="text"></textarea>
      <button type="submit" class="download">
        Преобразовать и скачать
      </button>
    </form>
  </div>
  <div>
    <RdfEditor :triples="rdfTriples" @update:triples="updateTriples" />

  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RdfEditor from '../components/RDFEditor.vue';
export default defineComponent({
  components: {
    RdfEditor
  },
  name: "Generation",
  setup() {
    const showRdfEditor = ref(false);
    const rdfTriples = ref([]);
    const text = ref('');
    function getCookie(name: string) {
      let cookieValue = "";
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
    const handleSubmit = async () => {
      try {
        const csrftoken = getCookie('csrftoken')

        const response = await fetch('https://shenyafoma20032.fvds.ru/api/upload/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrftoken,  // Добавляем CSRF токен в заголовки запроса
          },
          body: `text=${encodeURIComponent(text.value)}`
        });

        if (!response.ok) {
          throw new Error('Ошибка при получении файла с сервера');
        }

        const data = await response.json();
        rdfTriples.value = data;
        showRdfEditor.value = true;
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    return {
      text,
      handleSubmit,
      showRdfEditor,
      rdfTriples
    };
  },
  methods: {
    updateTriples(event:any) {
        this.rdfTriples = event;
    }
}
});
</script>
<style scoped>
textarea {
  min-width: 1000px;
  max-width: 1000px;
  min-height: 600px;
}

.generation {
  display: flex;
  flex-direction: column;
}

.download {
  font-size: large;
  margin-top: 20px;
  margin-left: auto;
}
</style>
