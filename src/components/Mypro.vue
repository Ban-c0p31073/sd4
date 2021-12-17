<template>
<h2>プロフィール</h2><br><br><br>
<div class="mypro">
<Myproedit v-show="showMyproedit" v-on:from-child="closeMyproedit" />

  <img class="myicon" src="@/assets/plof/1.png">

  <div class="mypro-card">

    <div class="mypro-name" id="1">
      <h3>{{user.name}}</h3>
    </div>

    <div class="mypro-detail" id="2">
      <div class="mypro-department">
        <h4>{{user.faculty}} {{user.department}}</h4>
      </div>
      <div class="mypro-year">
        <h4>{{user.grade}}年</h4>
      </div>
      <div class="mypro-sex">
        <h4>{{user.gender}}</h4>
      </div>
    </div>

    <div class="mypro-message" id="3">
      <p>{{user.free}}</p>
    </div>
    <br>
    <div class="editbutton" @click="openMyproedit">
      <img class="icon" src="@/assets/icon/edit.png">  プロフィールを編集
    </div>
  </div>
</div>
</template>

<script>
import Myproedit from '@/components/Myproedit.vue'
export default {
  computed :{
    user:function(){
      return this.$store.state.user
    }
  },
  components: {
    Myproedit
  },
  data(){
    return{
      showMyproedit: false,
    }
  },
  methods: {
    openMyproedit() {
      this.showMyproedit = true
    },
    closeMyproedit() {
      this.showMyproedit = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2{
  margin: 0px;
  padding: 0px;
  font-size: 30px;
  text-align: left;
}

.mypro {
  color: black;
  text-align: center;
}

.myicon {
  margin: 0 auto ;
  width: 150px;
  height: 150px;
  background-image: url(../assets/plof/plof.png);
  border-radius: 100%;
}

h3 {
  margin: 0px;
  padding: 10px;
}

.mypro-name {
  font-size: 30px;
  font-weight: bold;
}

.mypro-detail {
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.mypro-department {
  font-size: 15px;
  font-weight: bold;
}

.mypro-year {
  font-size: 15px;
  font-weight: bold;
}

.mypro-sex {
  font-size: 15px;
  font-weight: bold;
}

.mypro-message {
  margin-top: 5px;
  text-align: center;
  font-weight: normal;
}

.editbutton {
  width: 500px;
  margin: 0px auto;
  padding: 5px;
  font-size: 15px;
  position: relative;
  text-align: center;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  border-radius: 10px;
}

.icon{
  margin: 0 auto;
  padding: 0 auto;
  width: 3%;
  position: relative;
}


</style>