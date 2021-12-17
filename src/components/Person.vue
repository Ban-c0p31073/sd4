<template>
<div>
  <div class="person" v-on:click="clickEvent">
    <img :src="img">
    <div class="about-wrapper">
      <div>
        <div id="about-n">
          <p>{{ name }}</p>
        </div>
        <div id="about-s">
          <p>＜{{ personality }}＞</p>
        </div>
      </div>
      <div id="between">
        <div id="about-c">
          <p>{{year}}年</p>
        </div>
        <div id="about-d">
          <p>{{faculty}} {{department}}</p>
        </div>
      </div>
      <div>
        <p v-html="message"/>
      </div>
    </div>
  </div>
  <div id="match">
    <div id="point">
      <h3>マッチ度：{{match}}％</h3>
    </div>
    <div id="goodBtn" @click="dislikeEvent">
      <h3>お気に入り解除</h3>
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
    dislikeEvent(){
      this.$store.commit('dislikedUser', this.id);
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
    match: String,
    id: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person{
  display:flex;
  width:500px;
  cursor: pointer;
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

#match{
  width:100%;
  display: flex;
  justify-content: space-around;
  margin-top:10px;
}

#match > div{
  width:40%;
  height:35px;
  border-radius:25px;
}

h3{
  margin:3px;
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
  background-color: #e0215c;
  color:white;
  cursor: pointer;
}

#goodBtn h3{
  color:white;
}
</style>
