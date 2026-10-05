import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Album = memo<IProps>(() => {
    return (
        <div>
            <span>Album</span>
        </div>
    )
})

export default Album
