<template>
  <div class="list">
    <ul id="example-1">
      <ListDetail
        v-for="i in person"
        v-bind:key="i.details.id"
        v-bind:name="i.details.name"
        v-bind:personality="i.details.gender"
        v-bind:year="i.details.grade"
        v-bind:img="i.details.filename"
        v-bind:faculty="i.details.faculty"
        v-bind:department="i.details.department"
        v-bind:message="i.details.free"
        v-bind:id="i.details.id"
        v-bind:match="i.matching"
        :Mo1="i.details.Mo1" :Mo2="i.details.Mo2" :Mo3="i.details.Mo3" :Mo4="i.details.Mo4" :Mo5="i.details.Mo5" :Tu1="i.details.Tu1" :Tu2="i.details.Tu2" :Tu3="i.details.Tu3" :Tu4="i.details.Tu4" :Tu5="i.details.Tu5" :We1="i.details.We1" :We2="i.details.We2" :We3="i.details.We3" :We4="i.details.We4" :We5="i.details.We5" :Th1="i.details.Th1" :Th2="i.details.Th2" :Th3="i.details.Th3" :Th4="i.details.Th4" :Th5="i.details.Th5" :Fr1="i.details.Fr1" :Fr2="i.details.Fr2" :Fr3="i.details.Fr3" :Fr4="i.details.Fr4" :Fr5="i.details.Fr5"
      />
    </ul>
  </div>
</template>

<script>
import ListDetail from '@/components/ListDetail.vue'

export default {
  components: {
    ListDetail
  },
  name: 'lists',
  computed :{
    person:function(){
      return this.$store.state.person
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  list-style-type:none;
  padding:0 20px;
}
</style>
