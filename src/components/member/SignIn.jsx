import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

const MainBox = styled.div`
    width: 600px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px;
    border-radius: 25px;
    position: relative;
`
const BoxHeader = styled.div`
    width: 600px;
    height: 98px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    position: relative;
    
`
const Title = styled.a`
    font-size: 36px;
    white-space: nowrap;
    margin-left: 250px;
    position: absolute;
`

const ChangeButton = styled.button`
    width: 98px;
    height: 98px;
    border-radius: 50%;
    border: solid 1px;
    margin-left: 552px;
    position: absolute;
`

const InputBox = styled.div`
    width: 500px;
    height: 201px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 500px;
    height: 44px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 18px;
`

const Signin = styled.button`
    width: 160px;
    height: 60px;
    margin-top: 12px;
    border-radius: 10px;
    border: solid 1px;
`

export default function SignIn() {
    const [selected, setSelected] = React.useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        // 이메일 유효성 검사 (정규 표현식 사용)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(value));
    };

    // 비밀번호 유효성 검사 핸들러 (예: 최소 8자)
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);

        setIsPasswordValid(value.length <= 0);
    };

    return (
        <>
            <MainBox>
                <BoxHeader>
                    <Title>로그인</Title>
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={setSelected}
                        sx={{ width: '98px', height: '98px', marginLeft: '552px', position: 'absolute' }}>
                    </Fab>
                </BoxHeader>
                <InputBox>
                    <TextField
                        sx={{ width: '500px', marginBottom: '30px' }}
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isEmailValid && email !== ''}
                        helperText={!isEmailValid && email !== '' ? "유효한 이메일 주소를 입력하세요." : ""}
                    />
                    <TextField
                        sx={{ width: '500px' }}
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                        error={isPasswordValid && password == ''}
                        helperText={isPasswordValid && password == '' ? "비밀번호가 입력되지 않았습니다." : ""}
                    />
                </InputBox>
                <Signin />
            </MainBox >
        </>
    )
}