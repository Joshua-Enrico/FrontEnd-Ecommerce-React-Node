import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons/';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from '../../src/responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: '50px',
    })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: '10px 0px',
    })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        justifyContent: 'center',
        flex: '2',
    })}
`

const Lenguaje = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: 'none',
    })}
    `

const Input = styled.input`
    border: none;
    ${mobile({
        width: '50%',
    })}
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: '24px',
    })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px',
    })}

`
const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Lenguaje>
                        EN
                    </Lenguaje>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{ color:"gray", fontsize: 16 }}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>GENIUS.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={5} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
