<template>
<v-layout column>
      <v-flex xs12 sm6 d-flex>
          <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>    
        </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
            <h1>Registration</h1>
            <v-text-field v-model="name" label="Name"></v-text-field><br><br>
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
            <button @click="register">Register</button><br><br>
            <span>Already with us? click below to</span><br>
            <button @click="register">Login</button>      
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
        name: "",
        role: "",
        password: "",
    
    }
    
  },

  methods: {
      async register () {
          const response = await AuthenticationService.register( {
              email: this.email,
              name: this.name,
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
