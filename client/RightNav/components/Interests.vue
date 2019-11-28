<template>
  <div class="interest-details">
    <ModuleHeading class="module-heading" :title="title" />
    <p
      class="details"
    >Programming, Gadgets, playing cricket, football, Volley ball, Movies, Live matches, Hiking, Trance/Techno music, cooking, Fishing .</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import ModuleHeading from "../../header/components/ModuleHeading.vue";
@Component({
  components: {
    ModuleHeading
  }
})
export default class Interests extends Vue {
  title: string;
  constructor() {
    super();
    this.title = "Interests";
  }
}
</script>
<style lang="scss" scoped>
.interest-details {
  margin: 20px 10px;
  .details {
    margin: 30px 20px;
    width: 250px;
    font-weight: 300;
  }
}
</style>