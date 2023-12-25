
<script>
    import Sidebar from './components/layout/Sidebar.vue'

    export default {
        setup() {
            return {};
        },
        components: { 
            Sidebar
        }
    }
    
</script>

<template>
    <main class="flex">
        <Sidebar/>
        <router-view :key="$route.fullPath"/>
    </main>
</template>

