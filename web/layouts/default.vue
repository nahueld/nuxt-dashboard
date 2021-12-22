<template>
  <Nuxt />
</template>
<script>
import { onAuthStateChanged } from 'firebase/auth'

export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    onAuthStateChanged(this.$auth(), (user) => {
      this.user = user
      if (this.user) {
        this.$router.push({ name: 'dashboard' })
      }
    })
  }
}
</script>
