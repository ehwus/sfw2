import React from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
}
