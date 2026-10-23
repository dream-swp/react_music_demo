import { memo } from 'react'
import type { ReactNode } from 'react'
import AnchorWrapper from './style'
import SectionHeaderV2 from '@/components/section-header-v2'

interface IProps {
    children?: ReactNode
}

const HotAnchor = memo<IProps>(() => {
    return (
        <AnchorWrapper>
            <SectionHeaderV2 title="热门主播" more="" morePath="#" />
        </AnchorWrapper>
    )
})

export default HotAnchor
