import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const Navbar = ({ float }) => {
  return (
    <>
      <header className={`header ${float ? 'header__should-float' : ''}`}>
        <div className="header-wrapper">
          <Link href="/">
            <a className="logo-text">NURC</a>
          </Link>
          <div className="nav-spacer"></div>
          <Button type="link" style={{ color: '#000000' }}>
            Login
          </Button>
        </div>
      </header>
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          width: 100%;
          height: 72px;
          z-index: 1100;
          box-shadow: none;
          transition: box-shadow 0.25s ease-in-out;
        }

        .header.header__should-float {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        }

        .header-wrapper {
          width: 75%;
          height: 100%;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 16px 0;
          background-color: #41b688;
          background-color: #ffffff;
        }
        .nav-spacer {
          flex-basis: 100%;
        }
        .logo-text {
          font-size: 20px;
          font-weight: 700;
          text-decoration: none;
          color: #000000;
        }
      `}</style>
    </>
  );
};

export default Navbar;
