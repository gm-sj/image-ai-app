import React, { useState, useEffect } from 'react';
import { ImageViewStyle } from './Styled';
import useModal from '../../hooks/useModal';
import { DetailImageModal } from '../Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { onSnapshot, collection, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageData {
  id: string;
  url: string;
  description: string;
  title: string;
  prompt: string;
  generatedPrompt?: string;
}

const ImageView: React.FC<{
  deviceType: string;
  prompt: string;
  generatedPrompt?: string | undefined;
}> = ({ deviceType, prompt, generatedPrompt }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [images, setImages] = useState<ImageData[]>([]);
  const { openModal } = useModal();

  // 리액트슬릭 세팅값
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const openDetailModal = (id: string, url: string, description: string, title: string) => {
    openModal({
      id: 'detailModal',
      component: (
        <DetailImageModal
          id={id}
          imageUrl={url}
          title={title}
          description={description}
          deviceType={deviceType}
          prompt={prompt}
        />
      ),
    });
  };

  const fetchImages = () => {
    try {
      const imageCollection = collection(db, 'images');
      const q = query(imageCollection, orderBy('createdAt', 'desc'), limit(10));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const imageData = snapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().url || '',
          title: doc.data().title,
          prompt: doc.data().prompt,
          description: doc.data().description || 'No description',
        }));
        setImages(imageData);
      });

      return unsubscribe;
    } catch (error) {
      console.error('Error fetching images:', error);
      return () => {};
    }
  };

  useEffect(() => {
    const unsubscribe = fetchImages();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ImageViewStyle deviceType={deviceType}>
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
                {(deviceType === 'desktop' || deviceType === 'tablet') && (
                  <div className="grid-container">
                    {images.length > 0
                      ? images.map((image, index) => (
                          <div
                            className={`grid-item item${index + 1}`}
                            onClick={() =>
                              openDetailModal(image.id, image.url, image.description, image.title)
                            }
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
                )}
                {deviceType === 'mobile' && (
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          openDetailModal(image.id, image.url, image.description, image.title)
                        }
                      >
                        <img
                          src={image.url}
                          alt={image.description}
                          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            )}
            {activeTab === 'tab2' && (
              <div className="tab-pane">
                <div className="grid-container">
                  <div className="grid-item item1">Tab 2 Content</div>
                </div>
              </div>
            )}
            {activeTab === 'tab3' && (
              <div className="tab-pane">
                <div className="grid-container">
                  <div className="grid-item item1">Tab 3 Content</div>
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
