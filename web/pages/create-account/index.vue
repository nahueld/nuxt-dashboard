<template>
  <AccountCreator @account-creation="accountCreation" />
</template>

<script>

export default {

  methods: {
    accountCreation ({ email, password }) {
      this.$store.dispatch('app/createAccount', { email, password })
    }
  }
}
</script>
