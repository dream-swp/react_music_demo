import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Focus = memo<IProps>(() => {
    return (
        <div>
            <span>Focus</span>
        </div>
    )
})

export default Focus
