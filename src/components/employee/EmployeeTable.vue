
<script>
    export default {
        props: ['employee', 'editEmployee'],
        setup() {
            
        }
    }
</script>

<template>
    <div class="relative">
        <table class="w-full overflow-hidden shadow-md text-sm text-left rtl:text-right text-gray-500 rounded-lg">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Phone Number
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Detail
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Aksi
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="emp in employee" :key="emp.id">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Hendra Adriyanto
                        </th>
                        <td class="px-6 py-4">
                            hendrapermanadev@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            62895377111674
                        </td>
                        <td class="px-6 py-4">
                            Frontend Developer
                        </td>
                        <td class="px-6 py-4">
                            Detail
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
                        </td>
                    </tr>
                </template>

                <tr v-show="employee.length < 1" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            empty
                        </th>
                        <td class="px-6 py-4">
                            empty
                        </td>
                        <td class="px-6 py-4">
                            empty
                        </td>
                        <td class="px-6 py-4">
                            empty
                        </td>
                        <td class="px-6 py-4">
                            empty
                        </td>
                        <td class="px-6 py-4">
                            empty
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

