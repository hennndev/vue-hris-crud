import { defineStore } from "pinia"


export const useEmployeeStore = defineStore('employee', {
    state: () => {
        return {
            employee: JSON.parse(localStorage.getItem('employee')) || []
        }
    },
    actions: {
        addEmployee(employee){
            const checkExistEmail = this.employee.find(emp => emp.email === employee.email)
            if(checkExistEmail) {
                throw new Error('This employee has been added')
            } else {
                this.employee = [...this.employee, employee]
                localStorage.setItem('employee', JSON.stringify(this.employee))
            }
        },
        editEmployee(employee){
            this.employee = this.employee.map(emp => {
                if(emp.id === employee.id) {
                    return {
                        ...emp, 
                        ...employee
                    }
                } else {
                    return emp
                }
            })
            localStorage.setItem('employee', JSON.stringify(this.employee))
        },
        deleteEmployee(id) {
            const updatedEmployee = this.employee.filter(emp => emp.id !== id)
            this.employee = updatedEmployee
            localStorage.setItem('employee', JSON.stringify(this.employee))
        }
    }
})