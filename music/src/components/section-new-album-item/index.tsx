import { memo } from 'react'
import type { ReactNode } from 'react'

import { getImageSize } from '@/utils/format'

import NewAlbumItemWrapper from './style'

interface ItemData {
    name: string
    picUrl: string
    artist: {
        name: string
    }
}

interface IProps<T extends ItemData> {
    children?: ReactNode
    item?: T
}

const NewAlbumItem = memo<IProps<ItemData>>((props) => {
    const { item } = props

    return (
        <NewAlbumItemWrapper>
            <div className="album-image">
                <img src={getImageSize(item?.picUrl, 100)} alt="" />
                <a href="" className="cover sprite_cover"></a>
            </div>
            <div className="album-info">
                <div className="name">{item?.name}</div>
                <div className="artist">{item?.artist.name}</div>
            </div>
        </NewAlbumItemWrapper>
    )
})

export default NewAlbumItem
