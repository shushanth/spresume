<template>
  <div class="app-header">
    <p class="header-title">{{headerTitle}}</p>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class Header extends Vue {
  headerTitle: String;
  constructor() {
    super();
    this.headerTitle = "shushanth_pallegar_cv(page 1 of 2)";
  }
}
</script>
<style lang="scss">
@import '../../styles/_vars.scss';

  .header-title {
    font-weight: 400;
    font-size: 12px;
    color: $pf-white;
  };
</style>