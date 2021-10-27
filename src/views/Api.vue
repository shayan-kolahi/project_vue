<template>
  <div class="Api">
    <h1>This is an Api page</h1>





</div>
</template>


<script>
import axios from "axios";
export default {
  created() {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((result) => {
      console.log(result);

    })
  }
};
</script>
