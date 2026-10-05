import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Discover = memo<IProps>(() => {
    return (
        <div>
            <span>Discover</span>
        </div>
    )
})

export default Discover
