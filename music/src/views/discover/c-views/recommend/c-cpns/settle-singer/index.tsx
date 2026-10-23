import { memo } from 'react'
import type { ReactNode } from 'react'
import SingerWrapper from './style'
import SectionHeaderV2 from '@/components/section-header-v2'

interface IProps {
    children?: ReactNode
}

const SettleSinger = memo<IProps>(() => {
    return (
        <SingerWrapper>
            <SectionHeaderV2 title="入驻歌手" morePath="#" />
        </SingerWrapper>
    )
})

export default SettleSinger
