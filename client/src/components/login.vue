<template>
<v-layout column>
      <v-flex xs12 sm6 d-flex>
          <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>    
        </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
            <h1>Login</h1>

            <v-text-field v-model="email" label="Email"></v-text-field><br><br>
            
          
            <span>Role</span>
  
            <select v-model="role">
                <option value="">Please Select A Position</option>
                <option value="admin">Administrator</option>
                <option value="manager">Manager</option>
                <option value="kitchen">Kitchen Staff</option>
                <option value="waiter">Wait Staff</option>
            </select>

            <br><br>
            <input v-model="password" type="password" name="password" placeholder="password"><br><br>
            <button @click="login">Login</button>
         
            
        </div>
    </div>
</v-flex>
      
</v-layout>
</template>
<script>

import AuthenticationService from "@/services/AuthenticationService";
export default {
  data () {
    return {
        email: "",
        role: "",
        password: "",
    
    }
    
  },

  methods: {
      async login () {
          const response = await AuthenticationService.login( {
              email: this.email,
              role: this.role,
              password: this.password
          })
          console.log(response.data);
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this componen<t only -->
<style scoped>

.white.elevation-2  {
    margin-top: 5em;
    max-width: 50%;
    text-align: center;
}


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
