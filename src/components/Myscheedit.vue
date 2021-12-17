<template>
  <div>

    <div id="overlay" v-on:click="clickEvent">
      <div id="content" v-on:click="stopEvent">
        <h2>時間割編集</h2><br><br>

        <div class="person">
          <img class="myicon" src="@/assets/plof/1.png">
          <div class="about-wrapper">
            <div>
              <div id="about-n">
                <label for="name">名前&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="name" name="name" placeholder="例）文教太郎"><br>
                <p2>現在の設定:{{name}}</p2><br>
              </div>
              <div id="about-s">
                <label for="personality">性別</label>
                <p><input type="radio" id="personality" name="personality-man" value="男性">男性</p>
                <p><input type="radio" id="personality" name="personality-woman" value="女性">女性</p>
                <p2>現在の設定:{{personality}}</p2><br>
              </div>
            </div>

            <div id="between">
              <div id="about-c">
                <label for="year">学年</label><br>
                <select id="year" name="year">
                  <option value="1">1年</option>
                  <option value="2">2年</option>
                  <option value="3">3年</option>
                  <option value="4">4年</option>
                </select><br>
                <p2>現在の設定:{{year}}年</p2><br>
              </div>
            </div>
            <div id="about-d">
              <label for="department">学部・学科</label>
              <select id="year" name="year">
                <option value="1">1年</option>
                <option value="2">2年</option>
                <option value="3">3年</option>
                <option value="4">4年</option>
              </select>
              <p>現在の設定:{{department}}</p>
            </div>
          </div>
            
          <div>
            <label for="message">メッセージ</label>
            <p>{{message}}</p>
          </div>
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
  display:flex;
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

.person{
  display:flex;
  width:600px;

}

p{
  margin:3px 0;
  font-size: 20px;
  font-weight:bold;
  text-align: center;
}

.about-wrapper{
  flex:1;
}

.about-wrapper>div{
  display:flex;
  width:300px;
  margin:auto;
}

.about-wrapper>div>p{
  margin-top:15px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align:left;
  font-weight:normal;
  font-size: 17px;
}

#between{
  justify-content:space-between;
}

img{
  width:160px;
  border-radius:50%;
}

#about-n{
  flex:1;
}

#about-s{
  width:80px;
  order:2;
}

#about-c{
  width:40px;
}
</style>