
import ApplicationView from "../views/ApplicationView.vue";
import ConfirmationPage from "../components/ConfirmationPage.vue";
import CandidateForm from "../components/CandidateForm.vue";
import restrictAccessIfDirectAccessed from "../router/router-guard"

const BASE_PATH = '/application-profile'

const routes = [
    {
      path: BASE_PATH,
      name: 'application-details',
      component: ApplicationView, 
    },
    {
      path: BASE_PATH + '/candidate-details',
      name: 'candidate-details',
      component: CandidateForm,
      meta: {
        requiresAuth: true
      },
      beforeEnter: [restrictAccessIfDirectAccessed],
    },
    {
      path: BASE_PATH + '/confirmation',
      name: 'confirmation-page',
      component: ConfirmationPage,
      meta: {
        requiresAuth: true
      },
      beforeEnter: [restrictAccessIfDirectAccessed],
    },
  ];

export default routes;