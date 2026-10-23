import { memo } from 'react'
import type { ReactNode } from 'react'
import LoginWrapper from './style'

import vipBG from '@/assets/img/dis_vip_card.png'

interface IProps {
    children?: ReactNode
}

const UserLogin = memo<IProps>(() => {
    return (
        <LoginWrapper>
            <div className="dis-vip-card">
                <img className="image" src={vipBG} alt="" />
            </div>
            <div className="contact sprite_02">
                <p className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <a href="" className="sprite_02">
                    用户登录
                </a>
            </div>
        </LoginWrapper>
    )
})

export default UserLogin
