<template>
  <div class="main-class">
    <PrimaryNavbar />
    <div class="main-container">
      <TopHeader />
      <div class="container">
        <div class="content-container">
          <PageHeader />
          <CandidateDetails />
          <CandidateAssignments />
        </div>
        <div>
            <CandidateActivities />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryNavbar from '../components/PrimaryNavbar.vue'
import TopHeader from '../components/TopHeader.vue'
import PageHeader from '../components/PageHeader.vue'
import CandidateDetails from '../components/CandidateDetails.vue'
import CandidateAssignments from '../components/CandidateAssignments.vue'
import CandidateActivities from '../components/CandidateActivities.vue'
</script>

<style lang="scss">
@import '../styles/application-view.scss';
</style>
