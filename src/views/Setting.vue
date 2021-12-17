<template>
 <div class="setting">
    <h1>設定</h1> 

    <br><br>

    <div class="mypro">
      <Mypro/><br>
    </div>
    <br><br>
    <div class="mysche">
      <Mysche/><br>
    </div>
    <br><br>
  </div>
</template>

<script>
import Mypro from '@/components/Mypro.vue'
import Mysche from '@/components/Mysche.vue'

export default {
  components: {
    Mypro,
    Mysche
  }
}

</script>

<style scoped>

.mypro{
  background: white;
  margin: 0 auto;
  padding: 30px;
  width: 80%;
  border-bottom: solid 3px;
  box-shadow: 0 3px 6px black;
  border-radius: 10px;
  overflow: hidden;
}

.mysche{
  background: white;
  margin: 0 auto;
  padding: 30px;
  width: 80%;
  border-bottom: solid 3px;
  box-shadow: 0 3px 6px black;
  border-radius: 10px;
}

</style>