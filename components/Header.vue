<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    <slot>{{ name }}</slot>
  </h2>
</template>

<script>
export default {
  props: {
    name: {
      default: 'Undefined',
      type: String
    }
  }
}
</script>
