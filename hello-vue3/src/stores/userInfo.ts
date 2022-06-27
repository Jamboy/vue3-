import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    name: 'user1',
    age: 14,
  }),
  getters: {
    userName: (state) => `My name is ${state.name}`,
  },
  actions: {
    updateUserInfoName(newName: string): string {
      this.name = newName
      return 'Update done.'
    },

    async updateUserInfoAge(newAge: number): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.age = newAge
          resolve('Async done.')
        }, 2000)
      })
    },
  },
})
