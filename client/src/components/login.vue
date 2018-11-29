<template>
<div class="login">
    <h1>Registration</h1>
    <input v-model="name" type="name" name="name" placeholder="name"><br><br>
    <input v-model="email" type="email" name="email" placeholder="email"><br><br>
    <input v-model="role" type="role" name="role" placeholder="role"><br><br>
    <input v-model="password" type="password" name="password" placeholder="password"><br><br>

    <button @click="register">Register</button>
    
</div>
 
</template>

<script>

import AuthenticationService from "@/services/AuthenticationService";
export default {
  data () {
    return {
        email: "",
        name: "",
        role: "",
        password: ""
     
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
