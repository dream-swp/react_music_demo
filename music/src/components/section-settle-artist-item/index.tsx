import { memo } from 'react'
import type { ReactNode } from 'react'
import ArtistItemWrapper from './style'
import { getImageSize } from '@/utils/format'

interface ItemData {
    name: string
    picUrl: string
    alias: string[]
}

interface IProps<T extends ItemData> {
    children?: ReactNode
    item?: T
    to?: string
}

const SettleArtistItem = memo<IProps<ItemData>>((props) => {
    const { item, to } = props
    return (
        <ArtistItemWrapper>
            <a href={to} className="item">
                <img src={getImageSize(item?.picUrl, 62)} alt="" />
                <div className="info">
                    <div className="singer">{item?.name}</div>
                    <div className="desc">{item?.alias.join(' ')}</div>
                </div>
            </a>
        </ArtistItemWrapper>
    )
})

export default SettleArtistItem
