import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollPage = () => {
  const sectionRef = useRef(null);
  const horizontalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".horizontal-section");
    const horizontalContainer = horizontalContainerRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalContainer,
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => horizontalContainer ? `+=${horizontalContainer.offsetWidth - window.innerWidth}` : '+=0',
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div 
        ref={horizontalContainerRef} 
        className="flex "
        style={{ width: "200vw" }}
      >
        <div className="horizontal-section w-screen h-screen flex-shrink-0">
          <Projects setBgVariant={() => {}} setCursorText={() => {}} /> 
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollPage;