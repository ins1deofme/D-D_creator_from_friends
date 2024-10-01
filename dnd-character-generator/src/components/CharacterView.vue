<template>
  <div class="character" v-if="character">
    <h2>{{ character.name }}</h2>
    <p>Класс: {{ character.class }}</p>
  </div>
  <div v-else>
    <p>Персонаж не найден.</p>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>

<style scoped>
.character {
  font-family: 'MyFont', sans-serif;
  position: relative;
  top: 110px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}
</style>
