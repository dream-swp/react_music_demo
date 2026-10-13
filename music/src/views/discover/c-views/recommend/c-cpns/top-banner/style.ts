import styled from 'styled-components'

import downloadImg from '@/assets/img/download.png'
import controImage from '@/assets/img/banner_sprite.png'

interface BannerProps {
    $bgImage: string
}

export const BannerWrapper = styled.div<BannerProps>`
    background: url(${(props) => props.$bgImage}) center center / 6000px;
    .banner {
        height: 270px;
        display: flex;
        position: relative;
    }
`

export const BannerLeftWrapper = styled.div`
    position: relative;
    width: 730px;

    .banner-item {
        /* position: absolute; */
        left: 0;
        top: 0;
        overflow: hidden;
        height: 270px;
        .image {
            width: 100%;
        }
    }
`

export const BannerRightWrapper = styled.a.attrs({
    href: 'https://music.163.com/#/download',
    target: '_blank'
})`
    width: 254px;
    height: 270px;
    background: url(${downloadImg});
`

export const BannerControlWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${controImage});
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`
