<template>
  <div>
    <div id="overlay">
      <div id="content" v-on:click="stopEvent">
        <h3><span class="material-icons" @click="clickEvent">arrow_back_ios</span>もどる</h3>
        <h2>新規登録</h2>
        <form class="Form">
          <p>{{msgErr}}</p>
          <div>
            <label for="username">ユーザー名</label>
            <input type="username" name="username" placeholder="文教 太郎" v-model="username">
          </div>
          <div>
            <label for="email">メールアドレス</label>
            <input type="email" name="email" placeholder="mail@bunkyo.ac.jp" v-model="email">
          </div>
          <div>
            <label for="password">パスワード</label>
            <input type="password" name="password" placeholder="password" autocomplete="password" v-model="password">
          </div>
          <div>
            <label for="password_conf">パスワード確認</label>
            <input type="password" name="password_conf" placeholder="password" autocomplete="password" v-model="passwordConf">
          </div>
          <div>
            <input class="btn" type="button" value="新規登録" @click="registerEvent" v-show="!done">
            <p v-show="done">登録が完了しました。ログイン画面からログイン可能です。</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods :{
    clickEvent(){
      this.$emit('from-child')
     },
     stopEvent(){
      event.stopPropagation()
    },
    async registerEvent(){
      this.msgErr = "デモページのため、新規登録はできません。";
    }
  },
  data(){
    return{
      username:'',
      email:'',
      password:'',
      passwordConf:'',
      token:'',
      msgErr:'',
      done:false,
      data:{}
    }
  }
}
</script>
 
<style scoped>
 
#overlay{
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
  background-color:white;
  top:5%;
  z-index:2;
  width:700px;
  padding:30px;
  height:90%;
  overflow-y: auto;
  display:flex;
  flex-flow: column;
}

.material-icons{
  font-size:30px;
  cursor: pointer;
}

h2{
  font-size:40px;
  text-align: center;
  margin:0;
  padding:50px 0;
}

h3{
  font-size:25px;
}

h3 .material-icons{
  position:relative;
  top:6px;
}

label{
  font-size:30px;
}

input {
  width:100%;
  background:#f5f5f5;
  border:0;
  padding:20px;
  border-radius:6px;
  margin:10px 0;
  box-sizing: border-box;
}

p{
  margin:0 0 15px;
  text-align:right;
  color:#f26964;
}

.btn {
  margin:40px 0 0;
  border:0;
  background:#f26964;
  font-size:25px;
  font-weight:bold;
  color:#fff;
}
 
</style>