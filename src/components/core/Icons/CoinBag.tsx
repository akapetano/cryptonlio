import { color, useColorMode, useColorModeValue } from "@chakra-ui/react";

interface ICoinBagProps {
  width?: string;
  height?: string;
}

export const CoinBag = ({ width, height }: ICoinBagProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <svg
      width={width ? `${width}px` : "50px"}
      height={height ? `${height}px` : "50px"}
      viewBox={`0 0 35 35`}
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Coin Bag</title>
      <path
        d="M21.6,29a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,29Z"
        fill={isDark ? "#419547" : "#3B8740"}
      ></path>
      <path
        d="M22.54,24h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
        fill={isDark ? "#419547" : "#3B8740"}
      ></path>
      <path
        d="M22,32H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
        fill={isDark ? "#419547" : "#3B8740"}
      ></path>
      <path
        d="M32.7,32h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z"
        fill={isDark ? "#419547" : "#3B8740"}
      ></path>
      <path
        d="M33.7,28h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z"
        fill={isDark ? "#419547" : "#3B8740"}
      ></path>
      <path
        d="M33.74,26a28,28,0,0,0-2.82-10.12A20.24,20.24,0,0,0,24.6,8.71L27,3.42a1,1,0,0,0-.07-1A1,1,0,0,0,26.13,2H9.8a1,1,0,0,0-.91,1.42l2.45,5.31a20.33,20.33,0,0,0-6.28,7.15c-2.15,4-2.82,8.89-3,12.28a3.6,3.6,0,0,0,1,2.71A3.79,3.79,0,0,0,5.8,31.94H12V30H5.72a1.68,1.68,0,0,1-1.21-.52,1.62,1.62,0,0,1-.45-1.23c.14-2.61.69-7.58,2.76-11.45A18,18,0,0,1,13.08,10h1a30.81,30.81,0,0,0-1.87,2.92,22.78,22.78,0,0,0-1.47,3.34l1.37.92a24,24,0,0,1,1.49-3.47A29.1,29.1,0,0,1,16.05,10h1a21.45,21.45,0,0,1,1.41,5,22.54,22.54,0,0,1,.32,3.86l1.58-1.11a24.15,24.15,0,0,0-.32-3A24.82,24.82,0,0,0,18.76,10h.78l.91-2H13.21L11.36,4H24.57l-2.5,5.47a9.93,9.93,0,0,1,1.23.78,18.63,18.63,0,0,1,5.86,6.57A26.59,26.59,0,0,1,31.73,26Z"
        fill={isDark ? "#419547" : "#3B8740"}
      ></path>
      <rect
        x="0"
        y="0"
        width="36"
        height="36"
        fillOpacity="0"
        fill={isDark ? "#419547" : "#3B8740"}
      />
    </svg>
  );
};
