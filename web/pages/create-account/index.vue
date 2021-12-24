<template>
  <AccountCreator @account-creation="accountCreation" />
</template>

<script>

export default {

  methods: {
    accountCreation ({ email, password }) {
      this.$auth.createAccount(email, password)
    }
  }
}
</script>
