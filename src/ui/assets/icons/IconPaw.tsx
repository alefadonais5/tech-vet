import React from "react";

interface CustomIconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const IconPaw: React.FC<CustomIconProps> = ({
    width = 22,
    height = 22,
    fill = "currentColor",
    stroke = "white",
}) => ( <svg
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill={fill}
    >
    <path d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12-17.23-10.71-33.5-20.83-44.14-39-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 00-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464 448 430.85 448 390.11a78.3 78.3 0 00-5.2-28.29z" />
    <path d="M128 216 A56 72 0 0 1 72 288 A56 72 0 0 1 16 216 A56 72 0 0 1 128 216 z" />
    <path d="M240 120 A56 72 0 0 1 184 192 A56 72 0 0 1 128 120 A56 72 0 0 1 240 120 z" />
    <path d="M384 120 A56 72 0 0 1 328 192 A56 72 0 0 1 272 120 A56 72 0 0 1 384 120 z" />
    <path d="M496 216 A56 72 0 0 1 440 288 A56 72 0 0 1 384 216 A56 72 0 0 1 496 216 z" stroke={stroke}/>
    </svg>
);

export default IconPaw;