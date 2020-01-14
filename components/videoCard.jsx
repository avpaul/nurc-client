import React, { useState } from 'react';
import { Button, Modal, Icon } from 'antd';

const VideoCard = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="video-card">
        <div className="video-wrapper">
          <video>
            <source src={data.src} type={data.type} key="video" />
          </video>
          <div className="video-card__overlay">
            <Button
              onClick={() => setVisible(true)}
              shape="circle"
              icon="play-circle"
              style={{
                fontSize: '48px',
                color: '#ffffff',
                width: '72px',
                height: '72px',
                background: 'transparent',
                border: 'none'
              }}
            />

            <div className="video-title">{data.name}</div>
            <div className="video-description">{data.description}</div>
          </div>
        </div>
        <Modal
          destroyOnClose={true}
          visible={visible}
          footer={null}
          onCancel={() => setVisible(false)}
          bodyStyle={{
            height: '512px',
            backgroundColor: '#000000',
            padding: 0
          }}
          closeIcon={
            <Icon type="close" style={{ color: '#ffffff', fontSize: '18px' }} />
          }
          width="768px"
        >
          <video controls className="modal-video">
            <source src={data.src} type={data.type} key="video" />
          </video>
        </Modal>
      </div>
      <style jsx>{`
        .video-card {
          width: 512px;
          margin-bottom: 32px;
        }
        .video-wrapper {
          position: relative;
        }
        .video-wrapper:hover {
          cursor: pointer;
        }
        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-card__overlay {
          position: absolute;
          top: 0;
          bottom: 8px;
          left: 0;
          right: 0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background-color: #00000050;
        }
        .video-title {
          padding-left: 8px;
          margin-bottom: 8px;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
        }
        .video-description {
          padding: 0 8px;
          font-size: 18px;
          font-weight: 400;
          color: #ffffff98;
        }
        .modal-video {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
        .modal-video:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default VideoCard;
