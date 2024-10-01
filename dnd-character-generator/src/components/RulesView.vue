<template>
    <div class="rules-container">
      <h2>Правила генерации персонажа</h2>
      <ul>
        <li v-for="(rule, index) in rules" :key="index">{{ rule }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "RulesView",
    data() {
      return {
        rules: [
          "1. Выберите расу персонажа.",
          "2. Выберите класс персонажа.",
          "3. Распределите очки характеристик (сила, ловкость и т.д.).",
          "4. Выберите навыки и умения.",
          "5. Определите исходное снаряжение.",
          "6. Придумайте предысторию персонажа.",
          "7. Заполните имя и детали персонажа."
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .rules-container {
    width: 350px;
    height: calc(100vh - 150px); /* Высота списка на всю высоту экрана, с учетом хедера */
  position: relative; /* Для возможности смещения от верхней части экрана */
  top: 50px; /* Отступ от верха экрана (настраиваемый) */
  overflow-y: auto; /* Вертикальная прокрутка при переполнении */
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 20px;
  }
  </style>
  