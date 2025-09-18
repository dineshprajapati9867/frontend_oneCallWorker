import { useEffect, useState } from 'react';

export const useResize = (myRef: { current: { offsetWidth: any; offsetHeight: any } }) => {
  /**
   * Gets the width and height of the element that the ref points to.
   * @returns {object} - an object with the width and height of the element.
   */
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
};
