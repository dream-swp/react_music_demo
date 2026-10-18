import { memo } from 'react'
import type { ReactNode } from 'react'
import HeaderV1Wrapper from './style'
import { Link } from 'react-router'

interface IProps {
    title?: string
    keywords?: string[]
    morePath: string
    children?: ReactNode
}

const SectionHeaderV1 = memo<IProps>((props) => {
    const { title = '', keywords = [], morePath } = props
    return (
        <HeaderV1Wrapper className="sprite_02">
            <div className="section-left">
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
            <div className="section-right">
                <Link to={morePath}>更多</Link>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderV1Wrapper>
    )
})

export default SectionHeaderV1
