import { React } from 'react';
// import <style></style>

const Card = ({ Component, ...props }) => {
  return (
    <div className="card-wrapper">
      <Component {...props} />
      <style>{`
      .card-wrapper {

      }
        `}</style>
    </div>
  );
};
