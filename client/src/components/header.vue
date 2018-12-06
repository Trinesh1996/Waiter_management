<template>
<v-toolbar fixed class="blue">
<v-toolbar-title class="mr-4">
Waiter Mananagement
</v-toolbar-title>

<v-spacer></v-spacer>
<v-toolbar-items>
    
    <v-btn flat dark
    @click="navigateTo({name: 'adminRegistration'})">Sign Up</v-btn>
     <v-btn flat dark
    @click="navigateTo({name: 'login'})">Login</v-btn>

</v-toolbar-items>

</v-toolbar>





      

</template>

<script>

export default {
    methods: { 
        navigateTo(route) {
            this.$router.push(route)
        }
    }

}


</script>


<style scoped>



</style>