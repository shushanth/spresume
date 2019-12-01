<template>
    <span class="title">{{skill}} <span v-if="experience" class="years">{{experience}}</span></span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component({})
export default class SkillView extends Vue {
  @Prop({default: ''})
  skill: string;

  @Prop({default: ''})
  experience: string;
}
</script>
<style lang="scss" scoped>
  @import "../../styles/_vars.scss";
  .title {
    display: inline-block;
    margin: 2px;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 400;
    background: $pf-orange-pink-clay;
  }
  .years {
    display: inline-block;
    font-size: 9px;
    color: $pf-dark-voilet-black;
    color: #081B33;
    padding: 4px;
    border-radius: 50%;
    border: 1px solid;
    border-color: #000;
    border-style: dotted;
  }
</style>