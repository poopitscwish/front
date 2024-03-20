<template>
  <div class="article-text">{{ serverData }}</div>
</template>

<script lang="ts">

export default {
  name: "home",
  data() {
    return {
      serverData: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/home?key", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        } );
        if (response.ok) {
          const data = await response.text();
          this.serverData = data;
        } else {
          console.error("Ошибка при получении данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    },
  },
};
</script>

<style scoped>
.article-text {
  text-align: center;
  font-family: "Georgia", serif;
  font-size: 18px;
}
</style>
