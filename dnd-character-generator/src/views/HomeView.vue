<template>
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
      <p>блаблаблаблаблаблаблаблаблаблабла
        блаблаблаблаблаблаблаблаблаблаблаб
        лаблаблаблаблаблаблаблаблаблаблабл
        аблаблаблаблаблаблаблаблаблаблаблаб
        лаблаблаблаблаблаблаблаблаблаблабла
        блаблаблаблаблаблаблаблаблаблаблабл
        аблаблаблаблаблаблаблаблаблаблаблабл
        аблаблаблаблаблаблаблаблаблаблаблаб
        лаблаблаблаблаблаблаблаблаблаблабла
        блаблаблаблаблаблаблаблаблаблаблабл
        аблаблаблаблаблаблаблаблаблаблаблаб
        лаблаблаблаблаблаблаблаблаблаблабла
        блаблаблаблаблаблаблаблаблаблаблабл
        аблаблаблаблаблаблаблаблаблаблаблаб
        лаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблабла</p>
      <!-- Добавь детали правил -->
    </div>
</template>

<script>


export default {
   Home: "HomeView",

    data_character() {
      return {
        characterName: '',
        characterClass: '',
      };
    },
    methods_character: {
      createCharacter() {
        // Логика создания персонажа
        alert(`Персонаж ${this.characterName} создан!`);
      },
    },
    registerUser: 'RegistrationView',
    data_user() {
      return {
        username: '',
        password: '',
      };
    },
    methods_user: {
      registerUser() {
        // Логика регистрации пользователя
        alert(`Пользователь ${this.username} зарегистрирован!`);
      },
    },
    relus: 'RulesView',
  };
  </script>
  
<style scoped>

.editor-container {
  position: absolute;
  top: 150px;
  right: 450px;
  min-width: 40%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color:rgba(248, 249, 250, 0.35);;
}

.editor-form {
  display: flex;
  flex-direction: column;
}

.editor-form input {
  font-family: 'MyFont', sans-serif;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.editor-form button {
  font-family: 'MyFont', sans-serif;
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
.registration-container {
  font-family: 'MyFont', sans-serif;
  position: absolute;
  top: 150px; /* Смещение сверху */
  right:5%; /* Смещение справа */
  min-width: 20%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color:rgba(248, 249, 250, 0.35);
}

.registration-form {
  font-family: 'MyFont', sans-serif;
  display: flex;
  flex-direction: column;
}

.registration-form input {
  font-family: 'MyFont', sans-serif;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.registration-form button {
  font-family: 'MyFont', sans-serif;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #0056b3;
}

.rules-container {
  position: absolute;
  word-break: break-all;
  right: 450px;
  width: 40%;
  min-height: 200px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(248, 249, 250, 0.35);
  margin-top: 400px;
  overflow: auto;
}
.rules-container h2 {
  color: #333;
}
</style>
  

  