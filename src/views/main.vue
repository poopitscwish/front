<template>
  <div>
    <Navbar />
    <section>
      <h1>Добро пожаловать на наш сайт</h1>
      <p>Это платформа для генерации и управления онтологиями. Вы можете генерировать онтологии, формировать заявки и просматривать список заявок.</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>