import React, { useState, useEffect } from 'react';
import { ImageViewStyle } from './Styled';
import useModal from '../../hooks/useModal';
import { DetailImageModal } from '../Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { onSnapshot, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface ImageData {
  id: string;
  url: string;
  description: string;
}

const ImageView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [images, setImages] = useState<ImageData[]>([]); // ImageData 타입 배열로 수정
  const { openModal } = useModal();

  // Tab 클릭 핸들러
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Detail Modal 열기
  const openDetailModal = (id: string, url: string, description: string) => {
    openModal({
      id: 'detailModal',
      component: <DetailImageModal id={id} imageUrl={url} description={description} />,
    });
  };

  const fetchImages = () => {
    try {
      const imageCollection = collection(db, 'images');
      const q = query(imageCollection, orderBy('createdAt', 'desc'), limit(10));

      // Firestore 실시간 업데이트 구독
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const imageData = snapshot.docs.map((doc) => {
          const data = doc.data();
          console.log('Realtime Fetched Data:', data); // 실시간 데이터 로그
          if (data && data.url) {
            return {
              id: doc.id,
              url: data.url,
              description: data.description || 'No description',
            };
          } else {
            console.warn('Missing "url" field:', doc.id, data);
            return null;
          }
        });

        const validImages = imageData.filter((image): image is ImageData => image !== null);
        setImages(validImages);
      });

      // 반환된 unsubscribe 함수를 통해 구독 해제 가능
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching images in real-time:', error);
      return () => {}; // 오류 발생 시 빈 함수 반환
    }
  };

  useEffect(() => {
    // fetchImages 함수 호출하여 실시간 구독 시작
    const unsubscribe = fetchImages();

    // 컴포넌트 언마운트 시 구독 해제
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ImageViewStyle>
      <section className="contents grid-section">
        <div className="tab-menu">
          <div className="tabs">
            <button
              className={`tab-link ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              Tab 1
            </button>
            <button
              className={`tab-link ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              Tab 2
            </button>
            <button
              className={`tab-link ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab3')}
            >
              Tab 3
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'tab1' && (
              <div className="tab-pane">
                <div className="grid-container">
                  {images.length > 0
                    ? images.map((image, index) => (
                        <div
                          className={`grid-item item${index + 1}`}
                          onClick={() => openDetailModal(image.id, image.url, image.description)}
                          key={image.id}
                        >
                          <img
                            src={image.url}
                            alt={image.description}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      ))
                    : Array.from({ length: 10 }).map((_, index) => (
                        <div
                          className={`grid-item item${index + 1}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          key={index}
                        >
                          <CircularProgress />
                        </div>
                      ))}
                </div>
              </div>
            )}
            {activeTab === 'tab2' && (
              <div className="tab-pane">
                <div className="grid-container">
                  <div className="grid-item item1">탭2입니다</div>
                  <div className="grid-item item2" />
                  <div className="grid-item item3" />
                  <div className="grid-item item4" />
                  <div className="grid-item item5" />
                  <div className="grid-item item6" />
                  <div className="grid-item item7" />
                  <div className="grid-item item8" />
                  <div className="grid-item item9" />
                  <div className="grid-item item10" />
                </div>
              </div>
            )}
            {activeTab === 'tab3' && (
              <div className="tab-pane">
                <div className="grid-container">
                  <div className="grid-item item1">탭3입니다</div>
                  <div className="grid-item item2" />
                  <div className="grid-item item3" />
                  <div className="grid-item item4" />
                  <div className="grid-item item5" />
                  <div className="grid-item item6" />
                  <div className="grid-item item7" />
                  <div className="grid-item item8" />
                  <div className="grid-item item9" />
                  <div className="grid-item item10" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </ImageViewStyle>
  );
};

export default ImageView;
