
<script>
    import ViewHeader from '@/components/layout/ViewHeader.vue'
    import EmployeeTable from '@/components/employee/EmployeeTable.vue'
    import { useEmployeeStore } from '@/store/employee'

    export default {
        setup() {
            const data = useEmployeeStore()
            return {
                employee: data.employee,
                editEmployee: data.editEmployee
            }
        },
        provide: {
            keyword: 'employee'
        },
        components: {
            ViewHeader,
            EmployeeTable
        }
    }
</script>


<template>
    <section class="pt-3 flex-1 flex flex-col">
        <ViewHeader :title="'Employee'"/>
        <section class="flex-1 bg-gray-200 p-5">
            <EmployeeTable :employee="employee"/>
        </section>
    </section>
</template>

