<template>
  <div class="Profile">
    <h1>This is an Profile page</h1>
    <p> {{tex}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tex : "",
    }
  },
  mounted(){
    this.tex = this.$route.query.shayan
  }, 
}
</script>
