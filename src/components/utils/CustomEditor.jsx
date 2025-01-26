import React, { useState, useMemo, useRef, useEffect } from "react";
import ReactQuill from "react-quill-new";  // import는 "react-quill-new" 사용
import 'react-quill-new/dist/quill.snow.css';
import { API } from "../../apis/routes";

// 이미지 업로드 처리 함수
const uploadImageToServer = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const token = localStorage.getItem('accessToken');

  try {
    const response = await fetch(API.IMAGE, {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.text();
    return API.BASE_URL+data; // 서버에서 반환된 이미지 URL 반환
  } catch (error) {
    console.error("Image upload failed:", error);
    return null; // 실패 시 null 반환
  }
};

// 이미지 핸들러 (버튼 클릭 시 호출됨)
const imageHandler = async (quillRef) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  
  input.click();
  
  input.onchange = async () => {
    const file = input.files[0];
    if (file) {
      const imageUrl = await uploadImageToServer(file);
      if (imageUrl) {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", imageUrl); // 이미지를 삽입
      }
    }
  };
};

const CustomEditor = ({value, method}) => {
  const [editorContent, setEditorContent] = useState("");
  const quillRef = useRef(null);

  useEffect(() => {
    setEditorContent(value);
  },[value])

  // modules 설정 (useMemo 방식 사용)
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"], // 이미지 버튼 추가
        ],
        handlers: {
          image: () => imageHandler(quillRef), // image 핸들러를 호출할 때 quillRef를 넘김
        },
      },
    };
  }, []);

  function handleContent(e) {
    setEditorContent(e);
    method(e);
  }

  return (
    <ReactQuill
      ref={quillRef}
      value={editorContent}
      onChange={(e) => handleContent(e)}
      modules={modules}
      theme="snow"
      style={{ height: "520px" }}
    />
  );
};

export default CustomEditor;
