import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContentHeader = styled.div`
    width: 1238px;
    height: 120px;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`
const TitleInput = styled.input`
    width: 570px;
    height: 41px;
    border-radius: 5px;
    background-color: gray;
`
const TagBox = styled.div`
    width: 316px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 160px;
`
const TagInput = styled.input`
    width: 229px;
    height: 41px;
    border-radius: 5px;
    background-color: gray;
`
const TagList = styled.div`
    width: 316px;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const Tag = styled.div`
    width: 100px;
    height: 41px;
    background-color: gray;
    border-radius: 50px;
`
const Category = styled.div`
    width: 119px;
    height: 41px;
    border-radius: 5px;
    background-color: gray;
    margin-left: 73px;
`
const TextBox = styled.div`
    width: 1238px;
    height: 560px;
    background-color: gray;
    margin-top: 40px;
`

export default function CreatePost() {



    return (
        <MainDiv>
            <ContentHeader>
                <TitleInput></TitleInput>
                <TagBox>
                    <TagInput></TagInput>
                    <TagList>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                    </TagList>
                </TagBox>
                <Category></Category>
            </ContentHeader>
            <TextBox></TextBox>
        </MainDiv>
    )
}

// 입력한거 로컬에 넣어두고 있으면 보여주고 아니면 빈칸으로 만드는 로직 추가할것.