import React from "react";

interface CustomIconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const ExamsIcon: React.FC<CustomIconProps> = ({
    width = 22,
    height = 22,
    fill = "white",   // Define o preenchimento como branco
    stroke = "white", // Define o contorno como branco
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    stroke={stroke}
  >
    <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 160c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32zm64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0zM192 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z"/>
  </svg>
);

export default ExamsIcon;

