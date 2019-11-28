<template>
  <div class="technical-skills">
    <ModuleHeading class="module-heading" :title="title" />
    <div class="skill-list">
      <SkillView skill="Javascript"></SkillView>
      <SkillView skill="ES6"></SkillView>
      <SkillView skill="ES7"></SkillView>
      <SkillView skill="ESNext"></SkillView>
      <SkillView skill="HTML"></SkillView>
      <SkillView skill="HTML5"></SkillView>
      <SkillView skill="CSS"></SkillView>
      <SkillView skill="CSS3"></SkillView>
      <SkillView skill="SASS(scss)"></SkillView>
      <SkillView skill="Typescript"></SkillView>
      <SkillView skill="NodeJS"></SkillView>
      <SkillView skill="Java"></SkillView>
      <SkillView skill="Spring-mvc"></SkillView>
      <SkillView skill="expressJS"></SkillView>
      <SkillView skill="Angular"></SkillView>
      <SkillView skill="React"></SkillView>
      <SkillView skill="Vue"></SkillView>
      <SkillView skill="Redux"></SkillView>
      <SkillView skill="React-native"></SkillView>
      <SkillView skill="Jasmine"></SkillView>
      <SkillView skill="Jest"></SkillView>
      <SkillView skill="Karma"></SkillView>
      <SkillView skill="D3"></SkillView>
      <SkillView skill="Rxjs"></SkillView>
      <SkillView skill="Observables"></SkillView>
      <SkillView skill="Redux-observables"></SkillView>
      <SkillView skill="mongodb"></SkillView>
      <SkillView skill="GraphQl"></SkillView>
      <SkillView skill="Git"></SkillView>
      <SkillView skill="Gitlab"></SkillView>
      <SkillView skill="Webpack"></SkillView>
      <SkillView skill="Rollup"></SkillView>
      <SkillView skill="Npm"></SkillView>
      <SkillView skill="yarn"></SkillView>
      <SkillView skill="grunt"></SkillView>
      <SkillView skill="Redux"></SkillView>
      <SkillView skill="Docker"></SkillView>
      <SkillView skill="AWS"></SkillView>
      <SkillView skill="EC2"></SkillView>
      <SkillView skill="Jenkins"></SkillView>
      <SkillView skill="OOP"></SkillView>
      <SkillView skill="REST"></SkillView>
      <SkillView skill="Microservices"></SkillView>
      <SkillView skill="Microfrontend"></SkillView>
      <SkillView skill="Test driven development"></SkillView>
      <SkillView skill="Data driven development"></SkillView>
      <SkillView skill="Flutter"></SkillView>
      <SkillView skill="DOM"></SkillView>
      <SkillView skill="Webtools"></SkillView>
      <SkillView skill="VScode"></SkillView>
      <SkillView skill="SCRUM"></SkillView>
      <SkillView skill="Agile Methodologies"></SkillView>
      <SkillView skill="Sprint plan"></SkillView>
      <SkillView skill="JIRA"></SkillView>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import ModuleHeading from "../../header/components/ModuleHeading.vue";
import SkillView from "./SkillView.vue";

@Component({
  components: {
    ModuleHeading,
    SkillView,
  }
})
export default class TechnicalSkills extends Vue {
  title: string;
  constructor() {
    super();
    this.title = "Technical skills";
  }
}
</script>
<style lang="scss" scoped>
.technical-skills {
  margin: 20px;

  .skill-list {
    margin: 30px 0;
  }
}
</style>