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

interface DetailImageProps {
  id: string;
  imageUrl: string;
  description: string;
  deviceType: string;
}

const DetailImage = ({ imageUrl, description }: DetailImageProps) => {
  // img
  const { closeModal } = useModal();
  const [openComment, setOpenComment] = useState<boolean>(false);
  // comment
  const [commentValue, setCommentValue] = useState<string | null>(null);
  const { deviceType } = useDeviceType();

  const openDescription = () => {
    setOpenComment(!openComment);
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
            <p className="description">{description}</p>
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
        ) : (
          ''
        )}
        <div className="comment-add">
          <div className="user-info-add">
            <div className="form">
              <label htmlFor="">닉네임</label>
              <input type="text" />
            </div>
            <div className="form">
              <label htmlFor="">패스워드</label>
              <input type="text" />
            </div>
          </div>
          <div className="textarea-add">
            <textarea
              onChange={(e) => {
                setCommentValue(e.target.value);
              }}
            />
            <Button variant="contained">등록하기</Button>
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
