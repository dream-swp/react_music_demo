import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Mine = memo<IProps>(() => {
    return (
        <div>
            <span>Mine</span>
        </div>
    )
})

export default Mine
