<template>
  <div class="container">
    <div class="left-container">
      <h3>Список персонажей</h3>
      <ul>
        <li v-for="(character, index) in characters" :key="index">
          <router-link :to="'/character/' + character.id">{{ character.name }}</router-link>
          <p>{{ character.class }}</p>
        </li>
      </ul>
    </div>

    <div class="main-content">
      <div class="editor-container">
        <h2>Редактор персонажа</h2>
        <form @submit.prevent="createCharacter" class="editor-form">
          <input type="text" v-model="characterName" placeholder="Имя персонажа" required />
          <input type="text" v-model="characterClass" placeholder="Класс персонажа" required />
          <button type="submit">Создать персонажа</button>
        </form>
      </div>

      <div class="registration-container">
        <h2>Регистрация</h2>
        <form @submit.prevent="registerUser" class="registration-form">
          <input type="text" v-model="username" placeholder="Введите имя пользователя" required />
          <input type="password" v-model="password" placeholder="Введите пароль" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>

      <div class="rules-container">
        <h2>Правила генерации персонажа</h2>
        <p>блаблаблаблаблаблаблаблаблаблабла...</p>
      </div>
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

.container {
  position: relative;
  top: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.left-container {
  top: 220px;
  width: 25%;
  
  overflow-y: auto;
  background-color: rgba(44, 62, 80, 0.7);
  padding: 20px;
  color: white;
}

.left-container ul {
  list-style: none;
  padding: 0;
}

.left-container li {
  margin-bottom: 15px;
}

.left-container li p {
  font-size: 12px;
  margin: 0;
  color: #ccc;
}

.left-container a {
  color: #f39c12;
  text-decoration: none;
}

.left-container a:hover {
  text-decoration: underline;
}

.main-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.editor-container,
.registration-container,
.rules-container {
  background-color: rgba(248, 249, 250, 0.35);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.editor-container {
  flex-grow: 1;
}

.registration-container {
  flex-grow: 1;
}

.rules-container {
  flex-grow: 2;
  max-height: 300px;
  overflow-y: auto;
}

.editor-form,
.registration-form {
  display: flex;
  flex-direction: column;
}

input {
  font-family: 'MyFont', sans-serif;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  font-family: 'MyFont', sans-serif;
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
