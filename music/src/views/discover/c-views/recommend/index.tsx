import { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { feachBannersAction } from './store'
import { useAppDispatch } from '@/store'

import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'

interface IProps {
    children?: ReactNode
}

const Recommend = memo<IProps>(() => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(feachBannersAction())
    }, [])

    return (
        <RecommendWrapper>
            <TopBanner  />
            <span>Recommend</span>
        </RecommendWrapper>
    )
})

export default Recommend
