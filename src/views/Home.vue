<template>
  <div class="home">
    <h1>ホーム</h1>
    <match/>
  </div>
</template>

<script>
// @ is an alias to /src
import match from '@/components/Match.vue'

export default {
  name: 'Home',
  components: {
    match
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
