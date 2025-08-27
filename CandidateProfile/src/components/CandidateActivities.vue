<template>
  <div class="right-container">
    <div class="header-icons">
      <div class="icon-circle">
        <i class="bx bxs-file bx-flip-vertical"></i>
      </div>
      <div class="icon-circle">
        <i class="bx bxs-phone"></i>
      </div>
      <div class="icon-circle">
        <i class="bx bxs-check-circle"></i>
      </div>
      <div class="icon-circle">
        <i class="bx bxs-calendar-event"></i>
      </div>
    </div>
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-item', { active: currentTab === tab.name }]"
        @click="currentTab = tab.name"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="card-list">
      <div v-if="currentTab === 'All'" class="tab-content">

        <div v-for="card in userInformation" :key="card.authorName" class="card-container">
          <div class="card-header">
            <div class="icon-circle">
              <i class="bx bxs-file bx-flip-vertical"></i>
            </div>
            <span class="card-type">Note</span>
            <span class="card-action">To Do</span>
          </div>
          <div class="card-text">
          {{ card.text }}
          </div>
          <div class="text">{{ card.association }}</div>
          <div class="card-footer">
            <div class="author-info">
              <div class="icon-circle">
                <i class="bx bx-user-circle"></i>
              </div>
              <span class="author-name">{{ card.authorName }}</span>
            </div>
            <div class="date-info">
              <div class="icon-circle">
                <i class="bx bx-timer"></i>
              </div>
              <span>{{ card.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = ref([
  { name: 'All', label: 'All' },
  { name: 'Notes', label: 'Notes' },
  { name: 'Tasks', label: 'Tasks' },
  { name: 'Meeting', label: 'Meeting' },
  { name: 'Files', label: 'Files' },
])

const userInformation = ref([
  {
    text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
    association: "1 Association(s)",
    authorName: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
  },
   {
    text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
    association: "1 Association(s)",
    authorName: "John Baptist",
    date: "Jul 12, 2023, 11:54 am",
  },
   {
    text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
    association: "1 Association(s)",
    authorName: "John Abraham",
    date: "Jul 12, 2023, 11:54 am",
  },
])


const currentTab = ref('All')
</script>

<style lang="scss">
@import '../styles/candidate-activity.scss';
</style>
