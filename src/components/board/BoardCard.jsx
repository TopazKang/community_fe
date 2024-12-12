import React from "react";
import styled from "styled-components";
import { Favorite } from "@mui/icons-material";

const MainDiv = styled.div`
    width: 427px;
    height: 201px;
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: gray;
`
// 이미지
const Image = styled.div`
    width: 169px;
    height: 169px;
    border-radius: 28px;
    margin-left: 16px;
    background-color: lightgray;
`
// 정보
const InfoBox = styled.div`
    width: 180px;
    height: 169px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 25px;
`
// 타이틀
const Title = styled.a`
    width: 180px;
    height: 24px;
    font-family: 'Ainmom';
    font-weight: bold;
    font-size: 20px;
`
// 내용
const Content = styled.a`
    width: 180px;
    height: 38px;
    font-family: 'Ainmom';
    font-size: 16px;
`
// 태그
const TagBox = styled.div`
    width: 180px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Tag = styled.div`
    width: 45px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: lightgray;
`
const TagText = styled.a`
    font-size: 13px;
    font-family: 'Ainmom';
    font-weight: bold;
`
// 작성자 및 좋아요
const Footer = styled.div`
    width: 180px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
// 작성자
const WriterBox = styled.div`
    width: 70px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ProfileImage = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-color: lightgray;
`
const Text = styled.a`
    font-family: 'Ainmom';
    font-size: 14px;
    font-weight: bold;
`
// 좋아요
const CountBox = styled.div`
    width: 50px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default function BoardCard({id, title, content, tagList, profileImage, writer, count }) {

    const readPost = () => {
        alert(id);
    }
    
    return (
        <MainDiv onClick={readPost}>
            <Image></Image>
            <InfoBox>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <TagBox>
                    {tagList.map((tag) => (<Tag><TagText>#{tag.tag}</TagText></Tag>))}
                </TagBox>
                <Footer>
                    <WriterBox>
                        <ProfileImage></ProfileImage>
                        <Text>{writer}</Text>
                    </WriterBox>
                    <CountBox>
                        <Favorite sx={{ width: '30px', height: '30px' }} />
                        <Text>{count}</Text>
                    </CountBox>
                </Footer>
            </InfoBox>
        </MainDiv>
    )
}