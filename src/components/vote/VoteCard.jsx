import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Favorite, CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";

const MainDiv = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: row;
    border-radius: 45px;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    background-color: gray;
    position: relative;
`
const Voting = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: row;
    border-radius: 45px;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: absolute;
    opacity: 0.4;
    z-index: 1;
`
const SubDiv = styled.div`
    width: 330px;
    height: 330px;
    background-color: lightgray;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    position: relative;
`
const IconBox = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-right: 22px;
`


export default function VoteCard({ readPost, postImagePath, vote, select, id, likesCount }) {

    const [isVoting, setIsVoting] = useState(false);
    const [isSelecting, setIsSelecting] = useState(false);


    useEffect(() => {
        if(!vote){
            setIsVoting(false);
            setIsSelecting(false);
        }
        else if (select.includes(id)) {
            setIsVoting(false);
            setIsSelecting(true);
            console.log(select);
        }
        else if (vote && !select.includes(id)) {
            setIsSelecting(false);
            setIsVoting(true);
        }
    }, [select, id, vote])

    return (
        <MainDiv onClick={readPost}>
            {isVoting && <Voting><CheckBoxOutlineBlank sx={{ width: '150px', height: '150px', color: 'white' }} /></Voting>}
            {isSelecting && <Voting><CheckBox sx={{ width: '150px', height: '150px', color: 'white' }} /></Voting>}
            <SubDiv style={{backgroundImage: `url(${postImagePath})`, backgroundSize: "cover"}}><IconBox><Favorite sx={{ width: '40px', height: '40px' }} />{likesCount}</IconBox></SubDiv>
        </MainDiv>
    )
}