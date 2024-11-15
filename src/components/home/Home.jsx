import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import MiniBoard from './MiniBoard';

const MainDiv = styled.div`
    width: 1313px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
// 페이지 타이틀
const TitleBox = styled.div`
    width: 1313px;
    height: 97px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
// 타이틀 글자
const Title = styled.a`
    font-family: 'Ainmom';
    font-size: 30px;
`
// 타이틀 날짜
const Date = styled.a`
    font-family: 'Ainmom';
    color: gray;
    font-size: 24px;
    position: absolute;
    margin-left: 1260px;
    margin-top: 55px;
`
// 수평선
const HalfLine = styled.hr`
    width: 1313px;
    height: 1px;
    border: 0px;
    background-color: gray;
    position: absolute;
    margin-top: 93px;
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
            <TitleBox>
                <Title>메인</Title>
                <Date>24.11.01</Date>
                <HalfLine/>
            </TitleBox>
            <BodyBox>
                <ContentBox>
                    <Chat/>
                </ContentBox>
                <ContentBox>
                    <MiniBoard/>
                    <MiniBoard/>
                </ContentBox>
            </BodyBox>
        </MainDiv>
    )
}