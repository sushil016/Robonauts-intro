import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RobotImage from "../../assets/robot.png";

gsap.registerPlugin(ScrollTrigger);

const Robot = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    if (imgElement) {
      gsap.fromTo(
        imgElement,
        { scale: 1 },
        {
          scale: 1.5,
          scrollTrigger: {
            trigger: imgElement,
            start: "top 80%", // Adjust this value based on your layout
            end: "top 20%",   // Adjust this value based on your layout
            scrub: true,
            markers: true,
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="fixed top-[75vh] left-[48%] right-2 transition-all duration-300 ease-out">
      <img
        ref={imgRef}
        className="w-24 h-30 text-purple-400 animate-bounce"
        src={RobotImage}
        alt="rover"
      />
    </div>
  );
};

export default Robot;