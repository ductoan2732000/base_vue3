import type { App, InjectionKey } from 'vue'
import type { ParamsLogin } from '@/modal/login'

export const useLogin = (currentApp: App<Element>) => {
  const $repositories = currentApp.config.globalProperties.repositories('login')
  const login = async (params: ParamsLogin) => {
    const response: any = await $repositories('login').login(params)
    return response
  }

  return {
    login
  }
}

export type ComposableLoginType = ReturnType<typeof useLogin>
export const composableShowroomKey: InjectionKey<ComposableLoginType> = Symbol('useLogin')
