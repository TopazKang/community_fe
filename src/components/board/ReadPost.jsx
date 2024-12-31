import React, { useState } from 'react';
import styled from 'styled-components';
import { Clear } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MainDiv = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PostBox = styled.div`
    width: 666px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleBox = styled.div`
    width: 666px;
    height: 117px;
    margin-bottom: 18px;
`
const TitleInfoBox = styled.div`
    width: 666px;
    height: 40px;
    display: flex;
    flex-direction: row;
`
const TitleInfo = styled.div`
    width: 300px;
    height: 37px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const ImageBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: gray;
`
const Writer = styled.div`
    font-size: 16px;
`
const Date = styled.div`
    font-size: 12px;
    color: gray;
`
const Line = styled.hr`
    width: 667px;
    border-bottom: 1px;
    border-color: black;
`
const Content = styled.div`
    margin-top: 22px;
    margin-bottom: 22px;
    max-width: 612px;
    word-wrap: break-word;
`
const CommentBox = styled.div`
    width: 612px;
`
const CommentInputBox = styled.div`
    width: 612px;
    height: 110px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
`
const CommentInput = styled.input`
    width: 602px;
    height: 70px;
    margin-top: 2px;
    margin-left: 2px;
    border-radius: 10px;
`
const CommentButton = styled.div`
    width: 114px;
    height: 31px;
    background-color: lightblue;
    margin-left: 492px;
    border-radius: 10px;
`
const Comment = styled.div`
    width: 612px;
    height: 119px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: gray;
    border-radius: 10px;
`
const CommentText = styled.div`
    width: 534px;
    height: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const CommentInfo = styled.div`
    width: 534px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const CommentDate = styled.div`
    width: 134px;
    color: lightgray;
    font-size: 16px;
`
const CommentWriter = styled.div`
    width: 80px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const CommentWriterImage = styled.div`
    width: 27px;
    height: 27px;
    border-radius: 50px;
    background-color: lightgray;
`
const CommentWriterText = styled.div`
    font-size: 16px;
    margin-left: 4px;
`




export default function ReadPost() {

    return (
        <MainDiv>
            <PostBox>
                <TitleBox>
                    <h2>일이삼다오asdfasdfa</h2>
                    <TitleInfoBox>
                        <ImageBox />
                        <TitleInfo>
                            <Writer>작성자</Writer>
                            <Date>2024/11/08 22:08:22</Date>
                        </TitleInfo>
                    </TitleInfoBox>
                </TitleBox>
                <Line />
                <Content>asdfasdfasdfasdfasdfasd</Content>
                <Line />
            </PostBox>
            <CommentBox>
                <CommentInputBox>
                    <CommentInput />
                    <CommentButton/>
                </CommentInputBox>
                <Comment>
                    <CommentText>asdfasdfasdf</CommentText>
                    <CommentInfo>
                        <CommentDate>24.11.08 12:10:22</CommentDate>
                        <CommentWriter>
                            <CommentWriterImage />
                            <CommentWriterText>작성자</CommentWriterText>
                        </CommentWriter>
                    </CommentInfo>
                </Comment>
            </CommentBox>
        </MainDiv>
    )
}

// 입력한거 로컬에 넣어두고 있으면 보여주고 아니면 빈칸으로 만드는 로직 추가할것.