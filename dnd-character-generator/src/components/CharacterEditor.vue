<template>
  <div class="input-container">
    <div id="editor" class="section">
      <h2>Редактор персонажа</h2>
      <form @submit.prevent="addCharacter">
        <input v-model="name" placeholder="Имя персонажа" required />
        <select v-model="selectedClass">
          <option disabled value="">Выберите класс</option>
          <option v-for="classItem in classes" :key="classItem">{{ classItem }}</option>
        </select>
        <button type="submit">Добавить персонажа</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        selectedClass: '',
        classes: ['Воин', 'Маг', 'Лучник'],
      };
    },
    methods: {
      addCharacter() {
        this.$emit('add-character', { name: this.name, class: this.selectedClass });
        this.name = '';
        this.selectedClass = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .section {
    background-color: #77581f77;
    color: #ffffff;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5%;
  }
  input, select, button {
    margin: 5px 0;
    padding: 10px;
    width: 100%;
  }
  button {
    background-color: #77581fd5;
    color: white;
    border: none;
  }
  </style>
  