<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";


</script>

<template>
  <header>
    <NavBar />
    <router-view></router-view>
  </header>

  <body>

  </body>
</template>

<style>
/* Ваши общие стили */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  box-sizing: border-box;
}
</style>
