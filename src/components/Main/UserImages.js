import React from 'react';
import './UserImages.css';

const UserImages = () => {
  const images = [
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 2' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 3' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 2' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 3' },  { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 2' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 3' },  { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 2' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 3' },  { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 2' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 3' },  { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 2' },
    { url: 'https://static.vecteezy.com/system/resources/previews/020/197/684/non_2x/new-design-text-button-new-design-sign-icon-label-sticker-web-buttons-vector.jpg', caption: 'Caption 3' },
    // Add more images as needed
  ];

  return (
    <div className="user-images-container">
      <h2>Your Images</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image.url} alt={`User upload ${index + 1}`} />
            <div className="image-overlay">
              <div className="image-info">
                <p>{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImages;
