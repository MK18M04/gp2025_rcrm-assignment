
import { useCandidateStore } from "../stores/candidateStore";

function restrictAccessIfDirectAccessed(to) {
  const permissionToRoute = useCandidateStore();

  if (permissionToRoute?.accessRouterPages && to?.meta?.requiresAuth) {
    return; 
  } else {
    if (!permissionToRoute?.accessRouterPages) {
      return { name: "application-details" };
    }
  }
}

export default restrictAccessIfDirectAccessed;