import React from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';

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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 20px;
`
// 버튼 박스
const ButtonBox = styled.div`
    width: 1313px;
    height: 41px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    border: solid 1px;
`
// 카드 빅스
const CardBox = styled.div`
    width: 1313px;
    height: 637px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
`
// 페이지네이션 박스
const PageBox = styled.div`
    width: 200px;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: solid 1px;
`


export default function Board() {
    return (
        <MainDiv>
            <BodyBox>
                <ButtonBox>

                </ButtonBox>
                <CardBox>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                    <BoardCard></BoardCard>
                </CardBox>
                <PageBox>

                </PageBox>
            </BodyBox>
        </MainDiv>
    )
}