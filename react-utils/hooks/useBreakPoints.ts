import { createContext, useEffect, useState } from "react";

export const mobileScreenMaxWidth = 768;
export const tabletScreenMaxWidth = 991;

export function debounce(fn: Function, timeout: number = 250) {
  let timeoutId: any;
  return wrapper;
  function wrapper(...args: any[]) {
    if(timeoutId) {
      clearTimeout(timeoutId);
    } 
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, timeout)
  }
}

export const isMobile = () => window.innerWidth < mobileScreenMaxWidth;
export const isTablet = () => {
  const { innerWidth } = window;
  return innerWidth >= mobileScreenMaxWidth && innerWidth <= tabletScreenMaxWidth;
};

export const BreakPointContext = createContext({ isMobile: isMobile(), tablet: isTablet() });

export const useBreakPoints = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [tablet, setTablet] = useState(isTablet());

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      document.body.classList.add('resizing-screen');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resizing-screen');
      }, 400);
      const nextIsMobile = isMobile();
      const nextIsTablet = isTablet
      setMobile(nextIsMobile);
      setTablet(nextIsTablet);
    };

    window.addEventListener('resize', debounce(handleResize, 50));
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile: mobile, isTablet: tablet };

}