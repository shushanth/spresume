<template>
  <div class="app">
    <!-- <div class="app-header">
      <Header /> 
    </div> -->
    <div class="app-content">
      <RightNav />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


// import LeftNav from "./LeftNav/components/LeftNav.vue";
import RightNav from "./RightNav/components/RightNav.vue";
import Header from "./header/components/Header.vue";
@Component({
  components: {
    FontAwesomeIcon,
    RightNav,
    Header,
  }
})
export default class App extends Vue {
  title: string;
  constructor() {
    super();
    this.title = "hello world";
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,500&display=swap');
@import 'styles/_vars.scss';

body {
  font-family: 'Work Sans', sans-serif;
  display: flex;
  justify-content: center;
  margin: 0 200px;
  -webkit-font-smoothing: antialiased;
}

* {
  margin: 0;
  padding: 0;
}

.app {
  // border: 2px solid $pf-dark-voilet-black;
  .app-header {
    display: flex;
    flex-direction: column;
    height: 25px;
    align-items: center;
    background-color: $pf-main-dark-gray;
  }

  .app-content {
    display: flex;
  }
}
</style>