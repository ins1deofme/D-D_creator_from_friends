<template>
  <div class="container">
    <div id="app">
      <SiteHeader />
      <div class="main-content">
        <!-- Передаем пропс characters в CharacterEditor -->
        <CharacterEditor :characters="characters" @add-character="addCharacter" />
        <UserRegister />
        <CharacterList :characters="characters" />
        <CharacterRules />
      </div>
      <ScrollToTop />
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import CharacterEditor from './components/CharacterEditor.vue';
import UserRegister from './components/UserRegister.vue';
import CharacterList from './components/CharacterList.vue';
import CharacterRules from './components/CharacterRules.vue';
import ScrollToTop from './components/ScrollToTop.vue';

export default {
  components: {
    SiteHeader,
    CharacterEditor,
    UserRegister,
    CharacterList,
    CharacterRules,
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
