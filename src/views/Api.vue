<template>
  <div class="Api">
    <h1>This is an Api page</h1>
    <hr />
    <section>
      <div class="" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Predict age based on a name</h5>
            </div>
            <div class="modal-body">
              <input
                v-model="name"
                @keyup.enter="click"
                type="text"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="modal-footer ">
              <button type="button" @click="click" class="btn btn-primary">
                Click
              </button>
              <span v-if="is">
                <!-- <span>Name : {{ list.name }}</span> -->
                <span>Age : {{ list.age }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <div class="card" style="width: 500px; margin: 0 auto ;">
        <img :src="dOg.message" class="card-img-top" alt="1" />
        <div class="card-body">
          <h5 class="card-title">random images dog</h5>
          <button @click="apidog" class="btn btn-primary">
          <h6 v-if="!loding2" class="m-0">click to change image</h6>

          <div v-if="loding2" class="spinner-border text-light" role="status">
            <span class="sr-only"></span>
          </div>

          </button>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <div style="width: 500px; margin: 0 auto ;" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ Bitcoin.chartName }} price index</h5>
              <p class="modal-title">updated : {{ time }}</p>
            </div>
            <div class="modal-body">
              <p class="text-justify">{{ Bitcoin.disclaimer }}</p>

              <div class="card">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    v-for="(index, i) in bpi"
                    :key="i"
                  >
                    {{ index.code }} :
                    {{ index.rate }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <div class="d-flex flex-column align-items-center justify-content-center">
        
        <button @click="ApiClick" type="button" class="mb-3 btn btn-primary">
          <h6 v-if="!loding" class="m-0">Click</h6>

          <div v-if="loding" class="spinner-border text-light" role="status">
            <span class="sr-only"></span>
          </div>

        </button>
        <div class="w-100 d-flex flex-wrap">
          <div class="col-12 col-lg-4 p-2" v-for="(index, i) in user" :key="i">
            <div class="card">
              <div class="card-header">id is : {{ index.id }}</div>
              <div class="card-body" style="height: 240px ;">
                <h5 class="card-title">{{ index.title }}</h5>
                <p class="card-text my-4">
                  {{ index.body }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      list: "",
      is: false,
      dOg: "",
      Bitcoin: [],
      time: [],
      bpi: [],
      user: [],
      status: 0,
      loding: false,
      loding2: false,
    };
  },
  methods: {
    click() {
      this.is = true;
      axios.get(`https://api.agify.io/?name=${this.name}`).then((result) => {
        this.list = result.data;
      });
    },
    apidog() {
      this.loding2 = true;
      axios.get("https://dog.ceo/api/breeds/image/random").then((result) => {
        this.dOg = result.data;
        this.loding2 = false;
      });
    },
    bit() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((result) => {
          this.Bitcoin = result.data;
          this.time = result.data.time.updated;
          this.bpi = result.data.bpi;
        });
    },
    ApiClick() {
      this.loding = true;
      axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
        this.user = result.data;
        this.loding = false;
      });
    },
    ApiClick() {
      this.loding = true;
      axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
        this.user = result.data;
        this.loding = false;
      });
    },
  },
  mounted() {
    this.apidog();
    this.bit();
  },
};
</script>

<style scoped>
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
