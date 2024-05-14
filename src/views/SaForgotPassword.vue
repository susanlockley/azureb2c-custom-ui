<template>
  <div>
    <label>Email Address</label>
    <input type="text" v-model="emailAddressOurs" required>
    <label>Sign in Name</label>
    <input type="text" v-model="signinNameOurs" required>
  </div>

  <button @click="handleSubmit()">Create</button> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
       data() {
        return {
            signinNameOurs: '',
            emailAddressOurs: ''
        }
    },
    methods: {
        handleSubmit() {
            // this.passwordError = this.password.length > 5 ? '' : 'Error for password'
            var b2cSigninName = document.querySelector('#api')?.querySelector<HTMLInputElement>('#signInName');
            var b2cEmail = document.querySelector('#api')?.querySelector<HTMLInputElement>('#email');
            var b2cContinue = document.querySelector('#api')?.querySelector<HTMLElement>('#continue');

            this.signinNameOurs = 'abc'
            if (b2cSigninName) {
                b2cSigninName.value = this.signinNameOurs
            }
            if (b2cEmail) {
                b2cEmail.value = this.emailAddressOurs
            }
            if (b2cContinue) {
                b2cContinue.click();
            }
            
            
        }
    }

})

</script>

<style>

</style>