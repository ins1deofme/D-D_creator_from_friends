<template>
  <div class="section">
    <h2>{{ character.name }}</h2>
    <p>Описание персонажа: {{ character.description }}</p>
    <router-link to="/">Назад к главному меню</router-link>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Удаляем этот код, так как он вызывает дублирование
    // character() {
    //   return this.$route.params.character;
    // },
  },
};
</script>

<style scoped>
.section {
  background-color: #77581f77;
  color: #ffffff;
  padding: 20px;
  margin: 20px 0;
}
</style>