import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ArticleCard from '../components/ArticleCard';
import SearchBox from '../components/searchBox';
import { Button } from 'antd';

import 'antd/dist/antd.css';

const Home = () => (
  <>
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <header className="header">
        <div className="header-wrapper">
          <Link href="/">
            <a className="logo-text">NURC</a>
          </Link>
          <div className="nav-spacer"></div>
          <Button type="link">Login</Button>
        </div>
      </header>

      <div className="all-sections">
        <section className="main-section">
          <SearchBox />
        </section>

        <section className="article-images-section">
          <div className="article__wrapper">
            <h2 className="section-title">Our latest article</h2>
            <ArticleCard
              article={{
                slug: 'to-article-read',
                title: 'This is a test article for the new decade here',
                coverImage: 'https://i.picsum.photos/id/1010/5184/3456.jpg',
                description:
                  'Miss Rwanda niryo rushanwa rikomeye riri ku ruhembe rw’andi y’ubwiza yose abera mu Rwanda ndetse ni naryo ryohereza umukobwa muri Miss World, irushanwa rifatwa naryo nk’irya mbere mu y’ubwiza ku Isi.'
              }}
            />
          </div>
          <div className="latest-images__wrapper">
            <h2 className="section-title">Our latest images</h2>
            <div className="latest-images">
              <div className="image-wrapper">
                <img src="https://picsum.photos/seed/picsum/200/300" />
              </div>
              <div className="image-wrapper">
                <img src="https://picsum.photos/seed/picsum/200/300" />
              </div>
              <div className="image-wrapper">
                <img src="https://picsum.photos/seed/picsum/200/300" />
              </div>
              <div className="image-wrapper">
                <img src="https://picsum.photos/seed/picsum/200/300" />
              </div>
            </div>
          </div>
        </section>

        <section className="video-section">
          <h2 className="section-title">Latest videos</h2>
          <div className="latest-videos">
            <div className="video-wrapper">
              <video fit="cover" controls="over">
                <source
                  key="video"
                  type="video/mp4"
                  src="http://techslides.com/demos/sample-videos/small.mp4"
                />
              </video>
            </div>
            <div className="video-wrapper">
              <video fit="cover" controls="over">
                <source
                  key="video"
                  type="video/mp4"
                  src="http://techslides.com/demos/sample-videos/small.mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer__top-section">
          <div className="top-section__tagline">For the Rwanda we want!</div>
          <div className="top-section__values">
            <div className="value__wrapper">
              <div className="value__title">Unity</div>
              <div className="value__description">
                Where there is unity there is always victory.
              </div>
            </div>

            <div className="value__wrapper">
              <div className="value__title">Work</div>
              <div className="value__description">
                People who work together will win, whether it be against complex
                football defenses, or the problems of modern society.
              </div>
            </div>

            <div className="value__wrapper">
              <div className="value__title">Patriotism</div>
              <div className="value__description">
                The highest patriotism is not a blind acceptance of official
                policy, but a love of one's country deep enough to call her to a
                higher plain
              </div>
            </div>
          </div>
        </div>
        <div className="footer__wrapper">
          <div></div>
          <div></div>
        </div>
      </footer>
    </div>
    <style jsx>{`
      .header {
        width: 100%;
        height: 72px;
         {
          /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), */
        }
         {
          /* 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); */
        }
      }

      .header-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px 96px;
        background-color: #41b688;
        background-color: #ffffff;
        border-bottom-left-radius: 72px;
        border-bottom-right-radius: 72px;
      }
      .nav-spacer {
        flex-basis: 100%;
      }
      .logo-text {
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: #ffffff;
        color: #41b688;
      }
      .all-sections {
        width: 75%;
        margin: 0 auto;
        padding: 16px 0;
      }
      section {
        margin: 64px 0;
      }
      .main-section {
        display: flex;
        justify-content: center;
      }

      .article-images-section {
        display: flex;
        flex-direction: row;
      }

      .section-title {
        font-weight: 400;
        font-size: 18px;
        color: #000000;
      }
      .article__wrapper {
        width: calc(100% - 364px);
      }
      .latest-images__wrapper {
        width: 364px;
      }

      .latest-images {
        display: flex;
        flex-wrap: wrap;
      }

      .latest-images .image-wrapper {
        width: 158px;
        height: 158px;
        padding: 8px;
        background-color: #ffffff;
        cursor: pointer;
      }
      .latest-images .image-wrapper img {
        height: 100%;
        width: 100%;
      }

      .latest-videos {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
      .latest-videos .video-wrapper {
        width: 50%;
      }
      .latest-videos .video-wrapper:first-of-type {
        padding-right: 16px;
      }
      .latest-videos .video-wrapper:last-of-type {
        padding-left: 16px;
      }
      .video-wrapper video {
        width: 100%;
      }

       {
        /*  footer */
      }
      .top-section__values {
        display: flex;
        flex-direction: row;
      }

      .footer__wrapper {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </>
);

export default Home;
