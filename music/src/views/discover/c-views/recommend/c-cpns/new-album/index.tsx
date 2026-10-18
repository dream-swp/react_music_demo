import { memo, useCallback, useRef } from 'react'
import type { ComponentRef, ReactNode } from 'react'

import AlbumWrapper from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Carousel } from 'antd'

interface IProps {
    children?: ReactNode
}

const NewAlbum = memo<IProps>(() => {
    const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)

    const handleChick = useCallback((isNext: boolean) => {
        if (isNext) {
            bannerRef.current?.next()
        } else {
            bannerRef.current?.prev()
        }
    }, [])

    return (
        <AlbumWrapper>
            <SectionHeaderV1 title="新碟上架" morePath="/discover/album" />
            <div className="content">
                <button
                    className="sprite_02 arrow arrow-left"
                    onClick={() => handleChick(false)}
                ></button>
                <div className="banner">
                    <Carousel ref={bannerRef} dots={false} speed={1000}>
                        {[1, 2].map((item) => {
                            return <h1 key={item}>{item}</h1>
                            // return <span>12</span>
                        })}
                    </Carousel>
                </div>
                <button
                    className="sprite_02 arrow arrow-right"
                    onClick={() => handleChick(true)}
                ></button>
            </div>
        </AlbumWrapper>
    )
})

export default NewAlbum
