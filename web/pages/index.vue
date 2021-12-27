<template>
  <Login :is-loading="isLoading" @log-in="signIn" />
</template>

<script>

export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    async signIn ({ email, password }) {
      this.isLoading = true
      try {
        await this.$store.dispatch('app/signIn', { email, password })
      } catch (err) {
        await this.$Toast.show({
          text: err.toString(),
          position: 'top'
        })
      } finally {
        this.isLoading = false
      }
    }
  }

}
</script>
