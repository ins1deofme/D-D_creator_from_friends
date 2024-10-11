<template>
    <div>
          <CharacterEditor :characters="characters" @add-character="addCharacter" />
          <UserRegister />
          <CharacterList :characters="characters" />
          <CharacterRules />
      </div>
  </template>
  
  <script>
  import CharacterEditor from '../components/CharacterEditor.vue';
  import UserRegister from '../components/UserRegister.vue';
  import CharacterList from '../components/CharacterList.vue';
  import CharacterRules from '../components/CharacterRules.vue';
  
  export default {
    components: {
      CharacterEditor,
      UserRegister,
      CharacterList,
      CharacterRules,
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
  
  
  