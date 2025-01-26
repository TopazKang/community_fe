import React from 'react';
import styled from 'styled-components';
import { Close } from '@mui/icons-material';

const Reply = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: lightgray;
    flex-shrink: 0;
`
const ReplyText = styled.div`
    width: 270px;
    height: 28px;
    font-size: 14px;
`
const ReplyInfo = styled.div`
    width: 270px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const ReplyDate = styled.div`
    font-size: 14px;
    color: gray;
`
const ReplyWriterBox = styled.div`
    width: 77px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const ReplyWriterImage = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50px;
    background-color: gray;
`
const ReplyWriter = styled.div`
    font-size: 14px;
    margin-left: 5px;
`

export default function ModalReply({replyText, replyDate, replyWriter, replyImage}) {
    return (
        <Reply>
            <ReplyText>{replyText}</ReplyText>
            <ReplyInfo>
                <ReplyDate>{replyDate}</ReplyDate>
                <ReplyWriterBox>
                    <ReplyWriterImage style={{backgroundImage: `url(${replyImage})`, backgroundSize: "cover"}} />
                    <ReplyWriter>{replyWriter}</ReplyWriter>
                </ReplyWriterBox>
            </ReplyInfo>
        </Reply>
    )
}