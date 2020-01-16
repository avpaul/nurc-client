import React, { useEffect, useState } from 'react';
import Navbar from './navbar';

const AppLayout = ({ children, bodyStyle, navStyle }) => {
  const [floatNav, setFloatNav] = useState(false);
  const onScrollHandler = () => {
    if (window.scrollY >= 72) {
      return setFloatNav(true);
    }
    return setFloatNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler, true);
    return () => {
      window.removeEventListener('scroll', onScrollHandler, true);
    };
  }, []);

  return (
    <>
      <div className="app-wrapper" style={bodyStyle}>
        <Navbar float={floatNav} style={navStyle} />
        <div className="component-wrapper">{children}</div>
      </div>
      <style jsx>{`
        .app-wrapper {
          position: relative;
          width: 75%;

          margin: 0 auto;
          font-family: 'Montserrat';
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default AppLayout;
