import React, { useState } from 'react';
import styled from 'styled-components';
import { Clear } from '@mui/icons-material';
import { TextField } from '@mui/material';

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
const ContentBox = styled.div`
    width: 1238px;
    height: 560px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: white;
`
const ImageInput = styled.input`
    width: 570px;
    height: 560px;
    border-radius: 5px;
    background-color: gray;
`
const ContentInputBox = styled.div`
    width: 500px;
    height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 6px;
`
const InfoInput = styled.div`
    width: 500px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5px;
`
const DescriptionInput = styled.div`
    width: 500px;
    height: 200px;
`

export default function CreateVPost() {
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
        setTags(tags.filter((tag) => tag.tag !== temp));
    }

    return (
        <MainDiv>
            <ContentHeader>
                <TitleInput></TitleInput>
                <TagBox>
                    <TagInput value={tag} onChange={e => { if (e.target.value.length <= 4) { setTag(e.target.value) } }} onKeyDown={(e) => activeEnter(e)} ></TagInput>
                    <TagList>
                        {tags.map((tag) => <Tag key={tag.id}><a style={{ marginLeft: "10px" }}>{tag.tag}</a><Clear onClick={(e) => deleteTag(tag.tag)} sx={{ marginLeft: "70px", position: "absolute" }} /></Tag>)}
                    </TagList>
                </TagBox>
                <Category></Category>
            </ContentHeader>
            <ContentBox>
                <ImageInput type='file'></ImageInput>
                <ContentInputBox>
                    <InfoInput>
                        <TextField id="aperture" label="Aperture" variant="outlined" sx={{ width: '300px', height: '41px', marginBottom: '4px' }} />
                        <TextField id="iso" label="ISO" variant="outlined" sx={{ width: '300px', height: '41px', marginLeft: '200px' }} />
                        <TextField id="shutter" label="Shutter" variant="outlined" sx={{ width: '300px', height: '41px' }} />
                        <TextField id="wb" label="W/B" variant="outlined" sx={{ width: '300px', height: '41px', marginLeft: '200px' }} />
                    </InfoInput>
                    <DescriptionInput>
                        <TextField
                            id="description"
                            label="사진 설명"
                            multiline
                            rows={7}
                            sx={{width: '500px'}}
                        />
                    </DescriptionInput>
                </ContentInputBox>
            </ContentBox>
        </MainDiv>
    )
}

// https://blog.naver.com/hj_kim97/222309039397 (메타데이터 추출)