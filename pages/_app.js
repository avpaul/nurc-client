import App from 'next/app';
import Head from 'next/head';

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <div className="app-wrapper">
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <Component {...pageProps} />
        </div>

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

          .app-wrapper {
            width: 100%;
            margin: 0 auto;
            font-family: 'Montserrat';
            font-size: 18px;
            font-height: 20px;
          }
        `}</style>
      </>
    );
  }
}
