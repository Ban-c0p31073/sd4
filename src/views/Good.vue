<template>
  <div class="about">
    <h1>いいね</h1>
    <lists/>
  </div>
</template>

<script>
// @ is an alias to /src
import lists from '@/components/List.vue'

export default {
  components: {
    lists
  }
}
</script>

<style scoped>

a {
  color: #42b983;
}

</style>