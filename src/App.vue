<template>
  <HeaderComponent/>

  <UnifiedView v-if="pageId === 'Unified'"/>
  <SaForgotPassword  v-if="pageId === 'SAForgotPassword'"/>
  <SaEnterTotp  v-if="pageId === 'SAEnterTotp'"/>

  <FooterComponent/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SaEnterTotp from './views/SaEnterTotp.vue';
import SaForgotPassword from './views/SaForgotPassword.vue';
import UnifiedView from './views/UnifiedView.vue';


export default defineComponent({
  components: {
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

input {
  background-color: bisque;
}

</style>
