import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { feachBannersAction, feachHotRecommend } from './store'
import { useAppDispatch } from '@/store'

import TopBanner from './c-cpns/top-banner'
import { RecommendLeft, RecommendRight, RecommendSection, RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
    children?: ReactNode
}

const Recommend = memo<IProps>(() => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(feachBannersAction())
        dispatch(feachHotRecommend())
    }, [])

    return (
        <RecommendWrapper>
            <TopBanner />
            <RecommendSection className="content">
                <RecommendLeft className="left">
                    <HotRecommend></HotRecommend>
                </RecommendLeft>
                <RecommendRight className="right">right</RecommendRight>
            </RecommendSection>
        </RecommendWrapper>
    )
})

export default Recommend
