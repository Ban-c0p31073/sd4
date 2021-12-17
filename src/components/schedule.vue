<template>
<div id="table">
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
        <td>{{Mo1}}</td>
        <td>{{Tu1}}</td>
        <td>{{We1}}</td>
        <td>{{Th1}}</td>
        <td>{{Fr1}}</td>
      </tr>
      <tr>
        <th>2</th>
        <td>{{Mo2}}</td>
        <td>{{Tu2}}</td>
        <td>{{We2}}</td>
        <td>{{Th2}}</td>
        <td>{{Fr2}}</td>
      </tr>
      <tr>
        <th>3</th>
        <td>{{Mo3}}</td>
        <td>{{Tu3}}</td>
        <td>{{We3}}</td>
        <td>{{Th3}}</td>
        <td>{{Fr3}}</td>
      </tr>
      <tr>
        <th>4</th>
        <td>{{Mo4}}</td>
        <td>{{Tu4}}</td>
        <td>{{We4}}</td>
        <td>{{Th4}}</td>
        <td>{{Fr4}}</td>
      </tr>
      <tr>
        <th>5</th>
        <td>{{Mo5}}</td>
        <td>{{Tu5}}</td>
        <td>{{We5}}</td>
        <td>{{Th5}}</td>
        <td>{{Fr5}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>

export default {
  props:{
    Mo1: String,Mo2: String,Mo3: String,Mo4: String,Mo5: String,Tu1: String,Tu2: String,Tu3: String,Tu4: String,Tu5: String,We1: String,We2: String,We3: String,We4: String,We5: String ,Th1: String,Th2: String,Th3: String,Th4: String,Th5: String,Fr1: String,Fr2: String,Fr3: String,Fr4: String,Fr5: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table{
  margin:0 20px;
  text-align:center;
}


th,td {
  border: solid 1px;
}

table {
  border-collapse:  collapse;
}

th{
  width:  300px;
  height: 50px;
}

thead th{
  height: 30px;
}

tr th:first-child{
  width: 65px;
}

</style>
