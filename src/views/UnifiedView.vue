<template>
  <div>
    <label>Sign in Name</label>
    <input type="text" v-model="signinNameOurs" required>
    <label>Password</label>
    <input type="password" v-model="passwordOurs" required>
  </div>

  <button @click="handleSubmit()">Create</button>
</template>

<script>
export default {
    data() {
        return {
            signinNameOurs: '',
            passwordOurs: ''
        }
    },
    methods: {
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? '' : 'Error for password'
            var b2cSigninName = document.querySelector('#api').querySelector('#signInName');
            var b2cPassword = document.querySelector('#api').querySelector('#password');
            var b2cNext = document.querySelector('#api').querySelector('#next');

            b2cSigninName.value = this.signinNameOurs
            b2cPassword.value = this.passwordOurs
            b2cNext.click();
        }
    }

}
</script>

<style>

</style>