<template>
  <div class="candidate-details-container">
    <h2>Candidate Details</h2>
    <form @submit.prevent="saveChanges" class="edit-form-view">
      <div class="form-grid">
        <div class="form-field">
          <label for="Name" class="required-label">Name</label>
          <input type="text" id="Name" v-model="form.name" />
        </div>
        <div class="form-field">
          <label for="phoneNumber" class="required-label">Phone Number</label>
          <input type="text" id="phoneNumber" v-model="form.phone" />
        </div>
        <div class="form-field">
          <label for="emailId" class="required-label">Email Id</label>
          <input type="text" id="email" v-model="form.email" />
        </div>
        <div class="form-field">
          <label for="currentOrganization" class="required-label">Current Organization</label>
          <input type="text" id="currentOrganization" v-model="form.currentOrganization" />
        </div>
        <div class="form-field">
          <label for="summary">Summary</label>
          <input type="text" id="summary" v-model="form.summary" />
        </div>
        <div class="form-field">
          <label for="currentRole" class="required-label">Current Role</label>
          <input type="text" id="currentRole" v-model="form.currentRole" />
        </div>
        <div class="form-field">
          <label for="currentEmploymentStatus">Current Employment Status</label>
          <input type="text" id="currentEmploymentStatus" v-model="form.currentEmploymentStatus" />
        </div>
        <div class="form-field">
          <label for="skills" class="required-label">Skills</label>
          <input type="text" id="skills" v-model="form.skills" />
        </div>
        <div class="form-field">
          <label for="dateOfBirth">Date of Birth</label>
          <input type="text" id="dateOfBirth" v-model="form.dateOfBirth" />
        </div>
        <div class="form-field">
          <label for="relevantExperience" class="required-label">Relevant Experience</label>
          <input type="text" id="relevantExperience" v-model="form.relevantExperience" />
        </div>
        <div class="form-field">
          <label for="totalExperience" class="required-label">Total Experience</label>
          <input type="text" id="totalExperience" v-model="form.totalExperience" />
        </div>
        <div class="form-field">
          <label for="availableFrom">Available From</label>
          <input type="text" id="availableFrom" v-model="form.availableFrom" />
        </div>
        <div class="form-field">
          <label for="salaryExpectation" class="required-label">Salary Expectation</label>
          <input type="text" id="salaryExpectation" v-model="form.salaryExpectation" />
        </div>
        <div class="form-field">
          <label for="status">Status</label>
          <input type="text" id="status" v-model="form.status" />
        </div>
        <div class="form-field">
          <label for="currentSalary" class="required-label">Current Salary</label>
          <input type="text" id="currentSalary" v-model="form.currentSalary" />
        </div>
        <div class="form-field">
          <label for="salaryType">Salary Type</label>
          <input type="text" id="salaryType" v-model="form.salaryType" />
        </div>
        <div class="form-field">
          <label for="languageSkills">Language Skills</label>
          <input type="text" id="languageSkills" v-model="form.languageSkills" />
        </div>
        <div class="form-field full-width">
          <label for="noticePeriod" class="required-label">Notice Period</label>
          <input type="text" id="noticePeriod" v-model="form.noticePeriod" />
        </div>
        <div class="form-field full-width">
          <label for="fullAddress">Full Address</label>
          <input type="text" id="fullAddress" v-model="form.fullAddress" />
        </div>
      </div>
      <div class="actions">
        <button type="submit" class="save-button">Save</button>
        <button type="button" @click="cancelEdit" class="cancel-button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CandidateForm } from '../types/candidateForm'
import { useCandidateStore } from '../stores/candidateStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const candidateDetailsToStore = useCandidateStore()

const form = ref<CandidateForm>({
  name: '',
  email: '',
  phone: '',
  currentOrganization: '',
  skills: '',
  availableFrom: '',
  currentSalary: '',
  noticePeriod: '',
  fullAddress: '',
  resume: '',
  totalExperience: '',
  summary: '',
  currentRole: '',
  currentEmploymentStatus: '',
  dateOfBirth: '',
  relevantExperience: '',
  salaryExpectation: '',
  status: '',
  salaryType: '',
  languageSkills: '',
})

const validateForm = (): boolean => {
  const requiredFields = [
    'name',
    'phone',
    'email',
    'currentOrganization',
    'skills',
    'relevantExperience',
    'totalExperience',
    'salaryExpectation',
    'currentSalary',
    'currentRole',
    'noticePeriod',
  ]

  const isFieldsValid = requiredFields.every(field => form.value[field as keyof CandidateForm]);

  if (!isFieldsValid) {
    alert('Please fill in all required fields.');
    return false;
  }

  return true;
}

const saveChanges = () => {
  if (validateForm()) {
    candidateDetailsToStore.setCandidateDetails(form.value)
    router.push({ name: 'confirmation-page' })
  }
  console.log(" DATA IS STORED IN PINIA STORE.", candidateDetailsToStore?.getCandidateDetails)
}

const cancelEdit = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    currentOrganization: '',
    skills: '',
    availableFrom: '',
    currentSalary: '',
    noticePeriod: '',
    fullAddress: '',
    resume: '',
    totalExperience: '',
    summary: '',
    currentRole: '',
    currentEmploymentStatus: '',
    dateOfBirth: '',
    relevantExperience: '',
    salaryExpectation: '',
    status: '',
    salaryType: '',
    languageSkills: '',
  }
  alert('Form data has been reset.')

  router.push({ name: "application-details"})
}
</script>

<style lang="scss">
@import '../styles/candidate-form.scss';
</style>
