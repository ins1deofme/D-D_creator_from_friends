<template>
    <div class="section">
      <h2>{{ characterName }}</h2>
      <p>Описание персонажа...</p>
      <router-link to="/">Назад к главному меню</router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      characterName() {
        return this.$route.params.name;
      },
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
  