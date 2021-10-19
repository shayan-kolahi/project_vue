<template>
  <div class="Login">
    <h1>This is an Login page</h1>

    <form @submit.prevent="dologin">
      <div class="mb-3">
        <label for="Name" class="form-label">User Name</label>
        <input 
              type="text" 
              class="form-control" 
              id="Name" 
              v-model="Name" 
              />
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
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Name : "" ,
      Password : "" ,
      NameE : null ,
      PasswordE : null ,
      NameEM : null ,
      PasswordEM : null ,
    }
  },
  methods:{
      dologin(){
        let condition = true ;
        if(this.Name.length < 5 ){
          this.NameE = true ;
          condition = false ;
          alert("User Name Error")
          if (this.Name.length === 0) {
            this.NameEM = "NameEM_1"
          }else{
            this.NameEM = "NameEM_2"
          }
        }else{
          this.NameE = false ;
          this.NameEM = ""
        }
        if(this.Password.length < 6 ){
          this.PasswordE = true ;
          condition = false ;
          alert("Password Error")
          if (this.Password.length === 0) {
            this.PasswordEM = "PasswordEM_1"
          }else{
            this.PasswordEM = "PasswordEM_2"
          }
        }else{
          this.PasswordE = false ;
          this.PasswordEM = ""
        }

        if (condition) {
          this.$store.commit("login" , `${this.Name} : ${this.Password}`)
          this.$router.push("/profile")
        }
        
      }
  }
}
</script>