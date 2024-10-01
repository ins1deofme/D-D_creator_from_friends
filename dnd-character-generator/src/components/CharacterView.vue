<!-- src/views/CharacterView.vue -->
<template>
    <div class="character">
      <h2>{{ character.name }}</h2>
      <p>Класс: {{ character.class }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "CharacterView",
    data() {
      return {
        characters: [
          { id: 1, name: "Элронд", class: "Маг" },
          { id: 2, name: "Боромир", class: "Воин" },
          { id: 3, name: "Леголас", class: "Лучник" },
        ],
        character: {},
      };
    },
    created() {
      const characterId = parseInt(this.$route.params.id, 10);
      this.character = this.characters.find(c => c.id === characterId);
    },
  };
  </script>
  
  <style scoped>
  .character {
    position: relative;
    top: 110px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
  </style>
  