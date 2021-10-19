<template>
  <div class="Logout">
    <h1>This is an Logout page</h1>
    <button @click="dologout" class="btn btn-danger">Logout</button>
  </div>
</template>

<script>
export default {
  methods:{
      dologout(){
        this.$store.commit("logout")
        this.$router.push("/login")
      }
  }  
}
</script>
