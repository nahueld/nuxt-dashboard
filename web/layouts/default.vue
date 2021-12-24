<template>
  <Nuxt />
</template>
<script>

export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    this.$auth.onAuthStateChanged((user) => {
      this.user = user
      if (this.user) {
        this.$router.push({ name: 'dashboard' })
      }
    })
  }
}
</script>
