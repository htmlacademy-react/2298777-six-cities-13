import { useEffect, MutableRefObject } from 'react';

const useOutside = (ref : MutableRefObject<HTMLElement | null>, cb: () => void) => {
  useEffect(() => {
    const handleClickOutside = (evt: Event) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        cb();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, cb]);
};

export default useOutside;
