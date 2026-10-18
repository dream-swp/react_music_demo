import { memo } from 'react'
import type { ReactNode } from 'react'
import RecommendWrapper from './style'

import SectionHeaderV1 from '@/components/section-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import SectionItemV1 from '@/components/section-item-v1'

interface IProps {
    children?: ReactNode
}

const HotRecommend = memo<IProps>(() => {
    const { hotRecommend } = useAppSelector(
        (state) => ({
            hotRecommend: state.recommen.hotRecommend
        }),
        shallowEqualApp
    )

    return (
        <RecommendWrapper>
            <SectionHeaderV1 title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
            <div className="recommend-list">
                {hotRecommend.map((item) => {
                    return <SectionItemV1 key={item.id} item={item} />
                })}
            </div>
        </RecommendWrapper>
    )
})

export default HotRecommend
