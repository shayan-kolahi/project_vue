<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand" to="/"><img alt="Vue logo" class="logo" src="@/assets/logo.png"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="nav" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/About">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/Profile" v-if="$store.state.isAuthenticated">Profile</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/Login" v-if="!$store.state.isAuthenticated">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/Register" v-if="!$store.state.isAuthenticated">Register</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/Logout" v-if="$store.state.isAuthenticated">Logout</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logo{
    width: 50px;
}


</style>