<template>
  <div>
    <div id="overlay" v-on:click="clickEvent">
      <div id="content" v-on:click="stopEvent">
        
        <h2>プロフィール編集</h2><br>

        <div class="mypro">

          <img class="myicon" src="@/assets/plof/1.png"><br><br>

            <div class="myprodetail">

              <div id="file">
                <label for="file">プロフィール画像</label>
                <input type="file" class="file" name="file">
              </div>

              <br>

              <div id="name">
                <label for="name">名前</label>
                <input type="text" id="name" name="name" placeholder="例）文教太郎">
                <p2>現在の設定:文教太郎{{name}}</p2>
              </div>

              <br>

              <div id="personality">
                <label for="personality">性別</label>
                <p><input type="radio" id="personality" name="personality" value="男性" checked>男性
                <input type="radio" id="personality" name="personality" value="女性">女性</p>
                <p2>現在の設定:男性{{personality}}</p2>
              </div>

              <br>

              <div id="year">
                <label for="year">学年</label>
                <select id="year" name="year">
                  <option value="1">1年</option>
                  <option value="2">2年</option>
                  <option value="3">3年</option>
                  <option value="4">4年</option>
                </select>
                <p2>現在の設定:2{{year}}年</p2>
              </div>

              <br>

              <div id="department">
                <label for="department">学部・学科</label>
                <select id="department" name="department">
                  <option value="1">情報システム学科</option>
                  <option value="2">情報社会学科</option>
                  <option value="3">メディア表現学科</option>
                </select>
                <p2>現在の設定:情報学部{{department}}</p2>
              </div>

              <br>

              <div id="message">
                <label for="message">メッセージ</label>
                <input type="text" id="message" name="message" placeholder="メッセージを入力">
                <p2>{{message}}</p2>
              </div>

            </div>

          <br>

        </div>

        <div id="button"><br>
          <input type="button" class="cancel" name="cancel" value="&nbsp;キャンセル&nbsp;" v-on:click="clickEvent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="submit" class="complete" name="complete" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完了&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        </div>

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
    }
  },
  props:{
    name: String,
    personality: String,
    year: String,
    department: String,
    message: String
  },
  data(){
    return{
      /*name:'',
      personality:'',
      year:'',
      department:'',
      message:'',
      data:{}*/
    }
  }
}
</script>

<style scoped>

#overlay{
  z-index: 1;
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
  z-index: 2;
  box-sizing: border-box;
  border-radius: 10px;
  position:fixed;
  background-color:white;
  top:5%;
  margin-left: 100px;
  padding:30px;
  width:65%;
  height:90%;
  display: flex;
  flex-flow: column;
  text-align: center;
}

h2{
  margin: 0px;
  padding: 0px;
  color: black;
  font-size: 30px;
  text-align: left;
  float: left;
}

.myicon {
  margin-left: 30px;
  width: 200px;
  height: 200px;
  background-image: url(../assets/plof/plof.png);
  border-radius: 100%;
}

.mypro{
  overflow: scroll;
}

.myprodetail{
  overflow: hidden;
  font-weight: normal;
}

label{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  float: left;
}

input{
  text-align: center;
}

p{
  margin:3px 0;
  font-size: 20px;
  text-align: center;
}

p2{
  font-size: 15px;
}

#name{

}

#personality{

}

#year{

}

#department{

}

#message{

}

#botton{
  margin: 0px;
  padding: 0px;
}

.cancel, .complete{
  border-radius : 40px;
  font-size     : 20px;
  font-weight: bold;
  text-align    : center;
  background: #0000ff;
  color: white;
}

</style>