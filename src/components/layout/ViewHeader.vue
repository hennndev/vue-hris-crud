
<script>
    import SearchInput from '../SearchInput.vue'
    import { toRefs } from 'vue'
    export default {
        props: {
            title: String
        },
        setup(props) {
            return {
                title: props.title
            }
        },
        components: {
            SearchInput
        }
    }
</script>


<template>
    <header class="flex-between mb-5 px-5">
        <div class="flexx space-x-5">
            <h1 class="text-[#222] font-bold text-xl">{{ title }}</h1>
            <SearchInput/>
        </div>
        <div class="flexx space-x-5 text-gray-500">
            <i class="pi pi-envelope text-lg cursor-pointer"></i>
            <i class="pi pi-bell text-lg cursor-pointer"></i>
            <div class="h-[30px] w-[30px] rounded-full">
                <img src="https://st2.depositphotos.com/3369547/11372/v/950/depositphotos_113724550-stock-illustration-businessman-concept-avatar-male-person.jpg" class="w-full h-full rounded-full object-cover" alt="">
            </div>
        </div>
    </header>
</template>

