import { createRouter, createWebHistory } from "vue-router"
import Employee from '@/views/Employee.vue'
import AddEmployee from '@/views/AddEmployee.vue'


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'dashboard',
            path: '/',
            component: Employee
        },
        {
            name: 'employee',
            path: '/employee',
            component: Employee
        },
        {
            name: 'add-employee',
            path: '/employee/add-employee',
            component: AddEmployee
        },
    ]
})