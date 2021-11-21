<template>
  <div class="Watch">
    <h1>This is a Watch page</h1>
    <hr />
    <form @submit.prevent="submit" class="col-12 row">
      <div class="my-3 form-group col-3">
        <label for="name">name</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="name"
          placeholder="name"
        />
      </div>
      <div class="my-3 form-group col-3">
        <label for="date">date</label>
        <date-picker id="date" v-model="date"></date-picker>
      </div>
      <div class="my-3 form-group col-3">
        <label for="entrance_time">entrance time</label>
        <date-picker id="entrance_time" v-model="time_entrance" type="time" />
      </div>
      <div class="my-3 form-group col-3">
        <label for="leaving_time">leaving time</label>
        <date-picker id="leaving_time" v-model="time_leaving" type="time" />
      </div>

      <div class="my-3 form-group col-3">
        <label for="Explanation">Explanation</label>
        <textarea
          class="form-control col-3"
          id="Explanation"
          rows="1"
          v-model="Explanation"
        ></textarea>
      </div>

      <div class="my-3 col-3 d-flex justify-content-center align-items-end">
        <button type="submit" class="btn btn-primary col-12">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue3-persian-datetime-picker";
export default {
  data() {
    return {
      name: "",
      date: "",
      time_entrance: "",
      time_leaving: "",
      Explanation: "",
    };
  },
  components: { DatePicker },
  methods: {
    submit() {
      if (
        this.name !== "" &&
        this.name == "shayan" &&
        this.date !== "" &&
        this.time_entrance !== "" &&
        this.time_leaving !== "" &&
        this.Explanation !== ""
      ) {
        let total = [this.name,this.date,this.time_entrance,this.time_leaving,this.Explanation];
        JSON.stringify(total);
        localStorage.setItem("mytime", total);
        this.$router.replace({path: '/TotalWatch' , query : ""})
      } else {
        alert("Please enter the fields correctly !");
      }
    },
  },
};
</script>

<style scoped></style>
