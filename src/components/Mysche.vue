<template>
<div id="table">
<h2>時間割</h2><br><br><br>
<Myscheedit v-show="showMyscheedit" v-on:from-child="closeMyscheedit"/>
  <table class="schedule">
    <thead>
      <tr>
        <th>時間</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>{{user.Mo1}}</td>
        <td>{{user.Tu1}}</td>
        <td>{{user.We1}}</td>
        <td>{{user.Th1}}</td>
        <td>{{user.Fr1}}</td>
      </tr>
      <tr>
        <th>2</th>
        <td>{{user.Mo2}}</td>
        <td>{{user.Tu2}}</td>
        <td>{{user.We2}}</td>
        <td>{{user.Th2}}</td>
        <td>{{user.Fr2}}</td>
      </tr>
      <tr>
        <th>3</th>
        <td>{{user.Mo3}}</td>
        <td>{{user.Tu3}}</td>
        <td>{{user.We3}}</td>
        <td>{{user.Th3}}</td>
        <td>{{user.Fr3}}</td>
      </tr>
      <tr>
        <th>4</th>
        <td>{{user.Mo4}}</td>
        <td>{{user.Tu4}}</td>
        <td>{{user.We4}}</td>
        <td>{{user.Th4}}</td>
        <td>{{user.Fr4}}</td>
      </tr>
      <tr>
        <th>5</th>
        <td>{{user.Mo5}}</td>
        <td>{{user.Tu5}}</td>
        <td>{{user.We5}}</td>
        <td>{{user.Th5}}</td>
        <td>{{user.Fr5}}</td>
      </tr>
    </tbody>
  </table>
  <br>
  <div class="editbutton" @click="openMyscheedit">
    <img class="icon" src="../assets/icon/edit.png">&nbsp;&nbsp;時間割を編集
  </div>
</div>
</template>

<script>
import Myscheedit from '@/components/Myscheedit.vue'
export default {
  components: {
    Myscheedit
  },
  data(){
    return{
      showMyscheedit: false,
    }
  },
  methods: {
    openMyscheedit() {
      this.showMyscheedit = true
    },
    closeMyscheedit() {
      this.showMyscheedit = false
    }
  },
  computed :{
    user:function(){
      return this.$store.state.user
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
  float: left;
}

#table{
  margin:0 20px;
  text-align:center;
}


th {
  border: solid 1px;
  font-size: 15px;
  font-weight: bold;
  background: white;
}

td {
  border: solid 0.8px;
  font-size: 13px;
  font-weight: normal;
}

table {
  border-collapse: collapse;
  background: white;
}

th{
  width:  300px;
  height: 50px;
}

thead th{
  height: 30px;
}

th:first-child{
  width: 50px;
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
  margin-top: 20px;
  margin: 0 auto;
  padding: 0 auto;
  width: 3%;
  position: relative;
}

</style>
