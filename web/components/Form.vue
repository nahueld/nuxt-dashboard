<template>
  <form @submit.prevent="submitHandler">
    <slot />

    <Button type="submit" :is-loading="isLoading">
      {{ submitLabel }}
    </Button>
  </form>
</template>

<script>
export default {
  props: {
    submit: {
      type: Function,
      default: () => ({})
    },
    submitLabel: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    async submitHandler () {
      this.isLoading = true

      try {
        await this.submit()
      } catch (err) {
        await this.$Toast.show({
          text: err.toString(),
          position: 'top'
        })
      }

      this.isLoading = false
    }
  }
}
</script>
