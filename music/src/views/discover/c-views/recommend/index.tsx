import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'

import { useAppDispatch } from '@/store'
import { feachRecommendDatas } from './store'

import { RecommendLeft, RecommendRight, RecommendSection, RecommendWrapper } from './style'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface IProps {
    children?: ReactNode
}

const Recommend = memo<IProps>(() => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(feachRecommendDatas())
    }, [])

    return (
        <RecommendWrapper>
            <TopBanner />
            <RecommendSection className="content">
                <RecommendLeft className="left">
                    <HotRecommend />
                    <NewAlbum />
                    <TopRanking />
                </RecommendLeft>
                <RecommendRight className="right">right</RecommendRight>
            </RecommendSection>
        </RecommendWrapper>
    )
})

export default Recommend
