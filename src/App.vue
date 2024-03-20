<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";


</script>

<template>
  <div id="app">
    <header>
      <NavBar />

    </header>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* Ваши общие стили */
:root {
  --body-color: rgb(248, 247, 245);
}
body {
  background-color: var(--body-color);
  font-family: 'Arial', sans-serif;
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
}
.content {
  padding: 50px;
  min-width: 1000px;
  height: 95vh;
  background-color: white;
  margin-top: 100px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
