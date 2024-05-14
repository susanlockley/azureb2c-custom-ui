<template>
  <div>
    <label>Enter Code</label>
    <input type="text" v-model="codeOurs" required>
  </div>

  <button @click="handleSubmit()">Create</button> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
       data() {
        return {
            codeOurs: ''
        }
    },
    methods: {
        handleSubmit() {
            // this.passwordError = this.password.length > 5 ? '' : 'Error for password'
            var b2cContinue = document.querySelector('#api')?.querySelector<HTMLElement>('#continue');

            //if (b2cEmail) {
            //    b2cEmail.value = this.emailAddressOurs
            //}
            if (b2cContinue) {
                b2cContinue.click();
            }
            
            
        }
    }

})

</script>

<style>

</style>