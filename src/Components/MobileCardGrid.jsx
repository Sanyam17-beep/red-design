import React from 'react';
// import './MobileCardGrid.css';
// import FirstCardFront from './FirstCardFront';
// import LastCardFront from './LastCardFront';
const LastCardFront = () => {
    return (
      <div>
        Last Card Front
      </div>
    );
  };
  const FirstCardFront = () => {
    return (
      <div>
        First Card Front
      </div>
    );
  };
const Card = ({ flipOnHover, className, FrontComponent }) => {
  return (
    <div className={`card ${flipOnHover ? 'flip-on-hover' : ''} ${className}`}>
      <div className="card-inner">
        <div className="card-front"><FrontComponent /></div>
        <div className="card-back">
          <div className="cz_box_back_inner_position flex-row-bottom">
            <div className="cz_box_back_title">Landscape</div>
            <div className="cz_box_back_content">
              We love turning your outside areas into an extension of your house, whether it's a peaceful garden, a chic patio, or a practical outdoor living space.
            </div>
            <a className="cz_box_back_btn" href="https://adamdesignstudio.com/landscape/">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileCardGrid = () => {
  return (
    <div className="mobile-card-grid">
      <Card 
        className="first-card" 
        flipOnHover={false} 
        FrontComponent={FirstCardFront} 
      />
      <Card 
        flipOnHover={false} 
        FrontComponent={() => <div>Front</div>} 
      />
      <Card 
        flipOnHover={true} 
        FrontComponent={() => <div>Front</div>} 
      />
      <Card 
        flipOnHover={true} 
        FrontComponent={() => <div>Front</div>} 
      />
      <Card 
        flipOnHover={true} 
        FrontComponent={() => <div>Front</div>} 
      />
      <Card 
        className="last-card" 
        flipOnHover={false} 
        FrontComponent={LastCardFront} 
      />
    </div>
  );
};

export default MobileCardGrid;