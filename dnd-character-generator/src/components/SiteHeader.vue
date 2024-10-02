<template>
  <header class="header">
    <nav>
      <a @click.prevent="$scrollTo('#editor')">Редактор</a>
      <a @click.prevent="$scrollTo('#register')">Регистрация</a>
      <a @click.prevent="$scrollTo('#characters')">Готовые персонажи</a>
      <a @click.prevent="$scrollTo('#rules')">Правила генерации</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader', // Указываем новое имя компонента
  methods: {
    $scrollTo(elementId) {
      document.querySelector(elementId).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #77581f77;
  padding: 10px;
}
nav a {
  margin-right: 15px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
</style>
