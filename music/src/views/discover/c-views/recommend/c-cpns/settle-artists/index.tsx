import { memo } from 'react'
import type { ReactNode } from 'react'
import ArtistsWrapper from './style'
import SectionHeaderV2 from '@/components/section-header-v2'

interface IProps {
    children?: ReactNode
}

const SettleArtists = memo<IProps>(() => {
    return (
        <ArtistsWrapper>
            <SectionHeaderV2 title="入驻歌手" more="查看全部" morePath="#" />
        </ArtistsWrapper>
    )
})

export default SettleArtists
