import React from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';

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
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`
const Dropdown = styled.div`
    width: 119px;
    height: 40px;
    border-radius: 10px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const EditButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: gray;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
// 카드 빅스
const CardBox = styled.div`
    width: 1313px;
    height: 637px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 16px;
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

    const navigate = useNavigate();

    const create = () => {
        navigate("/standard-page/create");
    }

    return (
        <MainDiv>
            <BodyBox>
                <ButtonBox>
                    <Dropdown>카테고리</Dropdown>
                    <EditButton onClick={create}><Edit sx={{ width: '35px', height: '35px' }} /></EditButton>
                </ButtonBox>
                <CardBox>
                    <BoardCard id="1" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }, {tag: "d"}]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="2" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="3" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="4" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="5" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="6" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="7" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="8" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                    <BoardCard id="9" title="제목이에요" content={"내용이에오 내용이라니까오"} tagList={[{ tag: "a" }, { tag: "b" }, { tag: "c" }]} profileImage={""} writer={"작성자"} count={"22"} />
                </CardBox>
                <PageBox>

                </PageBox>
            </BodyBox>
        </MainDiv>
    )
}