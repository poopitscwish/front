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
import axios, { AxiosError } from 'axios';
import router from '@/route';

export default {
  name: 'Auth',
  setup() {
    const credentials = ref({
      email: '',
      password: ''
    });
    const errorMessage = ref('');
    const store = useUserStore(); // Перемещено внутрь setup()
    function getCSRFToken() {
      return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1];
    }
    async function login() {
      if (credentials.value.email && credentials.value.password) {
        console.log('Попытка входа с', credentials.value);

        try {

          // Отправляем запрос на серверную конечную точку для авторизации
          const response = await axios.post('https://shenyafoma20032.fvds.ru/api/login/', credentials.value, {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': getCSRFToken(),
            }
          });
          store.login(response.data.user); // предполагается, что сервер возвращает данные пользователя или токен
          router.push('/');
          console.log('Успешный вход:', response.data.user);
          errorMessage.value = '';

        } catch (error) {
          const axiosError = error as AxiosError;  // Утверждение типа
          if (axiosError.response) {
            const status = axiosError.response.status;
            if (status === 400 || status === 401) {
              // Если сервер вернул ошибку 400 или 401, значит данные не верны
              errorMessage.value = 'Неверный логин или пароль';
            } else {
              // Обработка других ошибок
              errorMessage.value = 'Произошла ошибка при попытке входа';
            }
          } else {
            // Обработка ошибок, не связанных с HTTP ответом
            errorMessage.value = 'Произошла ошибка при попытке входа';
          }
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