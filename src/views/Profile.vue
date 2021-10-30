<template>
  <div class="Profile">
    <h1>This is an Profile page</h1>
    <p>with query params : ) <b>{{tex}}</b></p>
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
    this.tex = this.$route.query.Name
  }, 
}
</script>
