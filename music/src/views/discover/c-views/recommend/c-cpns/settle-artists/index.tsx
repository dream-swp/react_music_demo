import { memo } from 'react'
import type { ReactNode } from 'react'
import ArtistsWrapper from './style'
import SectionHeaderV2 from '@/components/section-header-v2'
import { shallowEqualApp, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface IProps {
    children?: ReactNode
}

const SettleArtists = memo<IProps>(() => {
    const { settleArtists } = useAppSelector(
        (state) => ({
            settleArtists: state.recommend.settleArtists
        }),
        shallowEqualApp
    )

    return (
        <ArtistsWrapper>
            <SectionHeaderV2 title="入驻歌手" more="查看全部" morePath="#" />
            {settleArtists.map((item) => {
                return (
                    <a href="#/discover/artist" key={item.id}>
                        <img src={getImageSize(item.picUrl, 62)} alt="" />
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="desc">{item.alias.join(' ')}</div>
                        </div>
                    </a>
                )
            })}
        </ArtistsWrapper>
    )
})

export default SettleArtists
