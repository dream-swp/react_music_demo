import styled from 'styled-components'

import wrapBg from '@/assets/img/wrap-bg.png'

export const RecommendWrapper = styled.div``

export const RecommendSection = styled.div`
    ${(props) => props.theme.mixin.wrapv2};
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${wrapBg});
    display: flex;
`

export const RecommendLeft = styled.div`
    box-sizing: border-box;
    min-width: 0;
    padding: 20px;
    width: 729px;
`

export const RecommendRight = styled.div`
    margin-left: 1px;
    width: 250px;
`
