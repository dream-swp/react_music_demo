import styled from 'styled-components'

export const LoginWrapper = styled.div`
    .dis-vip-card {
        margin-top: 5px;
        height: 90px;
        .image {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        img {
            overflow-clip-margin: content-box;
            overflow: clip;
        }
    }

    .contact {
        height: 126px;
        background-position: 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        p {
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
            color: #666;
        }

        a {
            display: inline-block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-decoration: none;
            background-position: 0 -195px;
            text-shadow: 0 1px 0 #8a060b;
            cursor: pointer;

            &:hover {
                background-position: -110px -195px;
            }
        }
    }
`

export default LoginWrapper
