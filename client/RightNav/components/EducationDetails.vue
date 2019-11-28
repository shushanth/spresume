<template>
    <div class="education-details">
      <ModuleHeading class="module-heading" :title="title" />
      <div class="details">
          <p class="type"> Bachelor of Engineering(B.E)</p>
          <p class="date"> 2007 - 2011</p>
          <p class="grade">
              <span>CGPA:</span>
              <span>8.27/10</span>
          </p>
          <p>RV college of Engineering</p>
          <p>Bangalore, India</p>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ModuleHeading from "../../header/components/ModuleHeading.vue";
@Component({
  components: {
    ModuleHeading,
  }
})
export default class EducationDetails extends Vue {
  title: string;
  constructor() {
    super();
    this.title = 'Education'
  }
}
</script>
<style lang="scss" scoped>
 .education-details {
     margin: 20px 10px;
    .details {
      margin: 30px 20px;
      font-weight: 300;
    }
 }
</style>