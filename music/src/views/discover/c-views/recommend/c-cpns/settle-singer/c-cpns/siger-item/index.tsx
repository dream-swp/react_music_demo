import { memo } from 'react'
import type { ReactNode } from 'react'
import ItemWrapper from './style'

interface IProps {
    children?: ReactNode
}

const SigerItem = memo<IProps>(() => {
    return (
        <ItemWrapper>
            <span>SigerItem</span>
        </ItemWrapper>
    )
})

export default SigerItem
