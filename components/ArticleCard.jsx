import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const CardWrapper = styled.div``;

const ArticleCard = ({ article }) => {
  return (
    <>
      <CardWrapper>
        <div className="article-card">
          <div className="img-wrapper">
            <img src={article.coverImage} />
          </div>
          <div className="article-info">
            <Link href={article.slug}>
              <a className="article-title">{article.title}</a>
            </Link>
            <p className="article-desc">{article.description}</p>
          </div>
        </div>
      </CardWrapper>
      <style jsx>{`
        .article-card {
          position: relative;
          width: 100%;
        }
        .img-wrapper {
          height: 350px;
          width: 75%;
          border-radius: 0;
          overflow: hidden;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
        }
        .article-info {
          position: absolute;
          bottom: 16px;
          left: 36%;
          width: 75%;
          padding: 16px;
          background-color: #ffffff;
          border-radius: 4px;
        }
        .article-title {
          display: inline-block;
          margin-bottom: 12px;
          text-decoration: none;
          font-size: 30px;
          font-family: inherit;
          font-weight: 700;
          line-height: 36px;
          color: #000000;
        }
        .article-desc {
          margin: 0;
          font-size: 18px;
          font-family: inherit;
          color: #000000;
        }
      `}</style>
    </>
  );
};

export default ArticleCard;
