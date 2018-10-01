<template>
  <div id="app">

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><i class="fas fa-tachometer-alt"></i> Ladasho <span class="text-muted"> {{ appName }}</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
     <!-- <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a> -->
    </div>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-lg-2 bg-grey text-white sidebar">
      <nav>
        <div><i class="fas fa-tachometer-alt"></i> Dashboard</div>
        <router-link :to="{ name: 'appIndex' }">App</router-link>
        <router-link :to="{ name: 'appStart' }">Start</router-link>
        <div></div>
        <div><i class="fas fa-th-large"></i> Models</div>
    
        <router-link v-for="(model, idx) in models" :key="idx" :to="{ name: 'modelBrowse', params: { page: 1, model } }">{{ model }}</router-link>
      </nav>
    </div>
    <div class="col-sm p-4">
          <router-view/>
    </div>
  </div>
</div>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted() {
    this.fetchConfig()
    this.fetchModels()
  },
  methods: {
    ...mapActions(['fetchConfig', 'fetchModels'])
  },
  computed: {
    ...mapGetters(['appName', 'models'])
  }
}
</script>


<style lang="scss">
.sidebar {
  height:1000px;

}

.sidebar nav {

  padding: 10px;



  div {
        color: rgba(0,0,0,0.5);
    display: block;
    padding: 10px;
    transform: translate(0%, 0%, 0%);
    transition: 0.5s;
    text-align: center;
  }

  a { 
    color: rgba(255,255,255,0.9);
    color: rgba(0,0,0,0.5);
    display: block;
    padding: 10px;
    transform: translate(0%, 0%, 0%);
    transition: 0.6s;
  

  }

  a:hover {
    text-decoration: none;
    transform: translateX(20px);
        transition: 0.3s;

      color: rgba(255,255,255,0.7);

        &::before {
    content: "> ";
   
    color:rgba(0,0,0,0.5);
  }
  }


}
</style>
