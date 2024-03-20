<template>
  <div class="auth-container">
    <h1>Вход в систему</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Электронная почта:</label>
        <input id="email" v-model="credentials.email" type="email" required>
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input id="password" v-model="credentials.password" type="password" required>
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '@/store';
import { ref } from 'vue';

export default {
  name: 'Auth',
  setup() {
    const credentials = ref({
      email: '',
      password: ''
    });
    const errorMessage = ref('');
    const store = useUserStore(); // Перемещено внутрь setup()
    function login() {
      if (credentials.value.email && credentials.value.password) {
        // Здесь должна быть логика отправки данных для авторизации
        console.log('Попытка входа с', credentials.value);

        // Пример проверки (на самом деле должен быть запрос к серверу)
        if (credentials.value.email === 'user@example.com' && credentials.value.password === 'password') {
          // Логика в случае успешной авторизации
          store.login(credentials.value);
          errorMessage.value = 'Успешный вход';
          // перенаправление на защищенную страницу, например router.push('/dashboard');
        } else {
          // Если данные не верны, показываем сообщение об ошибке
          errorMessage.value = 'Неверный логин или пароль';
        }
      } else {
        errorMessage.value = 'Пожалуйста, введите данные';
      }
    }

    return {
      credentials,
      errorMessage,
      login
    };
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 300px;
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(253, 253, 253)
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  margin: auto, auto;
  width: 100%;
  padding: 10px;
  background-color: #0057ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #003cbf;
}

p {
  color: red;
}
</style>