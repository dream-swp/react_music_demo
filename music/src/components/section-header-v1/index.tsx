import { memo } from 'react'
import type { ReactNode } from 'react'
import HeaderV1Wrapper from './style'

interface IProps {
    title?: string
    keywords?: string[]
    children?: ReactNode
}

const SectionHeaderV1 = memo<IProps>((props) => {
    const { title = '', keywords = [] } = props
    return (
        <HeaderV1Wrapper className="sprite_02">
            <div className="left">
                <a className="title">{title}</a>
                <div className="keyword">
                    {keywords.map((item) => {
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
