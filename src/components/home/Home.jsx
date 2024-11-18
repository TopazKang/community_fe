import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import MiniBoard from './MiniBoard';

const MainDiv = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
//  바디
const BodyBox = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
// 바디 내부
const ContentBox = styled.div`
    width: 598px;
    height: 694px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Home() {
    return(
        <MainDiv>
            <BodyBox>
                <ContentBox>
                    <Chat/>
                </ContentBox>
                <ContentBox>
                    <MiniBoard title="< Voted >"/>
                    <MiniBoard title="< Reviews >"/>
                </ContentBox>
            </BodyBox>
        </MainDiv>
    )
}