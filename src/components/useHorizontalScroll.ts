import { RefObject, useEffect } from 'react';

export const useHorizontalScroll = (
  containerRef: RefObject<HTMLDivElement>,
  options: { smooth?: boolean; speed?: number } = {}
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let animationFrame: number;
    let scrollTimeout: number;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!isScrolling || !options.smooth) {
        if (options.smooth) {
          isScrolling = true;
        }
        
        const scrollSpeed = options.speed || 1.5;
        const delta = e.deltaY || e.deltaX;
        
        if (options.smooth) {
          const targetScroll = container.scrollLeft + (delta * scrollSpeed);
          const startScroll = container.scrollLeft;
          const startTime = performance.now();
          const duration = 300;

          const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            container.scrollLeft = startScroll + (targetScroll - startScroll) * easeProgress;

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animateScroll);
            }
          };

          cancelAnimationFrame(animationFrame);
          animationFrame = requestAnimationFrame(animateScroll);
        } else {
          container.scrollLeft += delta * scrollSpeed;
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          isScrolling = false;
        }, 150);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [containerRef, options.smooth, options.speed]);
};