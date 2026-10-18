import { memo } from 'react'
import type { ReactNode } from 'react'
import RecommendWrapper from './style'

import SectionHeaderV1 from '@/components/section-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-itme'

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
            <SectionHeaderV1
                title="热门推荐"
                keywords={['华语', '流行', '摇滚', '民谣', '电子']}
            ></SectionHeaderV1>
            <div className="recommend-list">
                {hotRecommend.map((item) => {
                    return <SongMenuItem key={item.id} item={item} />
                })}
            </div>
        </RecommendWrapper>
    )
})

export default HotRecommend
