<template>
  <div class="Watch">
    <h1>This is a TotalWatch page</h1>
    <hr />

    <div class="d-flex justify-content-between align-items-center">
      <span>All : {{this.listLength}}</span>
      <router-link class="nav-link active" to="/Watch">Back</router-link>
    </div>

    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">date</th>
      <th scope="col">time entrance</th>
      <th scope="col">time leaving</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>



    <tr v-for="(index , i ) in list" :key="i">
      <th scope="row">{{ index.id }}</th>
      <td>{{index.name}}</td>
      <td>{{index.date}}</td>
      <td>{{index.time_entrance}}</td>
      <td>{{index.time_leaving}}</td>
      <td>{{index.Explanation}}</td>
    </tr>

  </tbody>
    <!-- {{this.list.name}} -->
</table>


  </div>
</template>

<script>
export default {
  data() {
    return{
      list : null,
      listLength : null ,
    }
  },
  methods: {
  },
  mounted() {
    let getItem = JSON.parse(localStorage.getItem("arr"));
    this.list = getItem.slice().reverse();
    this.listLength = getItem.length;
  }
}
</script>

<style scoped></style>
