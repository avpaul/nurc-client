import React from 'react';
import People from '../assets/svg/People';

const Board = () => {
  return (
    <>
      <div className="board">
        <div className="board__tagline">
          <div>
            <span>PROVIDING&nbsp;</span>
            <div className="board__tagline__animation--wrapper">
              <div className="board__tagline__animation">
                <div className="board__tagline__changing">REALTIME</div>
                <div className="board__tagline__changing">CORRECT</div>
                <div className="board__tagline__changing">CREDIBLE</div>
              </div>
            </div>
          </div>
          <div>INFORMATION ON RWANDA</div>
        </div>
        <div className="board__bg">
          <People />
        </div>
      </div>
      <style jsx>{`
        .board {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .board__tagline {
          font-family: inherit;
          font-size: 36px;
          font-weight: 700;
          line-height: 60px;
          color: #000000;
          margin-right: 32px;
        }
        .board__tagline__animation--wrapper {
          position: relative;
          display: inline-block;
          height: 42px;
          min-width: 200px;
          margin-bottom: -12px;
          overflow: hidden;
        }

        .board__tagline__animation {
          position: absolute;
          top: -84px;
          z-index: 1000;
          animation: word_splash 3s infinite alternate;
        }

        @keyframes word_splash {
          0% {
            top: -84px;
          }
          20% {
            top: -84px;
          }
          50% {
            top: -42px;
          }
          80% {
            top: 0;
          }
          100% {
            top: 0;
          }
        }

        .board__tagline__changing {
          display: block;
          line-height: 36px;
          border-bottom: 6px solid #000000;
        }

        .board__bg {
          width: 512px;
          height: 348px;
        }
      `}</style>
    </>
  );
};

export default Board;
