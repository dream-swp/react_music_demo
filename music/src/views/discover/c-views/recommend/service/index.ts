import dsRequest from '@/service'
import type { BannerResult } from '../models/top-banner'
import type { RecommendResult } from '../models/hot-recommend'
import type { NewAlbumResult } from '../models/new-album'
import type { RankingResult } from '../models/top-ranking'
import type { SettleArtistsResutl } from '../models/settle-artists'

export function getBanners() {
    return dsRequest.get<BannerResult>({
        url: '/banner?type=0'
    })
}

export function getHomeRecommend(limit = 30) {
    return dsRequest.get<RecommendResult>({
        url: '/personalized',
        params: { limit }
    })
}

export function getNewAlbum() {
    return dsRequest.get<NewAlbumResult>({
        url: '/album/newest'
    })
}

export function getPlaylistDetail(id: number) {
    return dsRequest.get<RankingResult>({
        url: '/playlist/detail',
        params: { id }
    })
}

export function getArtistList(limit = 30) {
    return dsRequest.get<SettleArtistsResutl>({
        url: '/artist/list',
        params: {
            limit
        }
    })
}
