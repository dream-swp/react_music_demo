import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const AppFooter = memo<IProps>(() => {
    return (
        <div>
            <span>AppFooter</span>
        </div>
    )
})

export default AppFooter
