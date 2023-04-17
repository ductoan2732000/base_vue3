import type { ParamsLogin } from '@/modal/login'
import type { AxiosInstance } from 'axios'
export interface RepositoryLoginProps {
  login: (params: ParamsLogin) => Promise<any>
}

export const RepositoryLogin = ($axios: AxiosInstance): RepositoryLoginProps => ({
  login(params: ParamsLogin): Promise<any> {
    return $axios.post('/login', params)
  }
})
