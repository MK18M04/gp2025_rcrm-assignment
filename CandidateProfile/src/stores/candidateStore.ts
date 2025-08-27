import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CandidateForm } from '../types/candidateForm'

export const useCandidateStore = defineStore('candidate', () => {
 const candidateDetails = ref<CandidateForm | null>(null);
  const accessRouterPages = ref(false)

  const getCandidateDetails = computed(() => {
    return candidateDetails.value
  })

  const getAccessRouterPages = computed(() => accessRouterPages.value) 

  function setCandidateDetails(data: CandidateForm) {
    candidateDetails.value = data
  }

  function grantAccess() {
    accessRouterPages.value = true
  }

  return {
    candidateDetails,
    accessRouterPages,
    getCandidateDetails,
    getAccessRouterPages,
    setCandidateDetails,
    grantAccess,
  }
})
