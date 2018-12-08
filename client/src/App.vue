<template>
  <div id="app">
    <v-app>
      <Page-Header />
   
      
      <main> 
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/header.vue'


export default {
  name: 'App',
  components: {
    PageHeader
  }
}

</script>

<style>
#app {

}
</style>
