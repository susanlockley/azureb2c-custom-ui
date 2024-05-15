<template>
  <HeaderComponent/>
  <SaForgotPassword/>
  <SaEnterTotp/>
  <!-- <div>
    <label>Sign in Name app.vue</label>
    <input type="text" v-model="signinNameOurs" required>
    <label>Password app.vue</label>
    <input type="password" v-model="passwordOurs" required>
  </div> -->

  <!-- <button @click="handleSubmit()">Create</button> -->

  <FooterComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import SignupForm from './components/SignupForm.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SaEnterTotp from './views/SaEnterTotp.vue';
import SaForgotPassword from './views/SaForgotPassword.vue';


export default defineComponent({
  data() {
        return {
            signinNameOurs: '',
            passwordOurs: ''
        }
    },
  methods: {
    handleSubmit() {
            // this.passwordError = this.password.length > 5 ? '' : 'Error for password'
            var b2cSigninName = document.querySelector('#api')?.querySelector<HTMLInputElement>('#signInName');
            var b2cPassword = document.querySelector('#api')?.querySelector<HTMLInputElement>('#password');
            var b2cNext = document.querySelector('#api')?.querySelector<HTMLElement>('#next');

            if (b2cSigninName) {
                b2cSigninName.value = this.signinNameOurs
            }
            if (b2cPassword) {
                b2cPassword.value = this.passwordOurs
            }
            if (b2cNext) {
                b2cNext.click();
            }
            
            
        }
  },

  components: {
    // SignupForm,
    HeaderComponent,
    FooterComponent,
    SaEnterTotp,
    SaForgotPassword
  }
  // ,

    
  // setup() {
    
  // }
  
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
