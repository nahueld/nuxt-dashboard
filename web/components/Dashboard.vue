<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <SideBar
      :is-side-menu-open="isSideMenuOpen"
    />
    <div class="flex flex-col flex-1 w-full">
      <NavBar
        :is-profile-menu-open="isProfileMenuOpen"
        :is-notifications-menu-open="isNotificationsMenuOpen"
        :is-side-menu-open="isSideMenuOpen"
        :dark="dark"
        @toggle-theme="toggleTheme"
        @toggle-notifications-menu="toggleNotificationsMenu"
        @toggle-profile-menu="toggleProfileMenu"
        @toggle-side-menu="toggleSideMenu"
        @log-out="logOut"
      />
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isProfileMenuOpen: false,
      isNotificationsMenuOpen: false,
      isSideMenuOpen: false,
      dark: false,
      user: this.$store.state.app.user
    }
  },
  methods: {
    toggleTheme (dark) {
      this.dark = dark
    },
    toggleSideMenu (isSideMenuOpen) {
      this.isSideMenuOpen = isSideMenuOpen
    },
    toggleProfileMenu (isProfileMenuOpen) {
      this.isProfileMenuOpen = isProfileMenuOpen
    },
    toggleNotificationsMenu (isNotificationsMenuOpen) {
      this.isNotificationsMenuOpen = isNotificationsMenuOpen
    },
    async logOut () {
      await this.$store.dispatch('app/signOut')
    }
  }
}
</script>
