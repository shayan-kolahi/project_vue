<template>
  <div class="About">
    <h1>This is an about page</h1>
    <input type="text" v-model="shayan">
    <button @click="asdq1">update query params</button>
    <button @click="asdq2">remove query params</button>
</div>
</template>


<script>
export default{
  data(){
    return {
      shayan : "",
    }
  },
  methods:{
    asdq1(){
      this.$router.replace({path: '/profile' , query : {shayan : this.shayan.toLowerCase()}})
    },
    asdq2(){

    },
  }
}
</script>

