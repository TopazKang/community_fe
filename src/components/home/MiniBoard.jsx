import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 598px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
// 타이틀 박스
const TitleBox = styled.div`
    width: 598px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
// 타이틀
const Title = styled.div`
    font-size: 28px;
    font-family: 'Ainmom';
`
// 카드 리스트
const CardBox = styled.div`
    width: 598px;
    height: 195px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
// 카드
const Card = styled.div`
    width: 195px;
    height: 195px;
    background-color: gray;
    border-radius: 15px;
`

export default function MiniBoard({title}) {
    return(
        <MainDiv>
            <TitleBox>
                <Title>{title}</Title>
            </TitleBox>
            <CardBox>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardBox>
        </MainDiv>
    )
}