

<template>
    <Header/>
    <router-view class="container"/>
</template>




<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header,
  },
  watch:{
    $router(){
      this.$store.commit("onStart")
    }
  },
  mounted(){
    this.$store.commit("onStart")
  }
}
</script>