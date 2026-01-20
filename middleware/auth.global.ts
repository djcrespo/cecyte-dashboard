export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie('__reback_user__')

  if (user?.value === undefined && to.path !== '/auth/sign-in') {
    return navigateTo(`/auth/sign-in?redirectedFrom=${from.path}`)
  }
  return
})
