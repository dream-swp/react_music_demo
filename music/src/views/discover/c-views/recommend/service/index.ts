import dsRequest from '@/service'
import type { BannerResult } from '../models/banner'
import type { RecommendResult } from '../models/recommend'
import type { NewAlbumResult } from '../models/new-album'

export function getBanners() {
    return dsRequest.get<BannerResult>({ url: '/banner?type=0' })
}

export function getHomeRecommend(limit = 30) {
    return dsRequest.get<RecommendResult>({ url: '/personalized', params: { limit } })
}

export function getNewAlbum() {
    return dsRequest.get<NewAlbumResult>({ url: '/album/newest' })
}
