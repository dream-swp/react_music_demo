import { memo, useCallback, useRef } from 'react'
import type { ComponentRef, ReactNode } from 'react'
import { Carousel } from 'antd'

import { shallowEqualApp, useAppSelector } from '@/store'

import SectionHeaderV1 from '@/components/section-header-v1'
import NewAlbumItem from '@/components/section-new-album-item'
import AlbumWrapper from './style'

interface IProps {
    children?: ReactNode
}

const NewAlbum = memo<IProps>(() => {
    const { newAlbums } = useAppSelector(
        (state) => ({
            newAlbums: state.recommend.newAlbums
        }),
        shallowEqualApp
    )

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
                        {[0, 1].map((item) => {
                            return (
                                <div key={item}>
                                    <div className="album-item">
                                        {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                                            return <NewAlbumItem key={iten.id} item={iten} />
                                        })}
                                    </div>
                                </div>
                            )
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
