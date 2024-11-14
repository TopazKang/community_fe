import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main'

const MainDiv = styled.div`
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
const Home = styled.div`
    width: 250px;
    height: 250px;
    background-color: red;
`
const Board = styled.div`
    width: 250px;
    height: 250px;
    background-color: yellow;
`
const Vote = styled.div`
    width: 250px;
    height: 250px;
    background-color: green;
`

export default function MainPage() {
    const [home, setHome] = useState(true);
    const [board, setBoard] = useState(false);
    const [vote, setVote] = useState(false);

    const handleHome = () => {
        setHome(true);
        setBoard(false);
        setVote(false);
    }
    const handleBoard = () => {
        setHome(false);
        setBoard(true);
        setVote(false);
    }
    const handleVote = () => {
        setHome(false);
        setBoard(false);
        setVote(true);
    }

    return(
        <>
            <MainDiv>
                <Main home={handleHome} board={handleBoard} vote={handleVote}>
                    {home && <Home/>}
                    {board && <Board/>}
                    {vote && <Vote/>}
                </Main>
            </MainDiv>
        </>
    )
}