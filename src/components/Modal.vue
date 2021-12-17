<template>
  <div>
    <div id="overlay" v-on:click="clickEvent">
      <div id="content" v-on:click="stopEvent">
        <h2>プロフィール</h2>
        <div id="Profile">
          <img :src="img">
          <div id="P-margin">
            <div>
              <p>氏名</p>
              <p>学年</p>
              <p>学科</p>
            </div>
            <div id="prof-main">
              <p>{{name}}</p>
              <p>{{year}}年</p>
              <p>{{faculty}} {{department}}</p>
            </div>
          </div>
          <div id="message">
            <p v-html="message"/>
          </div>
          <schedule :Mo1="Mo1" :Mo2="Mo2" :Mo3="Mo3" :Mo4="Mo4" :Mo5="Mo5" :Tu1="Tu1" :Tu2="Tu2" :Tu3="Tu3" :Tu4="Tu4" :Tu5="Tu5" :We1="We1" :We2="We2" :We3="We3" :We4="We4" :We5="We5" :Th1="Th1" :Th2="Th2" :Th3="Th3" :Th4="Th4" :Th5="Th5" :Fr1="Fr1" :Fr2="Fr2" :Fr3="Fr3" :Fr4="Fr4" :Fr5="Fr5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schedule from '@/components/schedule.vue'
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
    img:String,
    faculty: String,
    department: String,
    message: String,
    Mo1: String,Mo2: String,Mo3: String,Mo4: String,Mo5: String,Tu1: String,Tu2: String,Tu3: String,Tu4: String,Tu5: String,We1: String,We2: String,We3: String,We4: String,We5: String ,Th1: String,Th2: String,Th3: String,Th4: String,Th5: String,Fr1: String,Fr2: String,Fr3: String,Fr4: String,Fr5: String
  },
  components: {
    schedule
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  position:fixed;
  top:10%;
  z-index:2;
  width:900px;
  min-width:800px;
  padding: 20px;
  margin:0 50px 0 250px;
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

#message{
  width:100%;
  margin:20px;
  text-align:left;
  font-size:16px;
}

</style>
