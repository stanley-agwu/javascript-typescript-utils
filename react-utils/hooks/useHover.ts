import { ForwardedRef, MutableRefObject, useEffect, useRef, useState } from "react"

export const useHover = <T extends HTMLElement | null>(): [
  ForwardedRef<T> | MutableRefObject<T>, boolean,
] => {
  const [value, setValue] = useState(false);
  const ref = useRef<T>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      }
    }
    return () => {};
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}