<template>
  <Login @log-in="logIn" />
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  methods: {
    async logIn ({ email, password }) {
      try {
        await signInWithEmailAndPassword(this.$auth(), email, password)
      } catch (err) {
        console.error(err.toString())
      }
    }
  }

}
</script>
