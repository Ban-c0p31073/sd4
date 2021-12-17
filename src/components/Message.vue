<template>
<div id="message">
<p v-html="message"/>
</div>
</template>

<script>

export default {
  props:{
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#message{
  margin:10px;
  display:flex;
  justify-content:flex-end;
}

p{
  display:inline-block;
  background-color:lightgreen;
  padding:3px 7px;
  border-radius:5px;
  margin:0;
  max-width:60%;
}
</style>
