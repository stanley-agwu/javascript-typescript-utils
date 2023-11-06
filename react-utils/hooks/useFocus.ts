import { MutableRefObject, useEffect, useState } from "react"

export const useFocus = (ref: MutableRefObject<any>, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(
    () => {
      const onFocus = () => setState(true);
      const onBlur = () => setState(false);
      if (ref.current) {
        ref.current.addEventListener('focus', onFocus);
        ref.current.addEventListener('blur', onBlur);
      }
      return () => {
        ref.current.removeEventListener('focus', onFocus);
        ref.current.removeEventListener('blur', onBlur);
      }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [ref.current] // Recall only if ref changes
  );
  return state;
}