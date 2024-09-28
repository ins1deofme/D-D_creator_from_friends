<template>
    <div class="editor-container">
      <h2>Редактор персонажа</h2>
      <form @submit.prevent="createCharacter" class="editor-form">
        <input type="text" v-model="characterName" placeholder="Имя персонажа" required />
        <input type="text" v-model="characterClass" placeholder="Класс персонажа" required />
        <button type="submit">Создать персонажа</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        characterName: '',
        characterClass: '',
      };
    },
    methods: {
      createCharacter() {
        // Логика создания персонажа
        alert(`Персонаж ${this.characterName} создан!`);
      },
    },
  };
  </script>
  
<style scoped>

.editor-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-top: 200px;
}

.editor-form {
  display: flex;
  flex-direction: column;
}

.editor-form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.editor-form button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.editor-form button:hover {
  background-color: #218838;
}
</style>
  