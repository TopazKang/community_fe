import React from 'react';
import styled from 'styled-components';
import Ring from './Ring';
import { Button } from '@mui/material';
import { Home, PhotoLibrary, HowToVote } from '@mui/icons-material'

const MainDiv = styled.div`
        width: 1560px;
        height: 900px;
        display: flex;
        flex-direction: row;
        background-color: lightgrey;
        padding: 0px;
        position: relative;
`
// 스프링 자리
const SpringDiv = styled.div`
    margin-top: 40px;
    width: 182px;
    height: 880px;
    margin-left: -70px;
    position: relative;
    background-repeat: repeat-y;
`
const Div = styled.div`
    width: 1450px;
    height: 900px;
`
const ButtonDiv = styled.div`
    width: 96px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-left: 1560px;
`

export default function Main({home, board, vote, children}) {
    return (
        <>
            <MainDiv>
                <SpringDiv>
                    <Ring />
                    <Ring />
                    <Ring />
                    <Ring />
                    <Ring />
                </SpringDiv>
                <Div>{children}</Div>
                <ButtonDiv>
                    <Button 
                    onClick={home}
                    sx={{width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0'}}>
                        <Home
                        sx={{width: '80px', height: '80px'}}/>
                    </Button>
                    <Button
                    onClick={board}
                    sx={{width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0'}}>
                        <PhotoLibrary
                        sx={{width: '80px', height: '80px'}}/>
                    </Button>
                    <Button
                    onClick={vote}
                    sx={{width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0'}}>
                        <HowToVote
                        sx={{width: '80px', height: '80px'}}/>
                    </Button>
                </ButtonDiv>
            </MainDiv>
        </>
    )
}