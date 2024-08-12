import React, { useState, useEffect } from 'react';
import { Carousel } from './Crousel';

const Banner = ({ description, link, timer, visible }) => {
  var [timeLeft, setTimeLeft] = useState(timer);
  useEffect(() => {
    if (!visible || timeLeft <= 0) return;

    const countdown = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [visible]);

  if (!visible || timeLeft <= 0) return null;

  return (
    <div className="banner" >
        {
         visible && <Carousel link={link} timeLeft={timeLeft} description={description} />
        }
    </div>
  );
};

export default Banner;
