import axios from 'axios'

import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import type { DSRequestConfig } from './type'

class DSRequest {
    instance: AxiosInstance

    constructor(config: DSRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use(
            config.interceptors?.requestSuccess,
            config.interceptors?.requestError
        )

        this.instance.interceptors.response.use(
            config.interceptors?.responseSuccess,
            config.interceptors?.responseError
        )
    }

    request<T = any>(config: DSRequestConfig) {
        try {
            if (config.interceptors?.requestSuccess) {
                config = config.interceptors.requestSuccess(config as InternalAxiosRequestConfig)
            }
        } catch (error) {
            if (config.interceptors?.requestError) {
                config.interceptors.requestError(error)
            }
            return Promise.reject(error)
        }

        return new Promise<AxiosResponse<T>>((resolve, reject) => {
            this.instance
                .request<any, AxiosResponse<T>>(config)
                .then((res) => {
                    if (config.interceptors?.responseSuccess) {
                        res = config.interceptors.responseSuccess(res)
                    }
                    resolve(res)
                })
                .catch((error) => {
                    if (config.interceptors?.requestError) {
                        error = config.interceptors.requestError(error)
                    }
                    reject(error)
                })
        })
    }

    get<T = any>(config: DSRequestConfig) {
        return this.request<T>({ ...config, method: 'GET' })
    }

    post<T = any>(config: DSRequestConfig) {
        return this.request<T>({ ...config, method: 'POST' })
    }

    delete<T = any>(config: DSRequestConfig) {
        return this.request<T>({ ...config, method: 'DELETE' })
    }

    patch<T = any>(config: DSRequestConfig) {
        return this.request<T>({ ...config, method: 'PATCH' })
    }
}

export default DSRequest
