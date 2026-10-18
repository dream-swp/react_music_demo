import { memo } from 'react'
import type { ReactNode } from 'react'
import { ItemV1Wrapper } from './style'
import { formatCount, getImageUrl } from '@/utils/format'

interface ItemV1 {
    name: string
    picUrl: string
    playCount: number
}

interface IProps<T extends ItemV1> {
    children?: ReactNode
    item?: T
}

const SectionItemV1 = memo<IProps<ItemV1>>((props) => {
    const { item } = props
    return (
        <ItemV1Wrapper>
            <div className="top">
                <img src={getImageUrl(item?.picUrl)} alt="" />
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
        </ItemV1Wrapper>
    )
})

export default SectionItemV1
