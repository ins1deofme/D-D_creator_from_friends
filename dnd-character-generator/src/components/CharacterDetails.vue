<template>
  <div class="container">
    <p>Описание персонажа...</p>
    <h2>{{ characterName }}</h2> 
    <router-link to="/">Назад к главному меню</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    characterName() {
      return this.$route.params.name; // Получаем имя персонажа из параметров маршрута
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #77581f77;
  color: #ffffff;
  padding: 20px;
  margin: 20px 0;
}
</style>