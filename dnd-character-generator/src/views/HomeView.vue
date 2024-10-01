<template>
  <div class="container">
    <!-- Левая колонка: Список персонажей -->
    <div class="left-container">
      <h3>Список персонажей</h3>
      <ul>
        <li v-for="(character, index) in characters" :key="index">
          <router-link :to="'/character/' + character.id">{{ character.name }}</router-link>
          <p>{{ character.class }}</p>
        </li>
      </ul>
    </div>

    <!-- Центральная колонка: Регистрация и редактор -->
    <div class="main-content">
      <!-- Регистрация -->
      <div class="registration-container">
        <h2>Регистрация</h2>
        <form @submit.prevent="registerUser" class="registration-form">
          <input type="text" v-model="username" placeholder="Введите имя пользователя" required />
          <input type="password" v-model="password" placeholder="Введите пароль" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>

      <!-- Редактор персонажа -->
      <div class="editor-container">
        <h2>Редактор персонажа</h2>
        <form @submit.prevent="createCharacter" class="editor-form">
          <input type="text" v-model="characterName" placeholder="Имя персонажа" required />
          <input type="text" v-model="characterClass" placeholder="Класс персонажа" required />
          <button type="submit">Создать персонажа</button>
        </form>
      </div>
    </div>

    <!-- Правая колонка: Правила генерации -->
    <div class="rules-container">
      <h2>Правила генерации персонажа</h2>
      <p>Здесь будут правила...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      characterName: '',
      characterClass: '',
      username: '',
      password: '',
      characters: [
        { id: 1, name: "Элронд", class: "Маг" },
        { id: 2, name: "Боромир", class: "Воин" },
        { id: 3, name: "Леголас", class: "Лучник" },
      ],
    };
  },
  methods: {
    createCharacter() {
      alert(`Персонаж ${this.characterName} создан!`);
    },
    registerUser() {
      alert(`Пользователь ${this.username} зарегистрирован!`);
    },
  },
};
</script>

<style scoped>
/* Контейнер для всех колонок */
.container {
  position: relative;
  top: 110px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

/* Левая колонка: Список персонажей */
.left-container {
  width: 25%;
  height: calc(100vh - 150px); /* Высота списка на всю высоту экрана, с учетом хедера */
  overflow-y: auto;
  background-color: rgba(44, 62, 80, 0.7);
  padding: 20px;
  color: white;
}

/* Центральная колонка: Регистрация и редактор */
.main-content {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Регистрация */
.registration-container {
  background-color: rgba(248, 249, 250, 0.35);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

/* Редактор персонажа */
.editor-container {
  background-color: rgba(248, 249, 250, 0.35);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

/* Правая колонка: Правила генерации */
.rules-container {
  width: 25%;
  height: calc(100vh - 150px); /* Высота контейнера на всю высоту экрана, с учетом хедера */
  background-color: rgba(248, 249, 250, 0.35);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow-y: auto;
}

/* Стили для формы */
.editor-form,
.registration-form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>