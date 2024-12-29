/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';
import 'animate.css';

function AnimatedSection({ children, animation = 'fadeIn', duration = '1s', threshold = 0.1, ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
      }
    ) ;

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, isVisible]);

  return (
    <section
      ref={ref}
      style={{ animationDuration: duration }} // هنا يتم إضافة مدة الأنيميشن
      className={`transition-all duration-400 ${
        isVisible ? `animate__animated animate__${animation}` : 'opacity-0'
      }`}
      {...props}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;
