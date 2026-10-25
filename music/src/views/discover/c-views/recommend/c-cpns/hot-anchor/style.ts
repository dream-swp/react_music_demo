import styled from 'styled-components'

export const AnchorWrapper = styled.div`
    .anchor-list {
        padding: 20px;
        .item {
            display: flex;
            margin-bottom: 10px;
            width: 210px;
            
            .image {
                img {
                    width: 40px;
                    height: 40px;
                }
            }

            .info {
                width: 160px;
                margin-left: 8px;
                .name {
                    color: #000;
                    font-size: 700;
                    margin-top: 3px;
                }

                .position {
                    margin-top: 8px;
                    color: #666;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }
`

export default AnchorWrapper
