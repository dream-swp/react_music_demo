// import type { AxiosResponse } from 'axios'
import { BASE_URL, TIME_OUT } from './config'
import DSRequest from './request'

export const dsRequest = new DSRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export default dsRequest
