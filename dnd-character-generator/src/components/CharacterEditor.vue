<template>
  <div class="input-container">
    <div id="editor" class="section">
      <h2>Редактор персонажа</h2>
      <form @submit.prevent="addCharacter">
        <input 
          v-model="name" 
          placeholder="Имя персонажа" 
          required 
        />
        <select v-model="selectedClass" required>
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
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '', // Имя персонажа
      selectedClass: '', // Выбранный класс персонажа
      classes: ['Воин', 'Маг', 'Лучник'], // Доступные классы
    };
  },
  methods: {
    addCharacter() {
      // Проверяем, что имя персонажа и класс выбраны
      if (this.name && this.selectedClass) {
        const character = {
          name: this.name,
          class: this.selectedClass,
        };
        
        // Вызываем событие для передачи данных в родительский компонент
        this.$emit('add-character', character);

        // Очищаем поля после добавления
        this.name = '';
        this.selectedClass = '';
      } else {
        alert('Пожалуйста, заполните все поля.'); // Уведомление об ошибке
      }
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
  transition: transform 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #8f6b2ad5; /* Изменяем цвет кнопки при наведении */
  transform: scale(1.05); /* Увеличиваем кнопку на 5% */
}

button:active {
  background-color: #603e17d5; /* Более темный цвет при нажатии */
  transform: scale(0.95); /* Уменьшаем кнопку при нажатии */
}
.error-message {
  color: red;
  margin: 10px 0;
}
</style>