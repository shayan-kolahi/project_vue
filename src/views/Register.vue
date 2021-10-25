<template>
  <div class="Register">
    <h1>This is a Register page</h1>

    <form @submit.prevent="doRegister">
      <div class="mb-3">
        <label for="Name" class="form-label">User Name</label>
        <input type="text" class="form-control" id="Name" v-model="Name" />
      </div>
      <div class="mb-3">
        <label for="Password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="Password"
          v-model="Password"
        />
      </div>
      <div class="mb-3">
        <label for="Repeat-Password" class="form-label">Repeat Password</label>
        <input
          type="password"
          class="form-control"
          id="Repeat-Password"
          v-model="Password2"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "",
      Password: "",
      NameE: null,
      PasswordE: null,
      NameEM: null,
      PasswordEM: null,
      Password2: "",
      Password2E: null,
      Password2EM: null,
    };
  },
  methods: {
    doRegister() {
      let condition = true;
      if (this.Name.length < 5) {
        this.NameE = true;
        condition = false;
        alert("User Name Error");
        if (this.Name.length === 0) {
          this.NameEM = "NameEM_1";
        } else {
          this.NameEM = "NameEM_2";
        }
      } else {
        this.NameE = false;
        this.NameEM = "";
      }
      if (this.Password.length < 6) {
        this.PasswordE = true;
        condition = false;
        alert("Password Error");
        if (this.Password.length === 0) {
          this.PasswordEM = "PasswordEM_1";
        } else {
          this.PasswordEM = "PasswordEM_2";
        }
      } else {
        this.PasswordE = false;
        this.PasswordEM = "";
      }
      if (this.Password2.length < 6) {
        this.Password2E = true;
        condition = false;
        alert("Password2 Error");
        if (this.Password2.length === 0) {
          this.Password2EM = "Password2EM_1";
        } else {
          this.Password2EM = "Password2EM_2";
        }
      } else {
        this.Password2E = false;
        this.Password2EM = "";
      }

      if (this.Password != this.Password2) {
          condition = false;
        this.Password2E = true;
        this.Password2 = true;
        this.Password2EM = "Password2EM_1";
        alert("Password2 Error");
      } else {
        if (!this.Password2EM && !this.PasswordEM) {
            this.Password2EM = "Password2EM_1";
            // alert("Password2 Error");
        }
      }

      if (condition) {
        this.$store.commit("login", `${this.Name} : ${this.Password}`);
        this.$router.replace({path: '/profile' , query : {Name : this.Name.toLowerCase()}})
      }
    },
  },
};
</script>