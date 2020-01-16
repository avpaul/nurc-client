import React from 'react';
import Link from 'next/link';
import ArticleCard from '../components/ArticleCard';
import SearchBox from '../components/searchBox';
import VideoCard from '../components/videoCard';
import Footer from '../components/footer';
import Board from '../components/board';
import AppLayout from '../components/layout';
import Head from 'next/head';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className="all-sections">
          <section className="main-section">
            <Board />
            <SearchBox />
          </section>

          <section className="article-images-section">
            <div className="article__wrapper">
              <div className="section-header">
                <h2 className="section-title">Our latest articles</h2>
                <Link href="/all-articles">
                  <a className="section-link">View all articles</a>
                </Link>
              </div>
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
              <div className="section-header">
                <h2 className="section-title">Our latest images</h2>
                <Link href="/all-articles">
                  <a className="section-link">View all images</a>
                </Link>
              </div>
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

          <section className="articles-section">
            <div className="article-card">
              <div className="image-wrapper">
                <img src="https://i.picsum.photos/id/101/2621/1747.jpg" />
              </div>
              <div className="article-content">
                <Link href="/articles/article-wert">
                  <a className="article-title">
                    What does 'Ndi umunyarwanda' mean to you?
                  </a>
                </Link>
                <div className="article-description">
                  A campaign aimed at healing and unifying Rwandans dubbed, Ndi
                  Umunyarwanda (loosely translated as “I’m Rwandan”), is
                  ‘trending’ in the country
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="image-wrapper">
                <img src="https://i.picsum.photos/id/101/2621/1747.jpg" />
              </div>
              <div className="article-content">
                <Link href="/articles/articl-ssrkf-esrks">
                  <a className="article-title">
                    What does 'Ndi umunyarwanda' mean to you?
                  </a>
                </Link>
                <div className="article-description">
                  A campaign aimed at healing and unifying Rwandans dubbed, Ndi
                  Umunyarwanda (loosely translated as “I’m Rwandan”), is
                  ‘trending’ in the country
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="image-wrapper">
                <img src="https://i.picsum.photos/id/101/2621/1747.jpg" />
              </div>
              <div className="article-content">
                <Link href="/articles/article-wejfnn-wrefc">
                  <a className="article-title">
                    What does 'Ndi umunyarwanda' mean to you?
                  </a>
                </Link>
                <div className="article-description">
                  A campaign aimed at healing and unifying Rwandans dubbed, Ndi
                  Umunyarwanda (loosely translated as “I’m Rwandan”), is
                  ‘trending’ in the country
                </div>
              </div>
            </div>
          </section>

          <section className="video-section">
            <div className="section-header">
              <h2 className="section-title">Latest videos</h2>
              <Link href="/all-articles">
                <a className="section-link">View all videos</a>
              </Link>
            </div>
            <div className="latest-videos">
              <VideoCard
                data={{
                  type: 'video/mp4',
                  src: 'http://techslides.com/demos/sample-videos/small.mp4',
                  name: 'Inzira yo kwiyunga',
                  description:
                    'Uko imiryango yongeye guhuriza hamwe ikaganira, ndetse ikaniteza imbere!'
                }}
              />
              <VideoCard
                data={{
                  type: 'video/mp4',
                  src:
                    'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_2160p_60fps_normal.mp4',
                  name: 'The journey we made!',
                  description:
                    "It's not easy to forgive, what do you do when you have to?"
                }}
              />
              <VideoCard
                data={{
                  type: 'video/mp4',
                  src: 'http://techslides.com/demos/sample-videos/small.mp4',
                  name: 'Inzira yo kwiyunga',
                  description:
                    'Uko imiryango yongeye guhuriza hamwe ikaganira, ndetse ikaniteza imbere!'
                }}
              />
              <VideoCard
                data={{
                  type: 'video/mp4',
                  src: 'http://techslides.com/demos/sample-videos/small.mp4',
                  name: 'Inzira yo kwiyunga',
                  description:
                    'Uko imiryango yongeye guhuriza hamwe ikaganira, ndetse ikaniteza imbere!'
                }}
              />
            </div>
          </section>
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .app-wrapper {
        }
        .all-sections {
          width: 100%;
          margin: 0;
          padding: 16px 0;
        }
        section {
          margin: 64px 0;
        }
        .section-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .section-link {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          color: #000000;
        }
        .section-link:hover {
          text-decoration: underline;
        }
        .article-images-section .section-header {
          padding-right: 16px;
        }

        .main-section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 0;
        }

        .article-images-section {
          display: flex;
          flex-direction: row;
          margin-bottom: 48px;
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
          width: 180px;
          height: 158px;
          padding: 8px;
          background-color: #ffffff;
          cursor: pointer;
        }
        .latest-images .image-wrapper img {
          height: 100%;
          width: 100%;
        }

        .articles-section {
          margin-top: 0;
          margin-bottom: 48px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
        }

        .article-card {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 49%;
          min-height: 256px;
          margin-bottom: 16px;
        }
        .article-card .image-wrapper {
          width: 250px;
        }
        .article-card .image-wrapper img {
          width: 100%;
          height: 100%;
        }
        .article-card .article-content {
          width: 350px;
          padding: 16px;
          border: 1px solid #d3d3d3;
          border-left: none;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        .article-card .article-title {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          color: #000000;
        }

        .article-card .article-description {
          font-size: 16px;
          color: #000000;
        }

        .latest-videos {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}</style>
    </AppLayout>
  );
};

export default Home;
