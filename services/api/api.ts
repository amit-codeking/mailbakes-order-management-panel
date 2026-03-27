import { URIS, apiClient } from ".";

export const apis = {
  /* Auth */
  adminLoginApi: (payload: any) => apiClient.post(URIS.ADMIN_LOGIN, payload),





};