import type { Artist } from '@/models/artist'

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
    artist: AlbumArtist
    songs: any
    alias: any[]
    status: number
    copyrightId: number
    commentThreadId: string
    artists: AlbumArtist[]
    paid: boolean
    onSale: boolean
    picId_str: string
}

export interface AlbumArtist extends Artist {}
