import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { feachBannersAction, feachHotRecommend, feachNewAlbum } from './store'
import { useAppDispatch } from '@/store'

import TopBanner from './c-cpns/top-banner'
import { RecommendLeft, RecommendRight, RecommendSection, RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

interface IProps {
    children?: ReactNode
}

const Recommend = memo<IProps>(() => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(feachBannersAction())
        dispatch(feachHotRecommend())
        dispatch(feachNewAlbum())
    }, [])

    return (
        <RecommendWrapper>
            <TopBanner />
            <RecommendSection className="content">
                <RecommendLeft className="left">
                    <HotRecommend />
                    <NewAlbum />
                </RecommendLeft>
                <RecommendRight className="right">right</RecommendRight>
            </RecommendSection>
        </RecommendWrapper>
    )
})

export default Recommend
