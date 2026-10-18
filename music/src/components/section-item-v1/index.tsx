import { memo } from 'react'
import type { ReactNode } from 'react'
import { ItemV1Wrapper } from './style'
import type { HotRecommend } from '@/views/discover/c-views/recommend/models/recommend'

interface IProps {
    children?: ReactNode
    item?: HotRecommend
}

const SectionItemV1 = memo<IProps>((props) => {
    const { item } = props
    return (
        <ItemV1Wrapper>
            <div className="top">
                <img src={item?.picUrl} alt="" />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            <span className="count">{item?.playCount}</span>
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
