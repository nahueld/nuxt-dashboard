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
  beforeCreate () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('unhandledrejection', async (event) => {
      await this.$Toast.show({
        text: event.reason.toString(),
        position: 'top'
      })
    })

    this.$auth.onAuthStateChanged((user) => {
      const isAuthenticated = !!user

      this.$store.commit('app/authenticate', isAuthenticated)

      const publicRoutes = ['index', 'create-account', 'forgot-password']
      const isPrivateRoute = route => !publicRoutes.includes(route)
      const isPublicRoute = route => publicRoutes.includes(route)

      if (isAuthenticated && isPublicRoute(this.$route.name)) {
        this.$router.push({ name: 'dashboard' })
      }

      if (!isAuthenticated && isPrivateRoute(this.$route.name)) {
        this.$router.push({ name: 'index' })
      }

      this.$store.commit('app/loading', false)
    })
  }
}
</script>
