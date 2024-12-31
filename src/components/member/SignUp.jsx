import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Fab, Button } from '@mui/material';
import { CameraEnhanceOutlined, ChangeCircleOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

// 메인 구획
const MainBox = styled.div`
    width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px;
    border-radius: 25px;
    position: relative;
`
// 타이틀 + 버튼 구획
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
// 타이틀 글자
const Title = styled.a`
    font-size: 36px;
    white-space: nowrap;
`
// 입력 구획
const InputBox = styled.div`
    width: 500px;
    height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
// 입력 상단(가로 정렬)
const InputRow = styled.div`
    width: 500px;
    height: 200px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
// 입력 상단(세로 정렬)
const InputColumn = styled.div`
    width: 270px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
`
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function SignUP({ changeState }) {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [nickname, setNickname] = useState('');
    const [isNicknameValid, setIsNicknameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);

        setIsNameValid(value.length <= 0);
    }

    const handleNicknameChange = (event) => {
        const value = event.target.value;
        setNickname(value);

        setIsNicknameValid(value.length <= 0);
    }

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

    // 회원가입 버튼 클릭시 처리
    const handleRegister = () => {
        alert("이름: "+name+"\n"+"닉네임: "+nickname+"\n"+"이메일: " + email + "\n"+"비번: "+ password)
        navigate("/auth/signIn");
    }

    return (
        <>
            <MainBox>
                <BoxHeader>
                    <Title>회원가입</Title>
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={() => { changeState() }}
                        sx={{ width: '98px', height: '98px', marginLeft: '600px', position: 'absolute' }}>
                        <ChangeCircleOutlined sx={{ width: '88px', height: '88px' }} />
                    </Fab>
                </BoxHeader>
                <InputBox>
                    <InputRow>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            sx={{ width: '215px', height: '215px', borderRadius: '50%', backgroudImage: "ddd" }}
                        >+
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event) => console.log(event.target.files)}
                                multiple
                            />
                        </Button>
                        <InputColumn>
                            <TextField
                                sx={{ width: '250px', marginBottom: '50px' }}
                                label="name"
                                variant="outlined"
                                value={name}
                                onChange={handleNameChange}
                                error={isNameValid && name === ''}
                                helperText={isNameValid && name === '' ? "이름을 입력해주세요." : ""}
                            />
                            <TextField
                                sx={{ width: '250px' }}
                                label="nickname"
                                variant="outlined"
                                value={nickname}
                                onChange={handleNicknameChange}
                                error={isNicknameValid && name === ''}
                                helperText={isNicknameValid && name === '' ? "닉네임을 입력해주세요." : ""}
                            />
                        </InputColumn>
                    </InputRow>
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
                    onClick={() => { handleRegister() }}
                    sx={{ width: '130px', height: '60px', marginTop: '5px', borderRadius: '25px', fontSize: '24px', backgroundColor: 'brown' }}
                    endIcon={<CameraEnhanceOutlined />}>
                    로긴
                </Button>
            </MainBox >
        </>
    )
}