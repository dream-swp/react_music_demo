import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Recommend = memo<IProps>(() => {
    return (
        <div>
            <span>Recommend</span>
        </div>
    )
})

export default Recommend
