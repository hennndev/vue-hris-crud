
<script>
    import { reactive } from 'vue'
    export default {
        setup() {
            const state = reactive({
                showEmployeeDropdown: false
            })
            return {
                state
            }
        },
        methods: {
            handleShowDropdownEmployee() {
                console.log(this.state.showEmployeeDropdown)
                this.state.showEmployeeDropdown = !this.state.showEmployeeDropdown
            }
        }
    }
</script>


<template>
    <aside class="sticky top-0 h-screen flex flex-col w-[280px] p-5 bg-[#222]">
        <h1 class="text-gray-100 text-2xl font-bold text-center">VUE HRIS</h1>
        <div class="flex-1 mt-10 flex flex-col text-gray-100">
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2">
                <i class="pi pi-th-large text-xl mr-3"></i>
                <p class="text-lg font-semibold">Dashboard</p>
            </div>
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2">
                <i class="pi pi-user text-xl mr-3"></i>
                <p class="text-lg font-semibold">New Hires</p>
            </div>
            <div class="flex-between px-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2" @click="handleShowDropdownEmployee">
                <div class="flexx">
                    <i class="pi pi-users text-xl mr-3"></i>
                    <p class="text-lg font-semibold">Employee</p>
                </div>
                <i class="pi pi-angle-down text-xl"></i>
            </div>
            <ul v-show="state.showEmployeeDropdown" class="pl-14 py-2 space-y-2 text-gray-100">
                <li class="flexx text-[17px] font-semibold py-2 cursor-pointer hover:bg-[#333] px-3 rounded" >
                    <i class="pi pi-table text-xl mr-3"></i> 
                    <router-link to="/employee">
                        Employee List
                    </router-link>
                </li>
                <li class="flexx text-[17px] font-semibold py-2 cursor-pointer hover:bg-[#333] px-3 rounded" >
                    <i class="pi pi-user-plus text-xl mr-3"></i> 
                    <router-link to="/employee/add-employee">
                        Add Employee
                    </router-link>
                </li>
            </ul>
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2">
                <i class="pi pi-chart-bar text-xl mr-3"></i>
                <p class="text-lg font-semibold">Performance</p>
            </div>
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2">
                <i class="pi pi-book text-xl mr-3"></i>
                <p class="text-lg font-semibold">Tasks</p>
            </div>
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2">
                <i class="pi pi-cog text-xl mr-3"></i>
                <p class="text-lg font-semibold">Setting</p>
            </div>
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2">
                <i class="pi pi-book text-xl mr-3"></i>
                <p class="text-lg font-semibold">Contacts</p>
            </div>
            <div class="flexx pl-10 py-2 rounded cursor-pointer hover:bg-[#333] mb-2 text-red-400 mt-auto">
                <i class="pi pi-sign-out text-xl mr-3"></i>
                <p class="text-lg font-semibold">Logout</p>
            </div>
        </div>
    </aside>
</template>
