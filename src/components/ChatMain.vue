<template>
  <div>
    <div id="overlay">
      <div id="content">
        <div id="name">
          <h2><span class="material-icons" @click="clickEvent">arrow_back_ios</span>{{name}}</h2>
        </div>
        <div id="chat">
          <Message
            v-for="i in messages"
            :key="i.id"
            :message="i.message"
          />
        </div>
        <div id="send">
          <textarea rows="1" placeholder="メッセージを入力" v-model="messageText" ref="area" :style="styles">a</textarea>
          <div><span class="material-icons" @click="sendMessage">send</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  components: {
    Message
  },
  methods :{
    clickEvent(){
      this.$emit('from-child')
     },
     stopEvent(){
      event.stopPropagation()
    },
    resize(){
      this.height = "auto";
      this.$nextTick(()=>{
        this.height = this.$refs.area.scrollHeight + 'px';
      })
    },
    sendMessage(){
      if(this.messageText != ''){
        this.messageText = this.messageText.replace(/\n/g,'<br>');
        this.$store.commit('setMessage', { userId: this.id, Message:{message:this.messageText} });
        this.messageText = '';
      }
    }
  },
  watch:{
    messageText(){
      this.resize();
    }
  },
  computed:{
    styles(){
      return {
        "height": this.height
      }
    }
  },
  props:{
    id:String,
    name: String,
    messages: Array
  },
  data(){
    return{
      isActive:false,
      messageText: '',
      height:'30px'
    }
  }
}
</script>

<style scoped>
#overlay{
  /*要素を重ねた時の順番*/
  z-index:1;
  position:fixed;
  top:0;
  right:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  box-sizing: border-box;
  position:fixed;
  top:0;
  z-index:2;
  width:700px;
  height:100%;
  margin-left:250px;
  background:#fff;
  display:flex;
  flex-flow: column;
}

.material-icons{
  font-size:30px;
  cursor: pointer;
}

#name{
  padding:15px 30px;
  background-color: #f7f6f3;
}

#name .material-icons{
  position:relative;
  top:6px;
}

#name h2{
  margin:0;
}

#chat{
  flex:1;
  display:flex;
  flex-flow: column;
  justify-content:flex-end;
}

#send{
  display:flex;
  padding:20px;
  background-color: #f7f6f3;
}

#send textarea{
  display:block;
  border:0;
  line-height: 1.3;
  flex:1;
  resize: none;
  font-size:18px;
  font-family:inherit;
  background-color: #f7f6f3;
  max-height:215px;
}

#send textarea:focus {
  outline: none;
}

#send div{
  display:flex;
  align-items: flex-end;
}

#send div span{
  text-align:center;
  width:50px;
}
</style>