<template>
  <Login @log-in="logIn" />
</template>

<script>

export default {
  methods: {
    async logIn ({ email, password }) {
      try {
        await this.$auth.signIn(email, password)
      } catch (err) {
        console.error(err.toString())
      }
    }
  }

}
</script>
