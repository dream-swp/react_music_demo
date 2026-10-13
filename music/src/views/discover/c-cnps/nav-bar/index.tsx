import { memo } from 'react'
import type { ReactNode } from 'react'
import NavBarWrapper from './style'
import { discoverMenu } from '@/assets/data/local-data'
import { NavLink } from 'react-router'

interface IProps {
    children?: ReactNode
}

const NavBar = memo<IProps>(() => {
    return (
        <NavBarWrapper>
            <div className="nav wrap-v1">
                {discoverMenu.map((item) => {
                    return (
                        <div className="item" key={item.link}>
                            <NavLink to={item.link}>{item.title}</NavLink>
                        </div>
                    )
                })}
            </div>
        </NavBarWrapper>
    )
})

export default NavBar
