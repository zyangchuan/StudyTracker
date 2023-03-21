import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, taskname: "Learn HTML", link: 'https://www.w3schools.com/html/', completed: false },
      { id: 2, taskname: "Learn Javacript", link: 'https://www.w3schools.com/js/default.asp', completed: false },
      { id: 3, taskname: "Learn Vue.js", link: 'https://youtu.be/YrxBCBibVo0', completed: false },
    ]
  }),
  getters: {
    taskCount() {
      return this.tasks.length
    },
    lastTaskID() {
      if (this.taskCount > 0) {
        return this.tasks[this.taskCount - 1].id
      } else {
        return 0
      }
    }
  },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    toggleComplete(task) {
      task.completed = !task.completed
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== task.id
      })
    }
  }
})