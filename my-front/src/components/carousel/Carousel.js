// from https://dev.to/rakumairu/how-to-show-multiple-item-in-simple-react-carousel-32dd
// and infinite loop from https://dev.to/rakumairu/how-to-handle-infinite-loop-in-react-carousel-43ae
import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ children, show, infiniteLoop }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? "none" : undefined,
            
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        <button onClick={next} className="right-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
