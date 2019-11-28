<template>
  <div class="awards-training">
    <ModuleHeading class="module-heading" :title="title" />
    <div class="list">
      <ul>
        <li>
          Customer Champion Award.
          (Amazon 2016-17).
        </li>
        <li>Accolades individual award (Avaya 2015).</li>
        <li>Outstanding Employee, connected software IT (Cisco 2013).</li>
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
export default class Awards extends Vue {
  title: string;
  constructor() {
    super();
    this.title = "Awards";
  }
}
</script>
<style lang="scss" scoped>
.awards-training {
  margin: 50px 20px;

  .list {
    margin: 20px 10px;

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