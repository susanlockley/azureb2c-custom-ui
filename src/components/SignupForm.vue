<template>
  <!-- <form @submit.prevent="handleSubmit()"> -->
    <label>Email:</label>
    <input type="email" required v-model="email">
    <label>Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError">{{  passwordError }}</div>
    <label>Role:</label>
    <select v-model="role">
        <option value="devloper">Web developer</option>
        <option value="designer">Web Designer</option>
    </select>
    <div class=terms>
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
    </div>
    <button @click="handleSubmit()">Create</button>
  <!-- </form> -->

  <p>Email: {{ email}}</p>
  <p>Password {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>terms accepted: {{terms}}</p>
</template>

<script>
export default {

    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            passwordError: ''
        }
    },
    methods: {
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? '' : 'Error for password'
        }
    }
}
</script>

<style>

</style>