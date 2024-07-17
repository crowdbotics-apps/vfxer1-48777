import axios from "axios"
const vfxerAPI = axios.create({
  baseURL: "https://vfxer12-48777.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return vfxerAPI.post(`/api/v1/login/`, payload)
}
function api_v1_tgcbd_list(payload) {
  return vfxerAPI.get(`/api/v1/tgcbd/`)
}
function api_v1_tgcbd_create(payload) {
  return vfxerAPI.post(`/api/v1/tgcbd/`, payload)
}
function api_v1_signup_create(payload) {
  return vfxerAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return vfxerAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return vfxerAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return vfxerAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return vfxerAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return vfxerAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return vfxerAPI.post(`/rest-auth/logout/`)
}
function api_v1_tgcbd_retrieve(payload) {
  return vfxerAPI.get(`/api/v1/tgcbd/${payload.id}/`)
}
function api_v1_tgcbd_update(payload) {
  return vfxerAPI.put(`/api/v1/tgcbd/${payload.id}/`, payload)
}
function api_v1_tgcbd_partial_update(payload) {
  return vfxerAPI.patch(`/api/v1/tgcbd/${payload.id}/`, payload)
}
function api_v1_tgcbd_destroy(payload) {
  return vfxerAPI.delete(`/api/v1/tgcbd/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return vfxerAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return vfxerAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return vfxerAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return vfxerAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return vfxerAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return vfxerAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
export const apiService = {
  api_v1_login_create,
  api_v1_tgcbd_list,
  api_v1_tgcbd_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  api_v1_tgcbd_retrieve,
  api_v1_tgcbd_update,
  api_v1_tgcbd_partial_update,
  api_v1_tgcbd_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create
}
