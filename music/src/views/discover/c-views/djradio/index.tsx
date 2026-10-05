import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Djradio = memo<IProps>(() => {
    return (
        <div>
            <span>Djradio</span>
        </div>
    )
})

export default Djradio
