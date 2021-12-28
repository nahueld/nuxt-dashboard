<template>
  <Form :submit="logIn" :submit-label="submitLabel">
    <Input v-model="email" type="email" label="Email" />
    <Input v-model="password" type="password" label="Password" />
    <Input v-model="confirmPassword" type="password" label="Confirm Password" />
    <Input v-model="confirmPassword" type="checkbox">
      I agree to the privacy policy
    </Input>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      submitLabel: 'Create Account',
      email: '',
      password: '',
      confirmPassword: '',
      privacyPolicy: false
    }
  },
  methods: {
    logIn () {
      this.$store.dispatch('app/createAccount', {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        privacyPolicy: this.privacyPolicy
      })
    }
  }
}
</script>
