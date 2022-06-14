import { useIntersection } from "../../../services/effects/intersection.effect"

export const IntersectionWrapperComponent = ({component}) => {
  const [ containerRef, visible ] = useIntersection({root: null, rootMargin: "0px", threshold: 0.8});
  const view = visible ? component : '';
  return (
    <div ref={containerRef}>
      {view}
    </div>
  )
}