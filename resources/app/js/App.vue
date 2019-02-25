<template>
        <div>
            <v-header></v-header>
            <router-view></router-view>
            <h2>Welcome App</h2>
        </div>
</template>

<script>
import Header from './components/Header';

    export default {
        components:{
            'v-header' : Header
        },
        mounted() {
            console.log('App Mountend')
            console.log(this.$store.state.init)
        }
    }
</script>
<style scoped="">
</style>