import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Artist = memo<IProps>(() => {
    return (
        <div>
            <span>Artist</span>
        </div>
    )
})

export default Artist
