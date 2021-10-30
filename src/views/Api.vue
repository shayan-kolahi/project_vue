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
            click to change image
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
                  <li class="list-group-item" v-for="(index , i) in bpi" :key="i">
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
      axios.get("https://dog.ceo/api/breeds/image/random").then((result) => {
        this.dOg = result.data;
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
