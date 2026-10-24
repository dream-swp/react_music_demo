import styled from 'styled-components'

export const ArtistsWrapper = styled.div`

    .apply-for {
        margin-top: 12px;
        padding: 0 20px;
        height: 31px;

        a {
            color: #333;
            font-weight: 700;
            text-align: center;
            display: block;
            position: relative;
            height: 31px;
            line-height: 31px;
            padding-right: 5px;
            text-decoration: none;

            &:hover {
                .left {
                    background-position: left -141px;
                }

                .right {
                    background-position: right -182px;
                }
            }

            .left {
                display: block;
                padding: 0 15px 0 20px;
                background-position: left -59px;
                font-style: normal;
            }

            .right {
                position: absolute;
                top: 0;
                right: 0;
                width: 5px;
                height: 31px;
                background-position: right -100px;
            }
        }
    }
`

export default ArtistsWrapper
