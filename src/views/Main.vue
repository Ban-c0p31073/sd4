<template>
  <div class="flex-wrapper">
    <div id="nav">
      <Sidebar class="sidebar-area"/>
    </div>
    <div class="scafold-wrapper">
      <div class="width-limit">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue' // サイドバー

export default {
  components: {
    Sidebar
  }
}
</script>

<style>

.flex-wrapper{
  display: flex;
}

#nav{
  width:200px;
  z-index:5;
}

.scafold-wrapper {
  height: 100vh;
  flex:1;
  overflow-y: scroll;
}

.scafold-wrapper::-webkit-scrollbar {
  display:none;
}

.width-limit{
  min-width:600px;
  margin:auto;
}

h1 {
  margin: 0px;
  padding: 20px;
  text-align: left;
  background: transparent;
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 0px 5px 10px black;
}
</style>