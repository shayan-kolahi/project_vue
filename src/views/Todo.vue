<template>
  <div class="Todo">
    <h1>This is an Todo page</h1>

    <div class="input-group mb-3">
      <input
        @keyup.enter="click"
        v-model="text"
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button @click="click" class="btn btn-success" id="basic-addon2">
          Click
        </button>
      </div>
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Text</th>
          <th scope="col">delet</th>
          <th scope="col">bookmark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>first</td>
          <td>
            <button
              @click="remove($event)"
              type="button"
              class="btn btn-danger"
            >
              X
            </button>
          </td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
          </td>
        </tr>

        <tr v-for="(index, i) in list" :key="i">
          <th scope="row">{{ i + 2 }}</th>
          <td>{{ index }}</td>
          <td>
            <button
              @click="remove($event)"
              type="button"
              class="btn btn-danger"
            >
              X
            </button>
          </td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      list: [],
    };
  },
  methods: {
    click() {
      if (this.text !== "") {
        this.list.push(this.text);
        this.text = "";
      }
    },
    remove(event) {
      // this.list.splice(event, 1);
      let aa = event.target.parentElement.parentElement;
      aa.style.display = "none";
    },
  },
};
</script>
