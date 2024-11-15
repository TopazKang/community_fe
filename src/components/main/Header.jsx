import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 1920px;
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`

export default function Header({ login }) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
        setIsLogin(login)
    })

    return (
        <>
            <MainDiv>
                <a>셔터</a>
            </MainDiv>
        </>
    )
}