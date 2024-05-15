<template>
  <HeaderComponent/>
  <UnifiedView v-if="pageId === 'Unified'"/>
  <SaForgotPassword  v-if="pageId === 'SAForgotPassword'"/>
  <SaEnterTotp  v-if="pageId === 'SAEnterTotp'"/>
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
import { defineComponent, computed } from 'vue'
// import SignupForm from './components/SignupForm.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SaEnterTotp from './views/SaEnterTotp.vue';
import SaForgotPassword from './views/SaForgotPassword.vue';
import UnifiedView from './views/UnifiedView.vue';


export default defineComponent({
  components: {
    // SignupForm,
    HeaderComponent,
    FooterComponent,
    SaEnterTotp,
    SaForgotPassword,
    UnifiedView
  },
 
  setup() {
    
    const pageId = computed(() => {
      var api = document.querySelector<HTMLElement>('#api');
      if (api && api.getAttribute('data-name') && api.getAttribute('data-name') === 'Unified'){
        return 'Unified'
      }

      var saPageId = document.querySelector('#api')?.querySelector<HTMLElement>('#SAPageID');
      if (saPageId && saPageId.textContent)
      {
        return saPageId.textContent
      }

      return ''
    })
    // var pageId = '' as string
    // //var api = document.querySelector<HTMLElement>('#api')?.getAttribute('data-name');
    //   var api = document.querySelector<HTMLElement>('#api');
    // if (api && api.getAttribute('data-name') && api.getAttribute('data-name') == 'Unified'){
    //   pageId = 'unified'
    //   return pageId
    // }

    // var saPageId = document.querySelector('#api')?.querySelector<HTMLElement>('#SAPageID');
    // if (saPageId && saPageId.textContent)
    // {
    //   pageId = saPageId.textContent
    //   return pageId
    // }

    return { pageId }

  }
  
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
