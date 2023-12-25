
<script>
    export default {
        setup(props) {
            return {
                
            }
        },
        inject: ['keyword']
    }
</script>


<template>
    <div v-show="keyword" class="flexx w-[500px] px-4 border border-gray-100 rounded bg-gray-100">
        <i class="pi pi-search text-lg mr-3 text-gray-500"></i>
        <input type="text" placeholder="Type employee" class="flex-1 border-none outline-none focus:ring-0 py-2 text-gray-500 bg-transparent">
    </div>
</template>

