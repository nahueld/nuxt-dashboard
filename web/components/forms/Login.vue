<template>
  <Form :submit="logIn" :submit-label="submitLabel">
    <Input v-model="email" type="email" label="Email" />
    <Input v-model="password" type="password" label="Password" />
  </Form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      submitLabel: 'Sign-in'
    }
  },
  methods: {
    logIn () {
      this.$store.dispatch('app/signIn', { email: this.email, password: this.password })
    }
  }
}
</script>
