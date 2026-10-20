import { memo } from 'react'
import type { ReactNode } from 'react'

import TopRankingWrapper from './style'
import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
    children?: ReactNode
}

const TopRanking = memo<IProps>(() => {
    return (
        <TopRankingWrapper>
            <SectionHeaderV1 title="榜单" morePath="/discover/ranking" />
            <div className="content"></div>
        </TopRankingWrapper>
    )
})

export default TopRanking
