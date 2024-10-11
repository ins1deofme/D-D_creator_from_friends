<template>
  <div class="input-container">
    <div id="register" class="section">
      <h2>Регистрация</h2>
      <form @submit.prevent="validateAndRegister">
        <input v-model="username" placeholder="Логин" required />
        <input type="password" v-model="password" placeholder="Пароль" required />
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  props: {
    existingUsers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '', // Для хранения сообщений об ошибках
    };
  },
  methods: {
    validateAndRegister() {
      // Сбрасываем сообщение об ошибке
      this.errorMessage = '';

      // Валидация полей
      if (!this.username) {
        this.errorMessage = 'Логин обязателен.';
        return;
      }

      if (!this.password) {
        this.errorMessage = 'Пароль обязателен.';
        return;
      }

      if (this.existingUsers.includes(this.username)) {
        this.errorMessage = 'Этот логин уже занят. Пожалуйста, выберите другой.';
        return;
      }

      // Если все поля заполнены, выполняем регистрацию
      this.registerUser();
    },
    registerUser() {
      // Здесь можно добавить логику для регистрации пользователя
      // Например, передать данные через событие
      this.$emit('register-user', { username: this.username, password: this.password });
      this.username = '';
      this.password = '';
    }
  }
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
  input, button {
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
  </style>
  