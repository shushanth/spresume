<template>
  <div class="technical-skills">
    <ModuleHeading class="module-heading" :title="title" />
    <div class="skill-list">
      <SkillView skill="Javascript" experience="7Y"></SkillView>
      <SkillView skill="ES6" experience="4Y"></SkillView>
      <SkillView skill="ES7" experience="2Y"></SkillView>
      <SkillView skill="ESNext" experience="2Y"></SkillView>
      <SkillView skill="HTML" experience="7Y" ></SkillView>
      <SkillView skill="HTML5" experience="5Y"></SkillView>
      <SkillView skill="CSS" experience="7Y"></SkillView>
      <SkillView skill="CSS3" experience="5Y"></SkillView>
      <SkillView skill="SASS(scss)" experience="5Y"></SkillView>
      <SkillView skill="Typescript" experience="3Y"></SkillView>
      <SkillView skill="NodeJS" experience="4Y"></SkillView>
      <SkillView skill="Java" experience="1Y"></SkillView>
      <SkillView skill="Spring-mvc" experience="1Y"></SkillView>
      <SkillView skill="expressJS" experience="3Y"></SkillView>
      <SkillView skill="Angular" experience="5Y"></SkillView>
      <SkillView skill="React" experience="5Y"></SkillView>
      <SkillView skill="Vue" experience="6M"></SkillView>
      <SkillView skill="Redux" experience="4Y"></SkillView>
      <SkillView skill="React-native" experience="2Y"></SkillView>
      <SkillView skill="Flutter" experience="6M"></SkillView>
      <SkillView skill="D3" experience="2Y"></SkillView>
      <SkillView skill="Rxjs" experience="3Y"></SkillView>
      <SkillView skill="Redux-observables" experience="3Y"></SkillView>
      <SkillView skill="mongodb" experience="3Y"></SkillView>
      <SkillView skill="Jasmine" experience="5Y"></SkillView>
      <SkillView skill="Jest" experience="3Y"></SkillView>
      <SkillView skill="Karma" experience="4Y"></SkillView>
      <SkillView skill="GraphQl" experience="6M"></SkillView>
      <SkillView skill="Webpack" experience="4Y"></SkillView>
      <SkillView skill="Rollup" experience="1Y"></SkillView>
      <SkillView skill="Git" experience="4Y"></SkillView>
      <SkillView skill="Gitlab" experience="2Y"></SkillView>
      <SkillView skill="Npm" experience="6Y"></SkillView>
      <SkillView skill="Yarn" experience="4Y"></SkillView>
      <SkillView skill="grunt" experience="3Y"></SkillView>
      <SkillView skill="Docker" experience="1Y"></SkillView>
      <SkillView skill="AWS" experience="2Y"></SkillView>
      <SkillView skill="EC2" experience="2Y"></SkillView>
      <SkillView skill="Jenkins" experience="2Y"></SkillView>
      <SkillView skill="Nginx"></SkillView>
      <SkillView skill="OOP"></SkillView>
      <SkillView skill="REST"></SkillView>
      <SkillView skill="Microservices"></SkillView>
      <SkillView skill="Microfrontend"></SkillView>
      <SkillView skill="Test driven development"></SkillView>
      <SkillView skill="Data driven development"></SkillView>
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