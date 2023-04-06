import React from "react";

export function useOutsideClick(callback: () => void) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleClick = (event: any) => {
      console.log(event);
      if (ref.current && !ref.current.contains(event.target)) {
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