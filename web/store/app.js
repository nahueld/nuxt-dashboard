export const state = () => ({
  isAuthenticated: false
})

export const mutations = {
  authenticate (state, authState) {
    state.isAuthenticated = authState
  }
}

export const actions = {

  async signIn ({ commit }, { email, password }) {
    try {
      await this.$auth.signIn(email, password)
    } catch (err) {
      commit('authenticate', false)
      return
    }

    commit('authenticate', true)
  },

  async createAccount ({ commit }, { email, password }) {
    try {
      await this.$auth.createUserWithEmailAndPassword(email, password)
    } catch (err) {
      commit('authenticate', false)
      return
    }

    commit('authenticate', true)
  },

  async signOut ({ commit }) {
    try {
      await this.$auth.signOut()
    } catch (err) {
      commit('authenticate', true)
      return
    }

    commit('authenticate', false)
  }
}
