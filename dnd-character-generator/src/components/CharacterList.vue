<template>
    <div class="left-container">
      <h3>Список персонажей</h3>
      <ul>
        <li v-for="(character, index) in characters" :key="index">
          <router-link :to="'/character/' + character.id">{{ character.name }}</router-link>
          <p>{{ character.class }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['characters']
  };
  </script>
  
  <style scoped>
  /* Стили для списка персонажей */
.left-container {
  width: 100%;
  height: calc(100vh - 150px); /* Высота списка на всю высоту экрана, с учетом хедера */
  position: relative; /* Для возможности смещения от верхней части экрана */
  top: 50px; /* Отступ от верха экрана (настраиваемый) */
  overflow-y: auto; /* Вертикальная прокрутка при переполнении */
  background-color: rgba(238, 235, 235, 0.35);
  padding: 20px;
  color: rgb(103, 74, 10);
  font-size: 20px;
  
}

  </style>
  