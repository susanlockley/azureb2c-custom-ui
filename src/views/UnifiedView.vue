<template>
  <div>
    <label>Sign in Name</label>
    <input type="text" v-model="signinNameOurs" required>
    <label>Password</label>
    <input type="password" v-model="passwordOurs" required>
  </div>

  <button @click="handleSubmit()">Create</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    }

})
</script>

<style>

</style>