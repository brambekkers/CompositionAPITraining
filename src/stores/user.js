import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({ 
        firstName: null, 
        lastName: null 
    }),
    getters: {
      fullName(s) {
        if(!s.firstName && !s.lastName) return 'New User'
        return `${s.firstName} ${s.lastName}`
      }
    },
    actions: {
      reverseName(firstName, lastName) {
        this.lastName = firstName
        this.firstName = lastName
      },
    },
  })