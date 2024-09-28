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
    name: 'RegistrationView',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      registerUser() {
        // Логика регистрации пользователя
        alert(`Пользователь ${this.username} зарегистрирован!`);
      },
    },
  };
  </script>
  
  <style scoped>
.registration-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.registration-form {
  display: flex;
  flex-direction: column;
}

.registration-form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.registration-form button {
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
</style>