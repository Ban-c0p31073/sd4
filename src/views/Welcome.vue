<template>
  <div class="welcome">
    <div>
      <h1>
        マッチングアプリケーションへようこそ
      </h1>

      <br><br>

      <div class="comment">
      <p>
        同じ大学内で友達が欲しいと思うのは自然なことです。<br>
        しかし、コロナ禍の影響やコミュニケーションが苦手など、友達を作ることが難しいのが現状です。<br>
        そのために、文教大学湘南キャンパスの生徒同士の関係を充実させるアプリケーションを開発しました。
      </p>
      </div>

      <br><br>

      <div class="next">
      <LoginMain v-show="showLogin" v-on:from-child="closeLogin" />
      <register v-show="showRegister" v-on:from-child="closeRegister" />
      <h2 @click="openLogin">
        ログイン<br><br>
        <img class="login" src="../assets/icon/login.png">
        <p>
          <br>既にアカウントをお持ちですか？<br>こちらからログインして下さい。
        </p>
      </h2>
      <h2 @click="openRegister">
        新規登録<br><br>
        <img class="register" src="../assets/icon/register.png">
        <p>
          <br>まだアカウントをお持ちではないですか？<br>こちらから新しく作成しましょう！
        </p>
      </h2>
      </div>
    </div>
  </div>
</template>

<script>
import LoginMain from '@/components/LoginMain.vue'
import Register from '@/components/Register.vue'

export default {
  components: {
    LoginMain,
    Register
  },
  data(){
    return{
      showLogin: false,
      showRegister: false
    }
  },
  methods: {
    openLogin() {
      this.showLogin = true
    },
    closeLogin() {
      this.showLogin = false
    },
    openRegister() {
      this.showRegister = true
    },
    closeRegister() {
      this.showRegister = false
    }
  }
}


</script>

<style scoped>

.welcome {
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
}

.welcome > div{
  width:100%;
}

.comment {
  margin: 0px auto;
  padding: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  width: 85%;
  background: white;
  border-radius: 10px;
  opacity:0.95;
}

.next {
  margin: 0px auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 85%;
}

h2{
  background: white;
  margin: 0 auto;
  padding: 60px;
  width: 30%;
  text-align: center;
  border-bottom: solid 3px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.8);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

h2 p{
  font-size: 12px;
  text-align: center;
}

img {
  padding: 10px;
  width: 50%;
}

</style>