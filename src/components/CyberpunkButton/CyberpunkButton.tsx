import React from 'react';
import './CyberpunkButton.css';

export type CyberpunkButtonProps = {
  label: string;
  styleType: 'cyberpunk' | 'glow' | 'neonBorder' | 'flicker' | 'hologram';
  onClick: () => void;
};

const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({ label, styleType, onClick }) => {
  return (
    <button className={`cyberpunk-button ${styleType}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CyberpunkButton;