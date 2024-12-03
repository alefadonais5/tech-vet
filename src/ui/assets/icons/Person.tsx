import React from "react";

interface CustomIconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const PersonIcon: React.FC<CustomIconProps> = ({
    width = 22,
    height = 22,
    fill = "none",
    stroke = "white",
}) => ( <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 16 16"
    >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" 
        stroke={stroke}
    />
    </svg>
);

export default PersonIcon;
