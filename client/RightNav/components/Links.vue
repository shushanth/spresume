<template>
  <div class="links">
    <p v-for="(val, index) in linksConfig.values" :key="index">
      <a v-if="linksConfig.links[index]" :href="linksConfig.links[index]" target="_blank">{{val}}</a>
      <template v-else>{{val}}</template>
    </p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class Links extends Vue {
  @Prop({ default: null })
  linksConfig: Object | any;

  constructor() {
    super();
  }
}
</script>
<style lang="scss" scoped>
.links {
  display: flex;
  margin-top: 5px;
  p {
    line-height: 1;
    padding-right: 10px;
    border-right: 2px solid;
    margin-right: 12px;
    a {
      color: inherit;
    }
  }
}
</style>