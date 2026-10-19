import { memo } from 'react'
import type { ReactNode } from 'react'

import { formatCount, getImageSize } from '@/utils/format'

import { SongMenuItemWrapper } from './style'

interface ItemData {
    name: string
    picUrl: string
    playCount: number
}

interface IProps<T extends ItemData> {
    children?: ReactNode
    item?: T
}

const SongMenuItem = memo<IProps<ItemData>>((props) => {
    const { item } = props
    return (
        <SongMenuItemWrapper>
            <div className="top">
                <img src={getImageSize(item?.picUrl)} alt="" />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            <span className="count">{formatCount(item?.playCount)}</span>
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="bottom">{item?.name}</div>
        </SongMenuItemWrapper>
    )
})

export default SongMenuItem
