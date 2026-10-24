import { memo } from 'react'
import type { ReactNode } from 'react'

import TopRankingWrapper from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

interface IProps {
    children?: ReactNode
}

const TopRanking = memo<IProps>(() => {
    const { rankings } = useAppSelector(
        (state) => ({
            rankings: state.recommend.rankings
        }),
        shallowEqualApp
    )

    return (
        <TopRankingWrapper>
            <SectionHeaderV1 title="榜单" morePath="/discover/ranking" />
            <div className="content">
                {rankings.map((item) => {
                    return <TopRankingItem key={item.id} item={item} />
                })}
            </div>
        </TopRankingWrapper>
    )
})

export default TopRanking
