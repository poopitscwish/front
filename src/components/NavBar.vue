<template>
  <nav>
    <ul class="menu">
      <li><router-link to="/">Главная</router-link></li>
      <li v-if="isAuthenticated"><router-link to="/generate">Генерация онтологий</router-link></li>
      <li v-if="isAuthenticated && !isAdmin"><router-link to="/requests">Формирование заявки</router-link></li>
      <!-- <li v-if="isAuthenticated && isAdmin"><router-link to="/admin">Список заявок</router-link></li> -->
      <li v-if="isAuthenticated"><router-link to="/download">Список готовых RDF</router-link></li>
    </ul>
    <li v-if="!isAuthenticated" class="logout-button"><router-link to="/auth">Войти</router-link></li>
    <li v-if="isAuthenticated" class="logout-button" @click="logout">Выйти</li>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store'


export default defineComponent({
  name: 'Navbar',
  setup() {
    const store = useUserStore(); // Перемещено внутрь setup()
    const isAuthenticated = computed(() => true);//store.isAuthenticated);
    const isAdmin = computed(() => store.isAdmin);

    const router = useRouter();

    function logout() {
      store.logout();
      router.push('/');
    }
    return {
      logout,
      isAuthenticated,
      isAdmin
    };
  },
});
</script>



<style scoped>
/* Ваши стили для навигационного бара #929ebc;           */
nav {
  background-color: #929ebc;
  padding: 20px 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
}

.menu {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;

}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;
}

a:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #0717ff;
  transition: width 0.3s ease;
}

a:hover {
  color: #0717ff;
}

a:hover:before {
  width: 100%;
}

.logout-button {
  right: 0;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  margin-right: 80px;
}

.logout-button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #0717ff;
  transition: width 0.3s ease;

}

.logout-button:hover {
  color: #0717ff;
}

.logout-button:hover:before {
  width: 100%;
}
</style>
