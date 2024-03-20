<template>
    <div>
        {{ serverData }}
    </div>
</template>

<script lang="ts">

export default {
  name: "Maine",
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

</style>