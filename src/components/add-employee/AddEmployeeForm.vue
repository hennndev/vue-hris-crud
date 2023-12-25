

<script>
    import { reactive } from 'vue'
    export default {
        setup() {
            const state = reactive({
                formValues: {
                    name: '',
                    email: '',
                    phoneNumber: '',
                    role: '',
                    address: ''
                }
            })

            return {
                formValues: state.formValues
            }
        }
    }
</script>

<template>
    <form class="bg-white rounded-md p-5">
        <h1 class="text-[#333] text-lg font-semibold mb-5">Add New Employee</h1>
        <div class="input-control">
            <label for="name">Employee name</label>
            <input id="name" type="text" v-model.trim="formValues.name" placeholder="Input employee name here...">
        </div>
        <div class="input-control">
            <label for="email">Employee email</label>
            <input id="email" type="email" v-model.trim="formValues.email" placeholder="Input employee email here...">
        </div>
        <div class="input-control">
            <label for="">Employee phone number</label>
            <input role="phoneNumber" type="number" v-model.trim="formValues.number" placeholder="Input employee phone number here...">
        </div>
        <div class="input-control">
            <label for="role">Employee role</label>
            <select id="role" v-model.trim="formValues.role" placeholder="Input employee phone number here...">
                <option value="" selected>Choose employee role</option>
                <option value="frontend developer">Frontend Developer</option>
                <option value="backend developer">Backend Developer</option>
                <option value="fullstack developer">Fullstack Developer</option>
                <option value="mobile developer">Mobile Developer</option>
                <option value="UI/UX designer">UI/UX Designer</option>
                <option value="Devloper engineer">DevOps Engineer</option>
                <option value="Software engineer">Software Engineer</option>
                <option value="Cloud engineer">Cloud Engineer</option>
            </select>
        </div>
        <div class="input-control">
            <label for="address">Employee address</label>
            <textarea id="address" rows="10" v-model="formValues.address" placeholder="Input employee address here..."></textarea>
        </div>
        <div class="flexx space-x-3">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">Submit new employee</button>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">Clear</button>
        </div>
    </form>
</template>

