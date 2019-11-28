<template>
  <div class="languages-details">
    <ModuleHeading class="module-heading" :title="title" />
    <div class="details">
      <ul>
        <li>English (verbal and writing).</li>
        <li>Hindi.</li>
        <li>Kannada.</li>
        <li>Spanish/Portugues (Basic).</li>
        <li>Deutsche (Basic).</li>
      </ul>
    </div>
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
export default class Languages extends Vue {
  title: string;
  constructor() {
    super();
    this.title = "Languages";
  }
}
</script>
<style lang="scss" scoped>
.languages-details {
  margin: 20px 10px;
  .details {
    margin: 30px 20px;
    width: 250px;

    ul {
      margin: 20px;

      li {
        padding: 10px 0;
        font-size: 13px;
      }
    }
  }
}
</style>