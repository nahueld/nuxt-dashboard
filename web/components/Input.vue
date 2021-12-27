<template>
  <label class="block mt-4 text-sm">
    <span class="text-gray-700 dark:text-gray-400">{{ label }}</span>
    <input
      v-model="inputVal"
      class="px-2 py-2 border-2 border-DEFAULT rounded-lg block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
      :type="type"
    >
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Undefined'
    },
    value: {
      type: String || Number,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
