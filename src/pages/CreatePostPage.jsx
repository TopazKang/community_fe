import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main';
import Header from '../components/main/Header';
import Home from '../components/home/Home';
import Board from '../components/board/Board';
import Vote from '../components/vote/Vote';
import CreatePost from '../components/board/CreatePost';

const MainDiv = styled.div`
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export default function CreatePostPage() {
    const [home, setHome] = useState(false);
    const [board, setBoard] = useState(false);
    const [vote, setVote] = useState(false);
    const [content, setContent] = useState(true);
    const [title, setTitle] = useState("게시글 작성");

    const handleHome = () => {
        setHome(true);
        setBoard(false);
        setVote(false);
        setContent(false);
        setTitle("메인");
    }
    const handleBoard = () => {
        setHome(false);
        setBoard(true);
        setVote(false);
        setContent(false);
        setTitle("게시판");
    }
    const handleVote = () => {
        setHome(false);
        setBoard(false);
        setVote(true);
        setContent(false);
        setTitle("투표");
    }

    const handleContent = () => {
        setHome(false);
        setBoard(false);
        setVote(false);
        setContent(true);
        setTitle("게시글 작성");
    }

    return(
        <>
            <MainDiv>
                <Header login={true}/>
                <Main home={handleHome} board={handleBoard} vote={handleVote} content={handleContent} title={title}>
                    {home && <Home/>}
                    {board && <Board/>}
                    {vote && <Vote/>}
                    {content && <CreatePost/>} 
                </Main>
            </MainDiv>
        </>
    )
}