// store.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    userData: { email: '', password: '' } as { email: string, password: string } | null,
    isAdmin: false,
  }),
  actions: {
    login(user: { email: string, password: string }) {
      {
        this.isAuthenticated = true;
        this.isAdmin = true;
        this.userData = user;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.isAdmin = false;
      this.userData = null;
    },
  },
})
