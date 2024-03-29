<template>
  <div>
    <Navbar />
    <section>
      <h1>Добро пожаловать на наш сайт</h1>
      <p>Это платформа для генерации и управления онтологиями. На этом сайте вы можете:</p>
        <p>Генерировать онтологии,</p>
        <p>Формировать заявки для использования языковой модели</p>
        <p>Просматривать список собственных заявок</p>
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