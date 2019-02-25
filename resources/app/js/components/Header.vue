<template>
        <div>
            <router-link :to="{name:'home'}">Home</router-link>
            <router-link :to="{name:'about'}">About</router-link>
        </div>
</template>

<script>

    export default {
        components:{
        },
        mounted() {
            console.log('App Component')
        }
    }
</script>
<style scoped="">
</style>