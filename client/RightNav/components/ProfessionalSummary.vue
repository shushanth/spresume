<template>
<div class="proffesionaly-summary">
    <ModuleHeading :title="title"/>
    <section>
        <p class="desc">
            <ul>
                <li>
                    Senior Software professional with 7+ years of experience in anyalsis, design, developing, mentoring various web applications.
                </li>
                <li>
                    Extensive experience in developing professional UI web applications using front-end technologies like HTML(HTML5), CSS (CSS3), JavaScript, Angular, React JS, React-native, Vue, ES5, ES6, ES7, ESNext.
                </li>
                <li>Experience in Cross-Platform Mobile Development using React Native, Flutter based mobile apps.</li>
                <li>
                    Experienced in devloping full stack applications and developed higly scalable backend services using nodeJS, JAVA and spring MVC including API development. 
                </li>
                <li>
                    Built and deployed Docker containers to break up monolithic app into microservices, improving developer workflow, increasing scalability, and optimizing speed.
                </li>
                <li>Good knowledge and working capabilites with versioning tools like Git, Gitlab, SVN and Jenkins.</li>
                <li>Worked on CI/CD pipelines for code deployment using cloud based infrastructures.</li>
                <li>
                    Experience in all stages of software development cycle for dynamic web, with continually learning, prototyping and adapting new technologies.
                </li>
                <li>Proven leader with excellant intepersonal and motivational expertise to develop and work highly collaborative functonal teams.</li>
            </ul>
        </p>
    </section>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";

import ModuleHeading from '../../header/components/ModuleHeading.vue';

@Component({
  components: {
    ModuleHeading,    
  }
})
export default class ProfessionalSummary extends Vue {
  private title: string;
  constructor() {
    super();
    this.title = 'Professional summary';
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/_vars.scss";

.proffesionaly-summary {
  padding-left: 15px;
  margin: 40px 0 10px 0;

  .desc {
    margin: 10px 0;
    width: calc(100% - 120px);

    ul {
      margin-left: 20px; 

      li {
        font-size: 14px;
      }
    }
  }
}
</style>