<template>
  <div class="chat-list">
    <ul>
      <ChatListDetail
        v-for="i in chatUser"
        v-bind:key="i.id"
        v-bind:id="i.id"
        v-bind:name="i.name"
        :img="i.img"
        v-bind:messages="i.messages"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatListDetail from '@/components/ChatListDetail.vue'

export default {
  components: {
    ChatListDetail
  },
  computed :{
    chatUser:function(){
      return this.$store.state.chatUser
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type:none;
  padding:0 20px;
  width:650px;
  margin:auto;
}
</style>