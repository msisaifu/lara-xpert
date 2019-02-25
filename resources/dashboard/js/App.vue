<template>
        <div>
            <v-header></v-header>
            <v-welcome></v-welcome>
            <h2>Welcome Admin</h2>
        </div>
</template>

<script>
import Header from './components/Header';
import Welcome from './components/Welcome';

    export default {
        components:{
            'v-header' : Header,
            'v-welcome' : Welcome,
        },
        mounted() {
            console.log('Admin Mountend')
            console.log(this.$store.state.init)
        }
    }
</script>
<style scoped="">
</style>