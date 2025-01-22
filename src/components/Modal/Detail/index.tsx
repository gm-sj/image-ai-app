import React, { useEffect, useState } from 'react';
import {
  ModalContainerStyle,
  CloseButton,
  ImageWrapper,
  ModalStyle,
  CommentModalStyle,
} from './Styled';
import useModal from '../../../hooks/useModal';
import { Button } from '@mui/material';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/config';

interface DetailImageProps {
  id: string;
  imageUrl: string;
  description: string;
  title: string;
  deviceType: string;
  prompt: string;
}

const DetailImage: React.FC<DetailImageProps> = ({ id, imageUrl, description, title, prompt }) => {
  // img
  const { closeModal } = useModal();
  const [openComment, setOpenComment] = useState<boolean>(false);
  // comment
  const [commentValue, setCommentValue] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { deviceType } = useDeviceType();

  const openDescription = () => {
    setOpenComment(!openComment);
  };

  const saveComment = async () => {
    if (!userId || !password || !commentValue) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const commentData = {
      userId,
      password,
      commentValue,
    };

    await addDoc(collection(db, `images/${id}/comments`), commentData);

    setUserId('');
    setPassword('');
    setCommentValue('');
  };

  return (
    <ModalContainerStyle>
      <ModalStyle
        className={`${deviceType === 'mobile' ? 'mobile-modal' : ''}`}
        $openComment={openComment}
        deviceType={deviceType}
      >
        <div className="modal-body">
          {/* 이미지와 설명 */}
          <ImageWrapper>
            <img src={imageUrl} alt={description} />
            <div className="info-wrpper">
              <div className="title-area">
                <p className="area-title">타이틀</p>
                <p className="title">{title}</p>
              </div>
              <div className="prompt-area">
                <p className="area-title">프롬프트 내용 </p>
                <p className="prompt">{prompt}</p>
              </div>
              <div className="description-area">
                <p className="area-title">내용</p>
                <p className="description">{description}</p>
              </div>
            </div>
          </ImageWrapper>
          <div className="button-box">
            {deviceType === 'mobile' ? (
              <Button
                className="close-btn"
                variant="outlined"
                onClick={() => closeModal('detailModal')}
              >
                닫기
              </Button>
            ) : (
              ''
            )}
            <Button variant="contained" onClick={openDescription}>
              {openComment ? '닫기' : '상세보기'}
            </Button>
          </div>
        </div>
      </ModalStyle>
      <CommentModalStyle
        className={`${deviceType === 'mobile' ? 'mobile-modal' : ''}`}
        openComment={openComment}
        deviceType={deviceType}
      >
        {deviceType === 'mobile' ? (
          <button className="modal-close" onClick={() => setOpenComment(false)}>
            x
          </button>
        ) : null}
        <div className="comment-add">
          <div className="user-info-add">
            <div className="form">
              <label htmlFor="">닉네임</label>
              <input value={userId} type="text" onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div className="form">
              <label htmlFor="">패스워드</label>
              <input value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="textarea-add">
            <textarea
              value={commentValue}
              onChange={(e) => {
                setCommentValue(e.target.value);
              }}
            />
            <Button variant="contained" onClick={saveComment}>
              등록하기
            </Button>
          </div>
        </div>
        <ul className="comment-list-wrapper">
          {Array.from({ length: 7 }).map((_, index) => (
            <li className="comment-list" key={index}>
              <div className="comment-user-info">
                <span className="nickname">닉네임 {index + 1}</span>
              </div>
              <div className="comment-wrapper">
                <p className="comment">
                  댓글내용입니다.....댓글내용입니다.....댓글내용입니다.....댓글내용입니다.....
                  댓글내용입니다.....댓글내용입니다.....댓글내용입니다.....댓글내용입니다.....
                  댓글내용입니다.....댓글내용입니다.....댓글내용입니다.....댓글내용입니다.....
                </p>
                {/* <span className="">더보기</span> */}
              </div>
              <div className="button-box">
                <Button variant="contained">수정하기</Button>
                <Button color="error" variant="outlined">
                  삭제하기
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CommentModalStyle>
    </ModalContainerStyle>
  );
};

export default DetailImage;
