<template>
  <div class="container">
    <div id="app">
      <SiteHeader />
      <div class="main-content">
        <RouterView />
      </div>
      <ScrollToTop />
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import ScrollToTop from './components/ScrollToTop.vue';

export default {
  components: {
    SiteHeader,
    ScrollToTop,
  },
  data() {
    return {
      characters: [], // Массив для хранения персонажей
    };
  },
  methods: {
    addCharacter(character) {
      this.characters.push(character); // Добавление нового персонажа в массив
    },
  },
};
</script>

<style src="./assets/styles.css"></style>
