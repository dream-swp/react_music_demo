import { memo } from 'react'
import type { ReactNode } from 'react'

import { getImageSize } from '@/utils/format'

import RankingItemWrapper from './style'
import type { Ranking } from '../../models/ranking'

interface IProps {
    children?: ReactNode
    item?: Ranking
}

const TopRankingItem = memo<IProps>((props) => {
    const { item } = props

    const tracks = item?.tracks.slice(0, 10) ?? []

    return (
        <RankingItemWrapper>
            <div className="header">
                <div className="image">
                    <img src={getImageSize(item?.coverImgUrl, 100)} alt="" />
                    <a href="" className="sprite_cover"></a>
                </div>
                <div className="info">
                    <a className="title" href="">
                        {item?.name}
                    </a>
                    <div>
                        <button className="sprite_02 btn play"></button>
                        <button className="sprite_02 btn favor"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {tracks.map((item, index) => {
                    return (
                        <div className="item" key={item.id}>
                            <div className="index">{index + 1}</div>
                            <div className="info">
                                <div className="name text-nowrap">{item.name}</div>
                                <div className="operate">
                                    <button className="sprite_02 btn play"></button>
                                    <button className="sprite_icon2 btn add"></button>
                                    <button className="sprite_02 btn favor"></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="footer">
                <a href="#/discover/ranking">查看全部 &gt;</a>
            </div>
        </RankingItemWrapper>
    )
})

export default TopRankingItem
