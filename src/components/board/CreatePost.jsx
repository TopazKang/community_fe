import React, { useState } from 'react';
import styled from 'styled-components';
import { Clear } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

export default function CreatePost() {
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const [value, setValue] = useState('');

    let nextId = 0;

    const addTags = () => {
        if (tag.length <= 4) {
            if (tags.length < 3) {
                setTags([...tags, { id: nextId++, tag }]);
                setTag("");
            }
            else {
                alert("태그는 3개를 초과할 수 없습니다.")
            }
        }
        else{
            alert("태그는 4자를 초과할 수 없습니다.")
        }

    }

    const activeEnter = (e) => {
        if (e.key === "Enter") {
            addTags();
        }
    }

    const deleteTag = (temp) => {
        setTags(tags.filter((tag) => tag.tag !== temp));
    }

    const handleQuillText = (value) => {
        setValue(value);
    }

    return (
        <MainDiv>
            <ContentHeader>
                <TitleInput></TitleInput>
                <TagBox>
                    <TagInput value={tag} onChange={e => {if(e.target.value.length <= 4) {setTag(e.target.value)}}} onKeyDown={(e) => activeEnter(e)} ></TagInput>
                    <TagList>
                        {tags.map((tag) => <Tag key={tag.id}><a style={{ marginLeft: "10px" }}>{tag.tag}</a><Clear onClick={(e) => deleteTag(tag.tag)} sx={{ marginLeft: "70px", position: "absolute" }} /></Tag>)}
                    </TagList>
                </TagBox>
                <Category></Category>
            </ContentHeader>
            <TextBox><ReactQuill style={{height: "560px"}} theme='snow' value={value} onChange={handleQuillText} /></TextBox>
        </MainDiv>
    )
}

// 입력한거 로컬에 넣어두고 있으면 보여주고 아니면 빈칸으로 만드는 로직 추가할것.