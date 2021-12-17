<template>
  <li>
    <ChatMain
      v-show="showContent"
      v-on:from-child="closeChat"
      :id="id"
      :name="name"
      :messages="messages"
    />
    <div class="chat-list-detail" v-on:click="openChat">
      <img :src="img">
      <div>
        <p id="bold">{{name}}</p>
        <div>
          <p>{{messages[messages.length - 1].message}}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import ChatMain from '@/components/ChatMain.vue'

export default {
  components: {
    ChatMain
  },
  props:{
    id:String,
    name: String,
    img:String,
    messages: Array
  },
  data(){
    return{
      showContent: false
    }
  },
  methods: {
    openChat() {
      this.showContent = true
    },
    closeChat() {
      this.showContent = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-list-detail{
  background-color: #f7f6f3;
  cursor: pointer;
  padding:20px;
  margin:20px 0;
  display:flex;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  border-radius: 10px;
}

#bold{
  font-weight:bold;
  font-size:21px;
}

img{
  width:130px;
  border-radius:50%;
}

.chat-list-detail>div{
  text-align:left;
  margin-left:20px;
  flex:1;
}

.chat-list-detail>div>div{
  width:100%;
}

p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 450px;
}

</style>
