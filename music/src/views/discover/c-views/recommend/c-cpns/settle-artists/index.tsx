import { memo } from 'react'
import type { ReactNode } from 'react'

import { shallowEqualApp, useAppSelector } from '@/store'

import SectionHeaderV2 from '@/components/section-header-v2'
import SettleArtistItem from '@/components/section-settle-artist-item'

import ArtistsWrapper from './style'

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
            <SectionHeaderV2 title="入驻歌手" morePath="#" />
            {settleArtists.map((item) => {
                return <SettleArtistItem item={item} to="#/discover/artist" key={item.id} />
            })}

            <div className="apply-for">
                <a href="#">
                    <i className="sprite_button left">申请成为网易音乐人</i>
                    <span className="sprite_button right" aria-hidden="true" />
                </a>
            </div>
        </ArtistsWrapper>
    )
})

export default SettleArtists
