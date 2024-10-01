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
        characterClass: ''
      };
    },
    methods: {
      createCharacter() {
        this.$emit('create-character', { name: this.characterName, class: this.characterClass });
        this.characterName = '';
        this.characterClass = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Стили для редактора персонажа */
.editor-container {
  margin-top: 0%; /* Позиция контейнера от верхней части экрана */
  background-color: rgba(248, 249, 250, 0.35);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.editor-form {
  display: flex;
  flex-direction: column; /* Расположение полей ввода в столбик */
  gap: 10px; /* Промежуток между полями */
}

input, button {
  font-family: 'MyFont', sans-serif;
}

button {
  background-color: rgb(198, 152, 14);
  padding: 10px; /* Паддинг для кнопки */
  border: none; /* Убираем границу */
  border-radius: 4px; /* Округление углов */
  cursor: pointer; /* Указатель для интерактивности */
}

button:hover {
  background-color: rgb(178, 135, 12); /* Цвет кнопки при наведении */
}

  </style>
  