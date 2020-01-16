import React from 'react';
import Link from 'next/link';
import { Icon } from 'antd';
import { Unity, Worker, Fist } from '../assets/icons-cp';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__top-section">
          <div className="top-section__tagline">For the Rwanda we want!</div>
          <div className="top-section__values">
            <div className="value__wrapper">
              <div className="value__title">
                <Icon component={Unity} style={{ fontSize: '24px' }} />{' '}
                <span>&nbsp;Unity</span>
              </div>
              <div className="value__description">
                We cannot be separated in interest or divided in purpose. We
                stand together until the end.
              </div>
            </div>

            <div className="value__wrapper">
              <div className="value__title">
                <Icon component={Worker} style={{ fontSize: '24px' }} />
                <span>&nbsp;Work</span>
              </div>
              <div className="value__description">
                People who work together will win, whether it be against complex
                football defenses, or the problems of modern society.
              </div>
            </div>

            <div className="value__wrapper">
              <div className="value__title">
                <Icon component={Fist} style={{ fontSize: '24px' }} />{' '}
                <span>&nbsp;Patriotism</span>
              </div>
              <div className="value__description">
                The highest patriotism is not a blind acceptance of official
                policy, but a love of one's country deep enough to call her to a
                higher plain.
              </div>
            </div>
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="logo-text">NURC</div>
              <div className="copy">&copy;&nbsp;2020</div>
            </div>
            <div className="links">
              <Link href="/about">
                <a>About US</a>
              </Link>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </div>
            <div className="links">
              <Link href="/about">
                <a>Terms & Conditions</a>
              </Link>
              <Link href="/contact-us">
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
          <div className="social-accounts__wrapper">
            <div className="social-accounts__title">Follows us </div>
            <div className="social-accounts">
              <a href="https://twitter.com" className="social-account">
                <Icon type="twitter" />
              </a>
              <a href="https://instagram.com" className="social-account">
                <Icon type="instagram" />
              </a>
              <a href="https://facebook.com" className="social-account">
                <Icon type="facebook" />
              </a>
              <a href="https://linkedin.com" className="social-account">
                <Icon type="linkedin" />
              </a>
              <a href="https://youtube.com" className="social-account">
                <Icon type="youtube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          margin: 0;
          padding: 32px 0 64px;
          width: 100%;
        }

        .footer__top-section {
          width: 85%;
        }

        .top-section__tagline {
          margin-bottom: 24px;
          font-size: 24px;
          font-weight: 700;
          color: #000000;
        }
        .top-section__values {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
        }

        .value__wrapper {
          width: 30%;
        }

        .value__title {
          margin-bottom: 8px;
          font-size: 20px;
          font-weight: 400;
          color: #000000;
        }

        .value__description {
          font-size: 16px;
        }

        .footer__wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 64px;
        }
        .footer-left {
          display: flex;
          flex-direction: row;
        }
        .footer-logo {
          min-width: 128px;
        }
        .links {
          min-width: 128px;
        }
        .links a {
          display: block;
          font-size: 14px;
          font-weight: 400;
          line-height: 30px;
          color: #000000;
        }

        .links a:hover {
          text-decoration: underline;
        }

        .copy {
          font-size: 14px;
        }

        .social-accounts__title {
          font-weight: 400;
          font-size: 16px;
          color: #000000;
        }

        .social-account {
          display: inline-block;
          height: 36px;
          width: 36px;
          margin: 8px;
          line-height: 36px;
          background-color: #000000;
          color: #ffffff;
          border-radius: 50%;
          vertical-align: middle;
          text-align: center;
        }
        .social-account:first-of-type {
          margin-left: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
