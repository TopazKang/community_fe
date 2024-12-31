import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Fab, Button } from '@mui/material';
import { CameraEnhanceOutlined, ChangeCircleOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

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
    justify-content: center;
    margin-top: 32px;
    position: relative;
    
`
const Title = styled.a`
    font-size: 36px;
    white-space: nowrap;
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

export default function SignIn({ changeState }) {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const navigate = useNavigate();

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

    // 로그인 버튼 클릭시 처리
    const handleLogin = () => {
        alert("이메일: "+ email+"\n"+"비번: " + password)
        navigate('/');
    }

    return (
        <>
            <MainBox>
                <BoxHeader>
                    <Title>로그인</Title>
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={()=>{changeState()}}
                        sx={{ width: '98px', height: '98px', marginLeft: '600px', position: 'absolute' }}>
                        <ChangeCircleOutlined sx={{ width: '88px', height: '88px' }} />
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
                        error={isPasswordValid && password === ''}
                        helperText={isPasswordValid && password === '' ? "비밀번호가 입력되지 않았습니다." : ""}
                    />
                </InputBox>
                <Button
                    variant="contained"
                    onClick={() => {handleLogin()}}
                    sx={{ width: '130px', height: '60px', marginTop: '15px', borderRadius: '25px', fontSize: '24px', backgroundColor: 'brown'}}
                    endIcon={<CameraEnhanceOutlined/>}>
                    로긴
                </Button>
            </MainBox >
        </>
    )
}