export interface BannerResult {
    code: number
    trp: string[]
    banners: Banner[]
}

export interface Banner {
    targetId: number
    bigImageUrl: string
    imageUrl: string
    targetType: number
    typeTitle: string
    s_ctrp: string
    url: string
}


