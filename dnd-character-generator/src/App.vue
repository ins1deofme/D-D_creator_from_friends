<template>
  <div id="app">
    <SiteHeader />
    <div class="main-content">
      <CharacterEditor @add-character="addCharacter" />
      <UserRegister />
      <CharacterList :characters="characters" @view-character="viewCharacter" />
      <CharacterRules />
      <router-view />
    </div>
    <ScrollToTop />
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
    viewCharacter(characterName) {
    const character = this.characters.find(c => c.name === characterName);
    this.$router.push({ name: 'character-details', params: { character } });
  },
  },
};
</script>

<style src="./assets/styles.css"></style>