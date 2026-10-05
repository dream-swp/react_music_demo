import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Download = memo<IProps>(() => {
    return (
        <div>
            <span>Download</span>
        </div>
    )
})

export default Download
