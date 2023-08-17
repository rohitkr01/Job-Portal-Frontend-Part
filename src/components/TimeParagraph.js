import React, { useState, useEffect } from 'react';

const TimedParagraph = ({ content }) => {
  const [showParagraph, setShowParagraph] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showParagraph && <p>{content}</p>}
    </div>
  );
};

export default TimedParagraph;
