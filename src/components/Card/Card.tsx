import React from "react";
import "./Card.scss";

export type CardProps = {
  title: string;
  extra?: string;
};


//! NOT IMPLEMENTED
export const Card: React.FC<CardProps> = ({ title, extra }) => {
  return (
    <div className="cyberpunk-card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">{"children"}</div>
    </div>
  );
};
