<template>
  <div style="padding-left: 15px;">
    <div class="name-wrapper">
      <H2 class="name">Shushanth pallegar</H2>
    </div>
    <!-- <p>Web, UI front end engineer</p> -->
    <Links :linksConfig="infoConfigLinks" />
    <Links :linksConfig="socailConfigLinks" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Links from "./Links.vue";

@Component({
  components: {
    Links
  }
})
export default class NameInfo extends Vue {
  infoConfigLinks: Object;
  socailConfigLinks: Object;
  constructor() {
    super();
    this.infoConfigLinks = {
      values: ["shushanth.p@gmail.com", "+4915213789199", "Berlin, Germany"],
      links: ["mailto:shushanth.p@gmail.com", false, false]
    };
    this.socailConfigLinks = {
      values: ["Linkedin", "Github", "Stackoverflow"],
      links: [
        "https://www.linkedin.com/in/shushanth-pallegar-1b788061/",
        "https://github.com/shushanth",
        "https://stackoverflow.com/users/4229768/shushanth-pallegar"
      ]
    };
  }
}
</script>
<style scoped lang="scss">
@import "../../styles/_vars.scss";

@keyframes blink {
  from {
    background-color: $pf-orange-pink-light;
  }
  to {
    background-color: $pf-white;
  }
}

.name-wrapper {
  margin: 20px 0;
  .name {
    color: $pf-dark-voilet-black;
    // animation: blink 1s linear;
    // animation-iteration-count: infinite;
    font-size: 40px;
  }
}
</style>
