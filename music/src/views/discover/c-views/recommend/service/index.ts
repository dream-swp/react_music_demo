import dsRequest from '@/service'
import type { BannerResult } from '../models/banner'

export function getBanners() {
    return dsRequest.get<BannerResult>({ url: '/banner?type=0' })
}
