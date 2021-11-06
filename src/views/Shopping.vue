<template>
  <div class="Shopping">
    <h1>This is an Shopping page</h1>
    <hr />
    <div class="w-100 d-flex flex-wrap">
      <div class="p-2 col-4" v-for="(index, i) in list" :key="i">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="index.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{index.category}}</h5>
            <p class="card-text">
              {{index.description}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">price : {{index.price}}</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },

  mounted() {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      this.list = result.data;
      console.log(this.list);
    });
  },
};
</script>
