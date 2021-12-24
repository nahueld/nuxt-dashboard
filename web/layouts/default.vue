<template>
  <div>
    <div v-if="isLoading">
      <h1>Loading ...</h1>
    </div>
    <div v-else>
      <div v-if="isAuthenticated">
        <Dashboard>
          <Nuxt />
        </Dashboard>
      </div>
      <div v-else>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    isLoading () {
      return this.$store.state.app.isLoading
    },
    isAuthenticated () {
      return this.$store.state.app.isAuthenticated
    }
  },
  created () {
    this.$auth.onAuthStateChanged((user) => {
      const isAuthenticated = !!user

      this.$store.commit('app/authenticate', isAuthenticated)
      this.$store.commit('app/loading', false)
    })
  }
}
</script>
