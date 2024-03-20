<template>
  <form class="generation">
    <textarea>

    </textarea>
    <button class="download">
      Преобразовать и скачать
    </button>
  </form>

</template>

<script lang="ts">


export default {
  name: "Generation"
}
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
