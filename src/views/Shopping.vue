<template>
  <div class="Shopping">
    <h1>This is an Shopping page</h1>
    <hr />
    <router-link
      :class="[this.item ? '' : 'disabled', 'btn btn-primary']"
      to="/Cart"
      >Cart</router-link
    >
    <hr />
    <div class="d-flex justify-content-center">
      <div v-if="loding" class="spinner-border text-dark" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
    <div class="w-100 d-flex flex-wrap">
      <div class="p-2 col-3" v-for="(index, i) in list" :key="i">
        <div class="card">
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
            <button class="btn btn-primary" @click="add(index.id)">
              add to cart
            </button>
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
      item: false,
      loding: false,
    };
  },
  methods: {
    add(e) {
      this.item = true;
      var item = this.list.findIndex((index) => index.id == e);
      console.log(item);
      if (item != -1) {
        let cart = localStorage.getItem("cart");
        if (cart) {
          cart = JSON.parse(cart);
          cart.push(this.list[item]);
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          localStorage.setItem("cart", JSON.stringify([this.list[item]]));
        }
      }
    },
  },
  mounted() {
    this.loding = true;
    axios.get("https://fakestoreapi.com/products").then((result) => {
      this.list = result.data;
      console.log(this.list);
      this.loding = false;
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
