import { memo } from 'react'
import type { ReactNode } from 'react'
import HeaderV2Wrapper from './style'

interface IProps {
    children?: ReactNode
    title?: string
    more?: string
    morePath?: string
}

const SectionHeaderV2 = memo<IProps>((props) => {
    const { title = '', more = '查看全部', morePath } = props
    return (
        <HeaderV2Wrapper>
            <h3 className="title">{title}</h3>
            <a className="more" href={morePath}>
                {more && more + ' >'}
            </a>
        </HeaderV2Wrapper>
    )
})

export default SectionHeaderV2
