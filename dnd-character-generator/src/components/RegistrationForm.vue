<template>
    <div class="registration-container">
      <h2>Регистрация</h2>
      <form @submit.prevent="registerUser" class="registration-form">
        <input type="text" v-model="username" placeholder="Введите имя пользователя" required />
        <input type="password" v-model="password" placeholder="Введите пароль" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      registerUser() {
        this.$emit('register-user', { username: this.username, password: this.password });
        this.username = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-container {
    margin-top: 100px; /* Позиция контейнера от верхней части экрана */
  background-color: rgba(248, 249, 250, 0.35);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  }
  .registration-form {
  display: flex;
  flex-direction: column; /* Расположение полей ввода в столбик */
  gap: 10px; /* Промежуток между полями */
}
  input, button {
    font-family: 'MyFont', sans-serif;
 }
 button{
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
  