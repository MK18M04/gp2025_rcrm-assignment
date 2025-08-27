<template>
  <div class="candidate-card">
    <div class="header">
      <div class="candidate-info">
        <div class="avatar-circle">
          <i class="bx bx-user"></i>
        </div>
        <div class="name-section">
          <div class="name-row">
            <span class="candidate-name">William Sample</span>
            <div class="media-icons">
              <div class="icons">
                <img src="../asserts/facebook.png" />
              </div>
              <div class="icons">
                <img src="../asserts/twitter.png" />
              </div>
              <div class="icons">
                <img src="../asserts/linkedin.png" />
              </div>
              <div class="icons">
                <img src="../asserts/github.png" />
              </div>
            </div>
          </div>
          <div class="details-row">
            <span class="role">Senior Product Manager</span>
            <span class="location">United States</span>
            <span class="city">Dallas</span>
          </div>
        </div>
      </div>
      <div class="cadidate-action">
        <span class="contact-linked">Contact Linked</span>
        <div class="icons-list">
          <div class="icon-box">
            <i class="bx bxs-star"></i>
          </div>
          <div class="icon-box">
            <i class="bx bxs-flame"></i>
          </div>
          <div class="icon-box">
            <i class="bx bxs-pencil" @click="goToCandidateForm"></i>
          </div>
          <div class="icon-box">
            <i class="bx bx-dots-vertical"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-info">
      <div class="contact-info-left">
        <div class="contact-item">
          <i class="bx bx-envelope"></i>
          <span class="title-name">williamsample@gmail.com</span>
        </div>
        <div class="contact-item">
          <i class="bx bx-phone"></i>
          <span class="title-name">+91 9021232326</span>
        </div>
      </div>
      <div class="contact-info-right">
        <div class="contact-item">
          <i class="bx bx-user-circle"></i>
          <span>Phyllis Yang</span>
        </div>
        <div class="contact-item">
          <i class="bx bx-timer"></i>
          <span>Jul 14, 2023, 4:04 pm</span>
        </div>
      </div>
    </div>

    <div class="candidate-details-grid">
      <div class="detail-item">
        <span class="label">Current Organization</span>
        <span class="value">World Bank Group</span>
      </div>
      <div class="detail-item">
        <span class="label">Summary</span>
        <span class="value">Employed</span>
      </div>
      <div class="detail-item">
        <span class="label">Skills</span>
        <span class="value">HTML, CSS, Javascript</span>
      </div>
      <div class="detail-item">
        <span class="label">Current Employment Status</span>
        <span class="value">Employed</span>
      </div>
      <div class="detail-item">
        <span class="label">Available From</span>
        <span class="value">Jul, 14, 2023</span>
      </div>
      <div class="detail-item">
        <span class="label">Date of Birth</span>
        <span class="value">15 June 1993</span>
      </div>
      <div class="detail-item">
        <span class="label">Current Salary</span>
        <span class="value">$6000</span>
      </div>
      <div class="detail-item">
        <span class="label">Relevant Experience</span>
        <span class="value">7 Years</span>
      </div>
      <div class="detail-item">
        <span class="label">Notice Period</span>
        <span class="value">90 Days</span>
      </div>
      <div class="detail-item">
        <span class="label">Salary Expectation</span>
        <span class="value">$90000</span>
      </div>
      <div class="detail-item">
        <span class="label">Full Address</span>
        <span class="value">9400 Ashton Rd, Philadelphia...</span>
      </div>
      <div class="detail-item">
        <span class="label">Status</span>
        <span class="value">Submitted to Client</span>
      </div>
      <div class="detail-item">
        <span class="label">Resume</span>
        <span class="value">Resume</span>
      </div>
      <div class="detail-item">
        <span class="label">Salary Type</span>
        <span class="value">Annual</span>
      </div>
      <div class="detail-item">
        <span class="label">Total Experience</span>
        <span class="value">5 Years</span>
      </div>
      <div class="detail-item">
        <span class="label">Language Skills</span>
        <span class="value">English(Elementary proficiency)</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCandidateStore } from '../stores/candidateStore'

const router = useRouter()
const accessStore = useCandidateStore()

const goToCandidateForm = () => {
  accessStore.accessRouterPages = true;
  router.push({ name: 'candidate-details' })
}
</script>

<style lang="scss">
@import '../styles/candidate-details.scss';
</style>
