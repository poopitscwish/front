<template>
  <nav>
    <ul>
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">О нас</router-link></li>
      <li><router-link to="/schedule">Таблица</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>

<style scoped>
/* Ваши стили для навигационного бара #929ebc;           */
nav {
  background-color: #929ebc;
  padding: 10px;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;
}
a:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #07b5ff;
  transition: width 0.3s ease;
}

a:hover {
  color: #009fce;
}
a:hover:before {
  width: 100%;
}
</style>
