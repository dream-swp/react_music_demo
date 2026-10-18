export interface RecommendResult {
    hasTaste: boolean
    code: number
    category: number
    result: HotRecommend[]
}

export interface HotRecommend {
    id: number
    type: number
    name: string
    copywriter: string
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
}
