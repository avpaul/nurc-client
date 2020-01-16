import React from 'react';
import ArticleView from '../../components/articleView';
import Footer from '../../components/footer';
import Head from 'next/head';

const ArticleContainer = ({ article }) => {
  return (
    <>
      <Head></Head>
      <ArticleView article={article} />
      <Footer />
      <style></style>
    </>
  );
};

ArticleContainer.getInitialProps = async ({ req, res, query: { slug } }) => {
  const article = {
    title: 'A complex and complete guide to staying in Rwanda'
  };
  return { article };
};

export default ArticleContainer;
