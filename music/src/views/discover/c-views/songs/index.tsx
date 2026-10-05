import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Songs = memo<IProps>(() => {
    return (
        <div>
            <span>Songs</span>
        </div>
    )
})

export default Songs
