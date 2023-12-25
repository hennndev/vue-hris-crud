

<script>
    import ViewHeader from '@/components/layout/ViewHeader.vue'
    import AddEmployeeForm from '@/components/add-employee/AddEmployeeForm.vue'

    export default {
        setup() {

        },
        components: {
            ViewHeader,
            AddEmployeeForm
        },
    }
</script>


<template>
    <section class="pt-3 flex-1 flex flex-col">
        <ViewHeader :title="'Add Employee'"/>
        <section class="flex-1 bg-gray-200 p-5">
            <AddEmployeeForm/>
        </section>
    </section>
</template>

