import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    /* width: 100%; */
    height: 35px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.primary};
    border-bottom: 1px solid #a40011;
    .nav {
        box-sizing: border-box;
        display: flex;
        padding-left: 180px;
        position: relative;
        /* top: -4px; */
    }

    .item {
        a {
            display: inline-table;
            height: 20px;
            line-height: 21px;
            padding: 0 13px;
            margin: 7px 17px 0;
            color: #fff;
            font-size: 12px;
            &:hover,
            &.active {
                text-decoration: none;
                background-color: #9b0909;
                border-radius: 20px;
            }
        }
    }
`

export default NavBarWrapper
