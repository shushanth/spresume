<template>
  <div class="certification-training">
    <ModuleHeading class="module-heading" :title="title" />
    <div class="list">
      <ul>
        <li>Programming in HTML5 with JavaScript and CSS3 Specialist (Microsoft License E222-5557).</li>
        <li>Provided training on javascript design patterns training and good parts.</li>
        <li>Provided training on Angular.</li>
        <li>Provided training on ES6 with React.</li>
        <li>Provided training on Docker and its usage on FE stack.</li>
        <li>Provided training on usasge of SCSS in projects. </li>
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
export default class CertificationTraining extends Vue {
  title: string;
  constructor() {
    super();
    this.title = "Certifications/Training";
  }
}
</script>
<style lang="scss" scoped>
.certification-training {
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