import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'

import { useAppDispatch } from '@/store'
import { feachPlaylistDetail, feachRecommendDatas } from './store'

import { RecommendLeft, RecommendRight, RecommendSection, RecommendWrapper } from './style'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
    children?: ReactNode
}

const Recommend = memo<IProps>(() => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(feachRecommendDatas())
        dispatch(feachPlaylistDetail())
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
                <RecommendRight className="right">
                    <UserLogin />
                    <SettleSinger />
                    <HotAnchor />
                </RecommendRight>
            </RecommendSection>
        </RecommendWrapper>
    )
})

export default Recommend
