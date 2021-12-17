<template>
  <div class="Chat">
    <h1>チャット</h1>
    <ChatList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatList from '@/components/ChatList.vue'

export default {
  components: {
    ChatList
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>