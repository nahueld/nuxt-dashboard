<template>
  <AccountCreator @account-creation="accountCreation" />
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {

  methods: {
    async accountCreation ({ email, password }) {
      try {
        await createUserWithEmailAndPassword(this.$auth(), email, password)
      } catch (err) {
        console.error(err.toString())
      }
    }
  }
}
</script>
