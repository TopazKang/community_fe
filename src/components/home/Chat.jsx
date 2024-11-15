import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 598px;
    height: 694px;
    border-radius: 25px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Chat() {

    return(
        <MainDiv>
            <h1>채팅 기능</h1>
            <h1>아직 준비중입니다</h1>
        </MainDiv>
    )
}