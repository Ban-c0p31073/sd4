<template>
  <div class="help">

     <h1>
       ヘルプ
    </h1>

    <br><br>

    <div class="comment">
      <p>
        何かお困りですか？
        恐れ入りますが、以下の問い合わせ先へご連絡下さい。
      </p>
    </div>
    
    <br>
    
    <div class="ask">
      <h2>
        問い合わせ先
      </h2>
      <h3>
        sample@gmail.com
      </h3>
    </div>

    <br>

    <div class="develop">
      <h2>
        開発者
      </h2>
      <h3>
        竹澤&nbsp;&nbsp;冬馬&nbsp;(リーダー)<br>
        坂内&nbsp;&nbsp;蓮<br>
        坂間&nbsp;&nbsp;寿輝<br>
        田中&nbsp;&nbsp;俊志<br>
        水野&nbsp;&nbsp;蓮<br>
        横山&nbsp;&nbsp;大樹
      </h3>
    </div>

    <br>

    <div class="license">
      <h2>
        ライセンス
      </h2>

    </div>

  </div>

  <br><br><br><br><br>

</template>

<script>

export default {
  name: 'Help',
  }

</script>

<style scoped>

.comment {
  background: white;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  font-weight: bold;
  width: 85%;
  border-radius: 10px;
  opacity:0.91;
}

.ask {
  background: white;
  margin: 0 auto;
  padding: 30px;
  width: 85%;
  border-bottom: solid 3px;
  box-shadow: 0 3px 6px black;
  border-radius: 10px;
  overflow: hidden;
}

.develop {
  background: white;
  margin: 0 auto;
  padding: 30px;
  width: 85%;
  border-bottom: solid 3px;
  box-shadow: 0 3px 6px black;
  border-radius: 10px;
  overflow: hidden;
}

.license {
  background: white;
  margin: 0 auto;
  padding: 30px;
  width: 85%;
  border-bottom: solid 3px;
  box-shadow: 0 3px 6px black;
  border-radius: 10px;
  overflow: hidden;
}

h2 {
  font-size: 20px;
}

h3 { 
  color: black;
  font-size: 30px;
}

</style>