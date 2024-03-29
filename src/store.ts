// store.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    userData: { email: '', role_id: 2, name: '' } as { email: string, role_id: number, name: string } | null,
    isAdmin: false,
    csrfToken: '',
  }),
  actions: {
    login(user: { email: string, role_id: number, name: string }) {
      {

        this.isAuthenticated = true;
        this.isAdmin = false;

        if (user.role_id == 1) {
          this.isAdmin = true;
        }
        this.userData = user;
        this.updateCsrfToken();
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.isAdmin = false;
      this.userData = null;
      this.csrfToken = '';
    },
    updateCsrfToken() {
      // Функция для извлечения CSRF токена из cookie
      const getCookie = (name: string) => {
        let cookieValue = "";
        if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      }
      this.csrfToken = getCookie('csrftoken'); // Обновляем состояние CSRF токена
    },
    },
  })
