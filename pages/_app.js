import App from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>NURC Info DB</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />

        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          html,
          body {
            width: 100%;
            background-color: #ffffff;
          }
        `}</style>
      </>
    );
  }
}
