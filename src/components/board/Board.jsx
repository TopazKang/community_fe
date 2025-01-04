import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { API } from '../../apis/routes';

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

    useEffect(() => {
        getData();
    },[])

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const create = () => {
        navigate("/standard-page/create");
    }

    async function getData() {

        try {
            const response = await fetch(API.POST , {
                method: "GET",
                mode: "cors",
                credentials: "include",
            })

            if (response.ok) {
                console.log("게시판 조회 성공")
                const datas = await response.json();
                setData(datas);
                console.log(datas)
            }
            else {
                console.log("게시판 조회 실패")
            }
        }
        catch (err) {
            console.log("게시판 조회 오류 발생", err)
        }
    }

    return (
        <MainDiv>
            <BodyBox>
                <ButtonBox>
                    <Dropdown>카테고리</Dropdown>
                    <EditButton onClick={create}><Edit sx={{ width: '35px', height: '35px' }} /></EditButton>
                </ButtonBox>
                <CardBox>
                    {data.map((post) => (<BoardCard key={`${post.postId}-${post.tags}`} id={post.postId} title={post.postTitle} content={post.postCreatedAt} tagList={post.tags} profileImage={post.userImage} writer={post.userNickname} writerImage={post.userImage} count={post.likesCount} />) )}
                </CardBox>
                <PageBox>

                </PageBox>
            </BodyBox>
        </MainDiv>
    )
}