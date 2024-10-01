<template>
    <header class="header">
      <h1>Генератор персонажей D&D</h1>
      <nav>
        <router-link to="/">Главная</router-link>          
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
    background-color:rgba(44, 62, 80, 0.35);;
    color: white;
    padding: 0px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  nav {
    display: flex;
    gap: 15px; /* Пробел между ссылками */
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
  