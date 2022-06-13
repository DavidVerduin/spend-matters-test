import { useEffect, useRef, useState } from "react";

/** Effect to detect if the component is visible */
export const useIntersection = (options) => {
  const containerRef = useRef(0);
  const [intersected, setIntersected] = useState(false);
  console.log('useIntersection called')


  useEffect(() => {
    console.log('useIntersection useEffect called')
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      console.log('cb called', entry)
      if(entry.isIntersecting) {
        setIntersected(entry.isIntersecting);
        observer.unobserve(containerRef.current);
      }
    }, options);
    console.log('containerRef', containerRef)
    if(containerRef.current) observer.observe(containerRef.current);

    return () => {
      console.log('containerRef', containerRef)
      if(containerRef.current) observer.unobserve(containerRef.current);
    }
  }, [containerRef, options]);
  return [containerRef, intersected];
}