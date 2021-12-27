<template>
  <button
    :disabled="isLoading"
    class="block w-full
    px-4 py-2
    mt-4 text-sm
    font-medium leading-5
    text-center text-white
    transition-colors duration-150
    bg-purple-600 border border-transparent
    rounded-lg
    active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple
    disabled:bg-purple-400
    "
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
