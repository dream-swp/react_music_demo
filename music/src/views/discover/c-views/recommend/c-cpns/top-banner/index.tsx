import { memo, useCallback, useEffect, useRef, useState } from 'react'
import type { ComponentRef, ReactNode } from 'react'
import { Carousel } from 'antd'

import { BannerWrapper, BannerLeftWrapper, BannerRightWrapper, BannerControlWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
    bgImage: string
    children?: ReactNode
}

const TopBanner = memo<IProps>(() => {
    const { banners } = useAppSelector(
        (state) => ({
            banners: state.recommen.banners
        }),
        shallowEqualApp
    )

    const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)
    const controlClickHandle = useCallback((isNext: boolean) => {
        if (isNext) {
            bannerRef?.current?.next()
        } else {
            bannerRef?.current?.prev()
        }
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0)
    const [bgImage, setBgImage] = useState<string>('')

    const handleAfterChange = useCallback(
        (index: number) => {
            setCurrentIndex(index)
            setBgImage(banners[index].imageUrl + '?imageView&blur=40x20')
        },
        [bgImage]
    )

    useEffect(() => {
        if (!banners.length) return
        setBgImage(banners[currentIndex].imageUrl + '?imageView&blur=40x20')
    }, [banners])

    return (
        <BannerWrapper $bgImage={bgImage ?? ''}>
            <div className="banner wrap-v2">
                <BannerLeftWrapper>
                    <Carousel
                        autoplay
                        ref={bannerRef}
                        effect="fade"
                        afterChange={(index) => handleAfterChange(index)}
                    >
                        {banners.map((item) => {
                            return (
                                <div className="banner-item">
                                    <img
                                        className="image"
                                        key={item?.targetId}
                                        src={item?.imageUrl}
                                        alt={item?.typeTitle}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                </BannerLeftWrapper>
                <BannerRightWrapper></BannerRightWrapper>
                <BannerControlWrapper>
                    <button className="btn left" onClick={() => controlClickHandle(false)}></button>
                    <button className="btn right" onClick={() => controlClickHandle(true)}></button>
                </BannerControlWrapper>
            </div>
        </BannerWrapper>
    )
})

export default TopBanner
