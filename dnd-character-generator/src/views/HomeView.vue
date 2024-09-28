<template>
  <div>
      <section class="hero">
      <h2>Добро пожаловать в Генератор персонажей D&D!</h2>
      <router-link to="/editor" class="btn">Создать персонажа</router-link>
    </section>
  </div>
</template>

<script>


export default {
  name: "HomeView",
  
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 100px;
  /*background: url('/assets/hero-bg.jpg') no-repeat center center;
  background-size: cover;*/
}
h2 {
  color: black;
  font-size: 3em;
}
.btn {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background-color: #2980b9;
}
</style>
