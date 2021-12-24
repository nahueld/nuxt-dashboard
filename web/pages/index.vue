<template>
  <Login @log-in="logIn" />
</template>

<script>

export default {
  methods: {
    logIn ({ email, password }) {
      this.$store.dispatch('app/signIn', { email, password })
      this.$router.push({ name: 'dashboard' })
    }
  }

}
</script>
