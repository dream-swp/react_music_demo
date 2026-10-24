import type { Artist } from '@/models/artist'

export interface SettleArtistsResutl {
    more: boolean
    code: number
    artists: SettleArtist[]
}

export interface SettleArtist extends Artist {
    accountId: number
    followed: boolean
}
