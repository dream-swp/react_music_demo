export interface SettleArtistsResutl {
    more: boolean
    code: number
    artists: Artists[]
}

export interface Artists {
    accountId: number
    albumSize: number
    alias: any[]
    briefDesc: string
    followed: boolean
    id: number
    img1v1Id: number
    img1v1Id_str: string
    img1v1Url: string
    musicSize: number
    name: string
    picId: number
    picId_str: string
    picUrl: string
    topicPerson: number
    trans: string
}
