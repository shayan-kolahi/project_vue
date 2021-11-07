<template>
  <div class="Shopping">
    <h1>This is an Shopping page</h1>
    <hr />
    <div class="w-100 d-flex flex-wrap">
      <div class="p-2 col-4" v-for="(index, i) in list" :key="i">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="index.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ index.category }}</h5>
            <p class="card-text">
              {{ index.description }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">price : {{ index.price }}</li>
            <li class="list-group-item">rating : {{ index.rating.count }}</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-primary" @click="add(index.id)">add to cart</button>
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
  methods:{
    add(value){
      console.log(value);
    }
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      this.list = result.data;
      console.log(this.list);
    });
  },
};
</script>
<style scoped>
.card-img-top {
  height: 250px;
  object-fit: contain;
}
.card-text:last-child {
  height: 200px;
  overflow-y: auto;
  padding: 10px 5px;
  text-align: justify;
  line-height: 2;
}
</style>
