import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainDiv = styled.div`
    position: relative;
    display: inline-block;
`
const DropBox = styled.div`
    position: absolute;
    top: 100%;
    z-index: 1;
`
const DropMenu = styled.div`
    width: 100px;
    height: 50px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    border-radius: 4px;
`
export default function ProfileDropDown({ image }) {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }

    return (

        <MainDiv onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} style={{ position: "relative", display: "inline-block" }}>
            <img src={image} width="55px" height="55px" />

            <DropBox style={{ display: open ? "block" : "none"}}>
                <DropMenu onClick={() => navigate("/auth/modifyInfo")}>회원정보수정</DropMenu>
                <DropMenu onClick={() => logout()}>로그아웃</DropMenu>
            </DropBox>
        </MainDiv>
    )
}