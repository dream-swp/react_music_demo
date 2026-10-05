import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Ranking = memo<IProps>(() => {
    return (
        <div>
            <span>Ranking</span>
        </div>
    )
})

export default Ranking
