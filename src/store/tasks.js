import { defineStore } from "pinia"


export const useTasksStore = defineStore('tasks', {
    state: () => {
        return {
            tasks: []
        }
    },
    actions: {
        addTask() {

        },
        editTasl() {

        },
        deleteTask() {
            
        }
    }
})