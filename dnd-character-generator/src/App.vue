<template>
  <div class="container">
  <div id="app">
    <SiteHeader />
    <div class="main-content">
      <CharacterEditor @add-character="addCharacter" />
      <UserRegister />
      <CharacterList :characters="characters" />
      <CharacterRules />
    </div>
    <ScrollToTop /> <!-- Добавляем компонент кнопки прокрутки -->
  </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import CharacterEditor from './components/CharacterEditor.vue';
import UserRegister from './components/UserRegister.vue';
import CharacterList from './components/CharacterList.vue';
import CharacterRules from './components/CharacterRules.vue';
import ScrollToTop from './components/ScrollToTop.vue'; // Импортируем кнопку прокрутки

export default {
  components: {
    SiteHeader,
    CharacterEditor,
    UserRegister,
    CharacterList,
    CharacterRules,
    ScrollToTop, // Добавляем компонент кнопки
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    addCharacter(character) {
      this.characters.push(character);
    },
  },
};
</script>

<style src="./assets/styles.css"></style>
