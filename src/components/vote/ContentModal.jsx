import React from 'react';
import styled from 'styled-components';
import { Close } from '@mui/icons-material';
import ModalReply from './ModalReply';

const Div = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainDiv = styled.div`
    width: 1000px;
    height: 625px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid;
`
const LeftSection = styled.div`
    width: 650px;
    height: 625px;
    background-color: black;
    row-gap: 15px;
`
const RightSection = styled.div`
    width: 350px;
    height: 625px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: white;
    justify-content: space-between;
    padding: 0;
`
const Cancel = styled.div`
    width: 340px;
    height: 10px;
    margin-right: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: end;
`
const ReplysBox = styled.div`
    width: 320px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    row-gap: 15px;
    overflow-y: auto;
`
const InfoBox = styled.div`
    width: 307px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 21px;
    background-color: lightgray;
`
const InfoFirst = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
`
const InfoTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const InfoDate = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: gray;
`
const InfoContent = styled.div`
    font-size: 16px;
    font-weight: bold;
`
const InfoNums = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
`
const InfoNum = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: gray;
`

export default function ContentModal({ closeModal, id }) {

    console.log(id)

    return (
        <Div>
            <MainDiv>
                <LeftSection></LeftSection>
                <RightSection>
                    <Cancel onClick={closeModal}>
                        <Close sx={{ width: '30px', height: '30px' }} />
                    </Cancel>
                    <ReplysBox>
                        <ModalReply replyText="사진이 너무 예뻐요" replyDate="24.12.12 22:35:33" replyWriter="작성자" />
                        <ModalReply replyText="사진이 너무 예뻐요" replyDate="24.12.12 22:35:33" replyWriter="작성자" />
                        <ModalReply replyText="사진이 너무 예뻐요" replyDate="24.12.12 22:35:33" replyWriter="작성자" />
                        <ModalReply replyText="사진이 너무 예뻐요" replyDate="24.12.12 22:35:33" replyWriter="작성자" />
                    </ReplysBox>
                    <InfoBox>
                        <InfoFirst>
                            <InfoTitle>타이틀</InfoTitle>
                            <InfoDate>24.12.12 22:35:33</InfoDate>
                        </InfoFirst>
                        <InfoContent>이건 내용이야야 {id}</InfoContent>
                        <InfoNums>
                            <InfoNum>f/1.8</InfoNum>
                            <InfoNum>1/4000초</InfoNum>
                            <InfoNum>iso 100</InfoNum>
                            <InfoNum>6200k</InfoNum>
                        </InfoNums>
                    </InfoBox>
                </RightSection>
            </MainDiv>
        </Div>

    )
}