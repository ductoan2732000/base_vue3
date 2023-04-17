import axios from 'axios'
import { RepositoryFactory } from '@/repositories/repository'
import type { RepositoriesInterface } from '@/repositories/repository'
const http = axios.create({
  baseURL: 'https://mypage-sekisuihouse.devsv.com',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
http.interceptors.request.use(
  (config: any) => {
    const token = 'ctx.app.$auth.getUserToken(true)'
    if (!token) {
      return
    }
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    alert(error)
    return Promise.reject(error)
  }
)

const repositories = (name: keyof RepositoriesInterface) => {
  return RepositoryFactory.create(name)(http)
}

export default repositories
