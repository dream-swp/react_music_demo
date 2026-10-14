import { memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router'
import NavBar from './c-cnps/nav-bar'

interface IProps {
    children?: ReactNode
}
const Discover = memo<IProps>(() => {
    return (
        <div>
            <NavBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
})

export default Discover
