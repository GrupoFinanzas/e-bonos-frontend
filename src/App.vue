<template>
    <v-app>
        <ToolBar />
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import ToolBar from './components/tool-bar.vue';
export default {
    name: "app",
    components: { ToolBar }
}
</script> 

<style>

</style>