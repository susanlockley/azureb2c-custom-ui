<template>
  <HeaderComponent/>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/about">About</router-link>
    <router-link to="/unified">Unifed</router-link>
  </nav>
  <router-view/>
  <!-- <signupForm/> -->
  <FooterComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import SignupForm from './components/SignupForm.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default defineComponent({
  components: {
    // SignupForm,
    HeaderComponent,
    FooterComponent
  },
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
