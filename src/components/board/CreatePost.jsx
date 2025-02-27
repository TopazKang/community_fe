import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Clear } from '@mui/icons-material';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import CustomEditor from '../utils/CustomEditor';
import { API } from '../../apis/routes';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const MainDiv = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContentHeader = styled.div`
    width: 1238px;
    height: 100px;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`
const TitleInput = styled.input`
    width: 570px;
    height: 41px;
    border-radius: 5px;
    background-color: gray;
`
const TagBox = styled.div`
    width: 316px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 160px;
`
const TagInput = styled.input`
    width: 229px;
    height: 41px;
    border-radius: 5px;
    background-color: gray;
`
const TagList = styled.div`
    width: 316px;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`
const Tag = styled.div`
    width: 100px;
    height: 41px;
    background-color: gray;
    border-radius: 50px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    position: relative;
    
`
const ButtonBox = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Category = styled.div`
    width: 119px;
    height: 41px;
    border-radius: 5px;
    background-color: gray;
    margin-left: 73px;
`
const TextBox = styled.div`
    width: 1238px;
    height: 560px;
    background-color: white;
    margin-top: 20px;
`

export default function CreatePost({ origin, method, reload }) {
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const [value, setValue] = useState('');
    const [id, setId] = useState(0);
    const [postId, setPostId] = useState(0);
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        if (origin) {
            setTitle(origin.postTitle);
            setTags(JSON.parse(origin.tags));
            setValue(origin.postContent);
            setPostId(origin.postId);
        }
    }, [origin])


    const navigate = useNavigate();

    const addTags = () => {
        if (tag.length <= 4) {
            if (tags.length < 3) {
                setTags([...tags, { id: id, tag }]);
                setTag("");
                setId(id + 1);
            }
            else {
                alert("태그는 3개를 초과할 수 없습니다.")
            }
        }
        else {
            alert("태그는 4자를 초과할 수 없습니다.")
        }

    }

    const activeEnter = (e) => {
        if (e.key === "Enter") {
            addTags();
        }
    }

    const deleteTag = (temp) => {
        setTags(tags.filter((tag) => tag.id !== temp));
    }

    const handleQuillText = (content) => {
        setValue(content);
    }

    const handlePost = () => {
        if(!origin){
            postData();
        }
        else if (origin){
            modifyData();
        }
    }

    const handleImagePath = (image) => {
        setImagePath(image);
        console.log(image);
    }

    async function postData() {

        const token = localStorage.getItem('accessToken');
        const data = {
            title: title,
            content: value,
            category: "standard",
            tags: JSON.stringify(tags),
            postImagePath: imagePath
        }

        console.log(JSON.stringify(tags).length)

        try {
            const response = await fetch(API.POST, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                console.log("게시글 작성 성공")
                navigate('/board');
            }
            else {
                console.log("게시글 작성 실패")
                alert("게시글 작성 실패")
            }
        }
        catch (err) {
            console.log("게시글 작성 오류 발생", err)
        }
    }
    
    async function modifyData() {

        const token = localStorage.getItem('accessToken');
        const data = {
            title: title,
            content: value,
            category: "standard",
            tags: JSON.stringify(tags)
        }

        console.log(JSON.stringify(tags).length)

        try {
            const response = await fetch(API.POST+postId, {
                method: "PATCH",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                console.log("게시글 수정 성공")
                reload();
                method();

            }
            else {
                console.log("게시글 수정 실패")
                alert("게시글 수정 실패")
            }
        }
        catch (err) {
            console.log("게시글 수정 오류 발생", err)
        }
    }
    
    return (
        <MainDiv>
            <ContentHeader>
                <TextField label="게시글 제목" value={title} sx={{ width: "570px", height: "55px", borderRadius: "3px", backgroundColor: "gray" }} onChange={(e) => setTitle(e.target.value)} />
                <TagBox>
                    <TextField label="태그" sx={{ width: "229px", height: "55px", borderRadius: "3px", backgroundColor: "gray" }} value={tag} onChange={e => { if (e.target.value.length <= 4) { setTag(e.target.value) } }} onKeyDown={(e) => activeEnter(e)} />
                    <TagList>
                        {tags.map((tag) => <Tag key={tag.id}><a style={{ marginLeft: "10px" }}>{tag.tag}</a><Clear onClick={(e) => deleteTag(tag.id)} sx={{ marginLeft: "70px", position: "absolute" }} /></Tag>)}
                    </TagList>
                </TagBox>
                <ButtonBox>
                    <Button onClick={handlePost} variant='contained' sx={{ width: "114px", height: "31px", color: "black", backgroundColor: "#aff0fa", borderRadius: "10px", marginBottom: "5px" }}>작성</Button>
                    {origin && <Button onClick={method} variant='contained' sx={{ width: "114px", height: "31px", color: "black", backgroundColor: '#f59daa', borderRadius: "10px"}}>취소</Button>}
                    </ButtonBox>
            </ContentHeader>
            <TextBox><CustomEditor value={value} method={handleQuillText} setImagePath={handleImagePath} /></TextBox>
        </MainDiv>
    )
}

// 입력한거 로컬에 넣어두고 있으면 보여주고 아니면 빈칸으로 만드는 로직 추가할것.

// https://all-done.tistory.com/143
 