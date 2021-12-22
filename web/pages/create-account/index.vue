<template>
  <AccountCreator @account-creation="accountCreation" />
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {

  methods: {
    async accountCreation ({ email, password }) {
      console.log(email, password)

      try {
        const userCredential = await createUserWithEmailAndPassword(this.$auth(), email, password)
        console.log(userCredential)
      } catch (err) {
        console.error(err.toString())
      }
    }
  }
}
</script>
