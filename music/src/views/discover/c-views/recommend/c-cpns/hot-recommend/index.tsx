import { memo } from 'react'
import type { ReactNode } from 'react'
import RecommendWrapper from './style'

import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
    children?: ReactNode
}

const HotRecommend = memo<IProps>(() => {
    return (
        <RecommendWrapper>
            <SectionHeaderV1></SectionHeaderV1>
            <span>HotRecommend</span>
        </RecommendWrapper>
    )
})

export default HotRecommend
