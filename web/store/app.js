export const state = () => ({
  isLoading: true,
  isAuthenticated: false
})

export const mutations = {
  authenticate (state, authState) {
    state.isAuthenticated = authState
  },
  loading (state, loadingState) {
    state.isLoading = loadingState
  }
}

export const actions = {

  async signIn ({ commit }, { email, password }) {
    await this.$auth.signIn(email, password)
    commit('authenticate', true)
  },

  async createAccount ({ commit }, { email, password }) {
    await this.$auth.createAccount(email, password)
    commit('authenticate', true)
  },

  async signOut ({ commit }) {
    await this.$auth.signOut()
    commit('authenticate', false)
  }
}
