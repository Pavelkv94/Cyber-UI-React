import React from "react";
import "./CyberpunkButton.scss";

export type CyberpunkButtonProps = {
  label: string;
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Type of button decorations */
  type?: "dashed" | "outlined" | "contained" | "text";

  styleType?: "electric" | "glow" | "orange" | "purple" | "green";

  hoverStyle?: "left" | "right" | "center" | "none";

  rounded?: boolean;
  onClick?: () => void;
};

const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({
  label,
  size = "medium",
  type = "outlined",
  styleType = "electric",
  rounded = false,
  hoverStyle = "none",
  onClick,
}) => {
  return (
    <button
      className={`cyberpunk-button  cyberpunk-button--${styleType} cyberpunk-button--${type} cyberpunk-button--${size} cyberpunk-button-hover--${hoverStyle} ${
        rounded ? "cyberpunk-button--rounded" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CyberpunkButton;
