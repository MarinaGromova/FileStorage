import { ReactElement, useEffect, useState } from "react";

interface ResizeDetectorProps {
  children: (width: number) => ReactElement;
}
export const ResizeDetector = ({ children }: ResizeDetectorProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const listener = () => {
      const width = window.innerWidth;
      setWidth(width);
    };

    window.addEventListener("resize", listener);
  }, []);
  return children(width);
};
