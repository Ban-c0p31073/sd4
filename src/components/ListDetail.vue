<!-- クラスの名前めちゃくちゃ適当に付けました。ごめんなさい -->

<template>
  <li>
    <modal
      v-show="showContent"
      v-on:from-child="closeModal"
      :name="name"
      :personality="personality"
      :year="year"
      :img="imgFile"
      :department="department"
      :faculty="faculty"
      :message="message"
      :Mo1="Mo1" :Mo2="Mo2" :Mo3="Mo3" :Mo4="Mo4" :Mo5="Mo5" :Tu1="Tu1" :Tu2="Tu2" :Tu3="Tu3" :Tu4="Tu4" :Tu5="Tu5" :We1="We1" :We2="We2" :We3="We3" :We4="We4" :We5="We5" :Th1="Th1" :Th2="Th2" :Th3="Th3" :Th4="Th4" :Th5="Th5" :Fr1="Fr1" :Fr2="Fr2" :Fr3="Fr3" :Fr4="Fr4" :Fr5="Fr5"
    />
    <div class="ListDetail">
      <person
        v-on:from-child="openModal"
        :name="name"
        :personality="personality"
        :year="year"
        :img="imgFile"
        :faculty="faculty"
        :department="department"
        :message="message"
        :match="match"
        :id="id"
      />
    </div>
  </li>
</template>

<script>
import modal from '@/components/Modal.vue'
import person from '@/components/Person.vue'

export default {
  name: 'ListDetail',
  components: {
    modal,
    person
  },
  data(){
    return{
      showContent: false
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
    id: String,
    Mo1: String,Mo2: String,Mo3: String,Mo4: String,Mo5: String,Tu1: String,Tu2: String,Tu3: String,Tu4: String,Tu5: String,We1: String,We2: String,We3: String,We4: String,We5: String ,Th1: String,Th2: String,Th3: String,Th4: String,Th5: String,Fr1: String,Fr2: String,Fr3: String,Fr4: String,Fr5: String
  },
  methods: {
    openModal() {
      this.showContent = true
    },
    closeModal () {
      this.showContent = false
    }
  },
  computed :{
    imgFile:function(){
      return "/php/images/" + this.img
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListDetail{
  background-color: #fff;
  padding:20px;
  margin:20px 15px;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  border-radius: 10px;
  color:#000;
  border-bottom: 5px solid lightgray;
}

p{
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>