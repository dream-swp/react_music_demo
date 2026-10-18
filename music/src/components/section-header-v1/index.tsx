import { memo } from 'react'
import type { ReactNode } from 'react'
import HeaderV1Wrapper from './style'

interface IProps {
    children?: ReactNode
}

const SectionHeaderV1 = memo<IProps>(() => {
    return (
        <HeaderV1Wrapper className="sprite_02">
            <div className="left">
                <a className="title">热门推荐</a>
                <div className="keyword">
                    {['华语', '流行', '摇滚', '民谣', '电子'].map((item, index) => {
                        return (
                            <div className="item" key={item}>
                                <span className="text">{item}</span>
                                <span className="divider">|</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="right">
                <a className="more" href="/#">
                    更多
                </a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderV1Wrapper>
    )
})

export default SectionHeaderV1
