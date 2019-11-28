<template>
  <h3 class="heading">{{title}}</h3>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class HeadingModule extends Vue {
  @Prop({default: ''})
  title: string | null;
};
</script>
<style lang="scss" scoped>
@import "../../styles/_vars.scss";

.heading {
  display: inline;
  background-color: $pf-gray-light-white;
  font-weight: 500;
}
</style>