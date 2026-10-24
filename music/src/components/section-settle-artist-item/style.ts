import styled from 'styled-components'

export const ArtistItemWrapper = styled.div`
    padding: 0 20px;
    .item {
        display: flex;
        height: 62px;
        margin-top: 14px;
        background-color: #fafafa;
        text-decoration: none;

        :hover {
            background-color: #f4f4f4;
        }
        img {
            width: 62px;
            height: 62px;
        }
        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 3px 12px;
            border: 1px solid #e9e9ee;
            border-left: none;
            overflow: hidden;
        }
        .singer {
            font-size: 14px;
            font-weight: 700;
            color: #000;
        }

        .desc {
            font-size: 12px;
            color: #666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
`

export default ArtistItemWrapper
