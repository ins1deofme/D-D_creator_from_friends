<template>
    <header class="header">
      <h1>Генератор персонажей D&D</h1>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/rules">Правила</router-link>
        <router-link to="/register">Регистрация</router-link>
        <router-link to="/editor">Редактор персонажа</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderView"
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #2c3e50;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  