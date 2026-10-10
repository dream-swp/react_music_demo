import { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import headerTitlesDatas from '@/assets/data/header_titles.json'

import { HaderLeftWrapper, HaderRightWrapper, HeaderWrapper } from './style'

interface IProps {
    children?: ReactNode
}

interface HeaderItem {
    title: string
    type: string
    link: string
}

const AppHeader = memo<IProps>(() => {
    const titles: HeaderItem[] = headerTitlesDatas as HeaderItem[]

    function displayItem(item: HeaderItem) {
        if (item.type === 'path') {
            console.log(item.link)
            return (
                <NavLink to={item.link ?? '/discover'}>
                    {item.title}
                    <i className="icon sprite_01"></i>
                </NavLink>
            )
        } else {
            return (
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.title}
                </a>
            )
        }
    }

    return (
        <HeaderWrapper>
            <div className="content">
                <HaderLeftWrapper>
                    <a className="logo sprite_01" href="/#">
                        网易云音乐
                    </a>
                    <div className="title-list">
                        {titles.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    {displayItem(item)}
                                </div>
                            )
                        })}
                    </div>
                </HaderLeftWrapper>

                <HaderRightWrapper>
                    <Input
                        className="search"
                        placeholder="音乐/视频/电台/用户"
                        prefix={<SearchOutlined />}
                    />

                    <span className="center">创作者中心</span>
                    <span className="login">登录</span>
                </HaderRightWrapper>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

export default AppHeader
