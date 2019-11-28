<template>
    <div class="right-nav-main-wrapper">
      <div v-on:click="onDownload" class="download-btn">
        <p v-if="!showSavePaperText">Download</p>
        <p class="save-paper-text" v-if="showSavePaperText">
          Save paper, Save trees 
          <font-awesome-icon icon="coffee"></font-awesome-icon>
        </p>
      </div>
      <NameInfo />
      <ProfessionalySummary />
      <div class="skills-experience">
        <div class="left-nav">
          <TechnicalSkills />
          <CertificationTraining />
          <EducationDetails />
          <!-- <Interests /> -->
          <Languages />
          <Awards />
          <div class="declaration">
            <p class="heading">Declartion</p>
            <p class="sign">I hereby declare that the information provided here is true to the best of my knowledge</p>
          </div>
        </div>
        <div class="right-nav">
          <SkillCarrerPath />
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";


import NameInfo from '../components/NameInfo.vue';
import ProfessionalySummary from './ProfessionalSummary.vue';
import SkillCarrerPath from './SkillsCarrerPath.vue';
import TechnicalSkills from './TechnicalSkills.vue';
import CertificationTraining from './CertificationTraining.vue';
import EducationDetails from './EducationDetails.vue';
import Interests from './Interests.vue';
import Languages from './Languages.vue';
import Awards from './Awards.vue';

@Component({
  components: {
    NameInfo,
    ProfessionalySummary,
    SkillCarrerPath,
    TechnicalSkills,
    CertificationTraining,
    EducationDetails,
    Interests,
    Languages,
    Awards,
  }
})
export default class RightNav extends Vue {
  showSavePaperText: boolean;
  constructor() {
    super();
    this.showSavePaperText = false;
  }

  onDownload() {
    this.showSavePaperText = true;
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_vars.scss';

.right-nav-main-wrapper {
  order: 2;
  flex: 22;
  padding: 2em 3em 3em 3em;

  .skills-experience {
    display: flex;
    justify-content: center;

    .left-nav {
      flex: .6;
    }

    .right-nav {
      flex: 1;
      order : 2;
      margin-top: 10px;
      margin-bottom: 10px; 
    }
  }

  .declaration {
        margin: 50px 20px;
    width: calc(100% - 100px);

    .heading {
      padding: 10px;
    }

    .sign {
      font-size: 13px;
      font-weight: normal;
      font-style: italic; 
    }
  }

  .download-btn {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;

    &-disabled {
      pointer-events: none;
    }
  }

  .save-paper-text {
    font-size: 13px;
  }
}
</style>