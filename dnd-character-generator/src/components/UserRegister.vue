<template>
  <div class="input-container">
    <div id="register" class="section">
      <h2>Регистрация</h2>
      <form>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </div>
  </template>

<script>
export default {
  name: 'UserRegister', // Обновленное имя компонента
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
  }
  </style>
  