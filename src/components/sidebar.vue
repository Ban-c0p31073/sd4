<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <router-link to="/"><img class="logo" src="@/assets/icon/logo.png"></router-link>
        <router-link to="/"><div class="sidebar-link"><img class="icon" src="@/assets/icon/home.png">ホーム</div></router-link>
        <router-link to="/setting"><div class="sidebar-link"><img class="icon" src="@/assets/icon/setup.png">設定</div></router-link>
        <router-link to="/chat"><div class="sidebar-link"><img class="icon" src="@/assets/icon/chat.png">チャット</div></router-link>
        <router-link to="/good"><div class="sidebar-link"><img class="icon" src="@/assets/icon/good.png">いいね</div></router-link>
      </div>
      <div class="sidebar-link-area-under">
        <router-link to="/"><div class="sidebar-link"><img class="icon" src="@/assets/icon/help.png">ログアウト</div></router-link>
        <router-link to="/help"><div class="sidebar-link"><img class="icon" src="@/assets/icon/help.png">ヘルプ</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods :{
    reload(){
      location.reload();
    }
  }
}
</script>


<style scoped>
.sidebar {
  background-color: #ffff5b;
  margin-top: 10%;
  height: 95%;
  width: 200px;
  opacity: 0.85;
  border-right: solid 3px;
  border-bottom: solid 3px;
  box-shadow: 0 10px 10px rgba(0,0,0,0.8);
  border-radius: 0px 20px 20px 0px / 0px 20px 20px 0px;
}

.sidebar-wrapper{
  height:100%;
  display:flex;
  flex-flow: column;
}

.sidebar-link-area {
  padding-top: 20px;
  flex:1;
}

/*下にあるログアウトとヘルプの部分*/
.sidebar-link-area-under{
  padding:10px 0;
}

a{
  text-decoration: none;
}

.sidebar-link{
  padding:10px 20px;
  font-size:18px;
  color: black;
  opacity:0.8;
  cursor: pointer;
}

.sidebar-link:hover{
  background-color: #ffffe0;
}

a.router-link-exact-active > div{
  background-color: #f3f3f3;
  font-weight: bold;
  opacity: 1;
}

.icon{
  width: 20px;
  position: relative;
  top: 4px;
  padding :0 15px 0 8px;
}

.logo{
  margin-bottom: 20px;
  margin-left: 50px;
  width: 50%;
}
</style>