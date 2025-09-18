import React from 'react';

/**
 * Hook that allows you to use an element as a clickable area outside of it.
 * @param {React.RefObject<HTMLElement>} ref - the ref of the element you want to use as a click area.
 * @param {() => void} handler - the function to call when the user clicks outside of the element.
 * @returns None
 */
export function useOnClickOutside(ref: any, handler: any) {
  React.useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
