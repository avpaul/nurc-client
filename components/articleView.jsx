import React from 'react';
import { Button } from 'antd';

const ArticleView = ({ article }) => {
  return (
    <>
      <section>
        <h2>{article.title}</h2>
        <div>{article.createdAt}</div>
        <div>
          <div>
            <Button shape="circle" icon="twitter" />
            <Button shape="circle" icon="facebook" />
            <Button shape="circle" icon="linkedin" />
          </div>
          <div>author</div>
        </div>
      </section>
      <style jsx>{``}</style>
    </>
  );
};

export default ArticleView;
