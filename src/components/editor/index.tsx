import { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { ButtonGroup, EditorBtn } from '@components/editor/style';
import { IEditorType } from '@components/editor/type';

export default function BoardEditor({ contents, setContents }: IEditorType) {
  const editorRef = useRef<any | null>(null);

  const handleCreateNewPost = () => {
    console.log(editorRef.current);
    if (editorRef.current) {
      setContents(editorRef.current.getInstance().getMarkdown());
      console.log(editorRef.current.getInstance().getMarkdown());
    }
  };

  return (
    <>
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        initialValue={contents}
        autofocus={false}
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        language="ko-KR"
      />
      <ButtonGroup>
        <EditorBtn className="line-btn">취소</EditorBtn>
        <EditorBtn onClick={handleCreateNewPost}>등록</EditorBtn>
      </ButtonGroup>
    </>
  );
}
