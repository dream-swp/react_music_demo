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
                    <div>入住歌手</div>
                    <div>热门主播</div>
                </RecommendRight>
            </RecommendSection>
        </RecommendWrapper>
    )
})

export default Recommend
