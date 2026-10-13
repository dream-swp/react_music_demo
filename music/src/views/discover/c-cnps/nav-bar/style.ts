import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    /* width: 100%; */
    height: 30px;
    background-color: ${(props) => props.theme.color.primary};

    .nav {
        display: flex;
        padding-left: 350px;
        position: relative;
        top: -4px;
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
