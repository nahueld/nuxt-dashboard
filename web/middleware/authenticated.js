export default function ({ store, redirect }) {
  if (!store.state.app.isAuthenticated) {
    return redirect({ name: 'index' })
  }
}
