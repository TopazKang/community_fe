import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
    width: 640px;
    height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px;
    border-radius: 25px;
`
const BoxHeader = styled.div`
    width: 640px;
    height: 98px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    position: relative;
    
    border: solid 1px;
`
const Title = styled.a`
    font-size: 48px;
    white-space: nowrap;
    margin-left: 232px;
    position: absolute;
`

const ChangeButton = styled.button`
    width: 98px;
    height: 98px;
    border-radius: 50%;
    border: solid 1px;
    margin-left: 592px;
    position: absolute;
`

export default function SignUp() {
    
    return (
        <>
            <MainBox>
                <BoxHeader>
                    <Title>회원가입</Title>
                    <ChangeButton></ChangeButton>
                </BoxHeader>
            </MainBox>
        </>
    )
}