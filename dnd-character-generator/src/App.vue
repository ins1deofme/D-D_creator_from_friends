<template>
  <div id="app">
  <Header />
  <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'App',
  components: {
    Header, // Регистрация компонента
  },
};
</script>

<style>
@font-face {
    font-family: 'MyFont'; /* Имя шрифта, которое ты будешь использовать */
    src: url('@/assets/fonts/equestria_cyrillic.eot'); /* IE9 Compat Modes */
    src: url('@/assets/fonts/equestria_cyrillic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('@/assets/fonts/equestria_cyrillic.woff2') format('woff2'), /* Super Modern Browsers */
         url('@/assets/fonts/equestria_cyrillic.woff') format('woff'), /* Modern Browsers */
         url('@/assets/fonts/equestria_cyrillic.ttf') format('truetype'); /* Safari, Android, iOS */
    font-weight: normal; /* Укажите начертание шрифта */
    font-style: normal; /* Укажите стиль шрифта */
}

body {
    font-family: 'MyFont', sans-serif; /* Используем локальный шрифт */
    margin: 0; /* Убираем отступы по умолчанию */
    padding: 0; /* Убираем внутренние отступы по умолчанию */
    width: 100%; /* Устанавливаем ширину */
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
