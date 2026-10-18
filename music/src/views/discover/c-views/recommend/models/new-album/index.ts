export interface NewAlbumResult {
    code: number
    albums: Album[]
}

export interface Album {
    name: string
    id: number
    type: string
    size: number
    picId: string
    blurPicUrl: string
    companyId: number
    pic: string
    picUrl: string
    publishTime: number
    description: string
    tags: string
    company: string
    briefDesc: string
    artist: Artist
    songs: any
    alias: any[]
    status: number
    copyrightId: number
    commentThreadId: string
    artists: Artist[]
    paid: boolean
    onSale: boolean
    picId_str: string
}

export interface Artist {
    name: string
    id: number
    picId: string
    img1v1Id: string
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: string[]
    trans: string
    musicSize: number
    topicPerson: number
    img1v1Id_str: string
    picId_str?: string
}
