import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface DSInterceptors {
    requestSuccess?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestError?: (error: any) => any
    responseSuccess?: (response: AxiosResponse) => AxiosResponse
    responseError?: (error: any) => any
}

export interface DSRequestConfig extends AxiosRequestConfig {
    interceptors?: DSInterceptors
}
