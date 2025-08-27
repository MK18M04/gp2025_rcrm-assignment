<template>
  <div class="bottom-tabs-card">
    <div class="tabs-header">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-link', { active: currentTab === tab.name }]"
        @click="currentTab = tab.name"
      >
        {{ tab.label }}
      </div>
    </div>

    <div class="tabs-content">
      <div v-if="currentTab === 'AllDetails'" class="content-panel">
        <p>
          This is the content for the All Details tab. It would contain all the candidate's
          information in a comprehensive view.
        </p>
      </div>

      <div v-if="currentTab === 'AssignedJobs'" class="content-panel assigned-jobs-panel">
        <div class="assigned-jobs-header">
          <span class="header-text">Assigned Job to William Sample</span>
          <div class="action-buttons">
            <button class="btn assign-btn">Assign To Job</button>
            <button class="btn view-all-btn">View All Assigned Jobs</button>
          </div>
        </div>

        <div >
          <div v-for="job in assignedJobs" :key="job.id" class="job-item">
            <div class="profile">
              <div class="initials-circle">
                {{ job.initials }}
              </div>
              <div class="details">
                <span class="job-title">{{ job.title }}</span>
                <span class="job-company">Recruit CRM</span>
              </div>
            </div>
              <div class="status-info">
                <div class="user-info">
                  <i class='bx bx-user-circle'></i>
                  <span class="assigned">{{ job.assignedBy }}</span>
                </div>
                <div class="user-info">
                  <i class='bx bx-timer'></i>
                  <span class="date">{{ job.date }}</span>
                </div>
              </div>
            <div class="status-badge">{{ job.status }}</div>
            <div>
              <button class="btn-link">View Files</button>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox" :checked="true" />
                <span class="slider round"></span>
              </label>
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
  { name: 'AllDetails', label: 'All Details' },
  { name: 'AssignedJobs', label: 'Assigned Jobs' },
  { name: 'RelatedEmails', label: 'Related Emails' },
  { name: 'CandidateQuestions', label: 'Candidate Questions' },
  { name: 'Hotlists', label: 'Hotlists' },
  { name: 'RelatedDeals', label: 'Related Deals' },
  { name: 'ContactPitched', label: 'Contact(s) Pitched' },
])

const currentTab = ref('AssignedJobs')

const assignedJobs = ref([
  {
    id: 1,
    initials: 'M',
    title: 'Senior Product Manager',
    assignedBy: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
    assigned: true,
  },
  {
    id: 2,
    initials: 'M',
    title: 'Senior Product Manager',
    assignedBy: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
    assigned: true,
  },
  {
    id: 3,
    initials: 'M',
    title: 'Senior Product Manager',
    assignedBy: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
    assigned: true,
  },
])
</script>

<style lang="scss">
@import '../styles/candidate-assignments.scss';
</style>
