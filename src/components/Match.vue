<template>
  <div class="match">
    <div>
      <div id="nextContainer">
        <h2>プロフィール</h2>
        <div id="nextBtn" @click="matchEvent">
          <h3>別の人とマッチングする ></h3>
        </div>
      </div>
      <div id="Profile">
        <img :src="img">
        <div id="P-margin">
          <div>
            <p>氏名</p>
            <p>学年</p>
            <p>学科</p>
          </div>
          <div id="prof-main">
            <p>{{matchUser.MatchUser.pubname}}</p>
            <p>{{matchUser.MatchUser.grade}}</p>
            <p>{{matchUser.MatchUser.faculty}} {{matchUser.MatchUser.department}}</p>
          </div>
        </div>
        <div id="matchContainer">
          <div id="point">
            <h3>マッチ度：{{matchUser.matching}}％</h3>
          </div>
          <div id="goodBtn" :class="{ active: isActive }" @click="likeEvent">
            <h3>お気に入り</h3>
          </div>
        </div>
        <div id="message">
          <h3>自己紹介：類似度 {{matchUser.freePonit}}％</h3>
          <p v-html="matchUser.MatchUser.free"/>
        </div>
        <schedule :Mo1="matchUser.MatchUser.Mo1" :Mo2="matchUser.MatchUser.Mo2" :Mo3="matchUser.MatchUser.Mo3" :Mo4="matchUser.MatchUser.Mo4" :Mo5="matchUser.MatchUser.Mo5" :Tu1="matchUser.MatchUser.Tu1" :Tu2="matchUser.MatchUser.Tu2" :Tu3="matchUser.MatchUser.Tu3" :Tu4="matchUser.MatchUser.Tu4" :Tu5="matchUser.MatchUser.Tu5" :We1="matchUser.MatchUser.We1" :We2="matchUser.MatchUser.We2" :We3="matchUser.MatchUser.We3" :We4="matchUser.MatchUser.We4" :We5="matchUser.MatchUser.We5" :Th1="matchUser.MatchUser.Th1" :Th2="matchUser.MatchUser.Th2" :Th3="matchUser.MatchUser.Th3" :Th4="matchUser.MatchUser.Th4" :Th5="matchUser.MatchUser.Th5" :Fr1="matchUser.MatchUser.Fr1" :Fr2="matchUser.MatchUser.Fr2" :Fr3="matchUser.MatchUser.Fr3" :Fr4="matchUser.MatchUser.Fr4" :Fr5="matchUser.MatchUser.Fr5" />
      </div>
    </div>
  </div>
</template>

<script>
import schedule from '@/components/schedule.vue'
export default {
  methods :{
    matchEvent(){
      this.isActive = false;
    },
    likeEvent(){
      this.isActive = !this.isActive;
    }
  },
  computed :{
    matchUser:function(){
      return this.$store.state.matchUser
    },
    img:function(){
      return "/php/images/" + this.$store.state.matchUser.MatchUser.filename
    }
  },
  components: {
    schedule
  },
  data(){
    return{
      isActive:false
    }
  }
}
</script>

<style scoped>
.match{
  display: flex;
  align-items: center;
  justify-content: center;
}

.match > div{
  position:fixed;
  top:10%;
  z-index:2;
  width:900px;
  min-width:800px;
  padding: 20px;
  margin:0 50px;
  background:#fff;
  overflow-y: auto;
  max-height: 777px;
  border-radius:15px;
  border:5px solid white;
}

h2{
  font-size:30px;
  text-align:left;
  margin:0 0 30px 10px;
}

#nextContainer{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top:20px;
}

#nextBtn{
  width:30%;
  height:50px;
  border:lightgray solid 2px;
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}

#nextBtn:hover{
  box-shadow: none;
  position:relative;
  top:3px;
}

#Profile{
  padding:20px;
  display:flex;
  flex-wrap:wrap;
}

img{
  display:block;
  width:200px;
  border-radius:50%;
  border:solid 2px black;
}

#P-margin{
  margin-left:60px;
  display:flex;
  font-size:22px;
}

#prof-main{
  margin-left:30px;
  text-align:left;
}

#matchContainer{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top:40px;
}

#matchContainer > div{
  width:40%;
  height:50px;
  border-radius:25px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}

h3{
  margin:9px;
  text-align: center;
  font-size:20px;
}

#point{
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

#point h3{
  color:white;
}

#goodBtn{
  box-sizing:border-box;
  border:#e0215c solid 2px;
  cursor: pointer;
}

#goodBtn:hover{
  box-shadow: none;
  position:relative;
  top:3px;
}

#goodBtn h3{
  color:#e0215c;
}

#goodBtn.active{
  background-color: #e0215c;
  color:white;
}

#goodBtn.active h3{
  color:white;
}

#goodBtn.active h3:after{
  content: "解除";
}

#message{
  width:100%;
  margin:20px;
  text-align:left;
  font-size:16px;
}

#message h3{
  margin:33px 0 10px;
  text-align: left;
  font-size:25px;
}

</style>