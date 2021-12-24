<template>
  <Nuxt />
</template>
<script>

export default {
  created () {
    this.$auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('app/authenticate', true)
        return
      }

      this.$store.commit('app/authenticate', false)
    })
  }
}
</script>
