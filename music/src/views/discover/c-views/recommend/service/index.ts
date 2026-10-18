import dsRequest from '@/service'
import type { BannerResult } from '../models/banner'
import type { RecommendResult } from '../models/recommend'

export function getBanners() {
    return dsRequest.get<BannerResult>({ url: '/banner?type=0' })
}

export function getHomeRecommend(limit = 30) {
    return dsRequest.get<RecommendResult>({ url: '/personalized', params: { limit } })
}
