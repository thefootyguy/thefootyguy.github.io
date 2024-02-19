// components/Card.tsx

import { GeistSans } from "geist/font/sans";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  justify: boolean;
}

export const CardContent: React.FC<CardContentProps> = ({ children, justify }) => {
  if (!justify) {
    return (
      <div className={GeistSans.className + " card-content bold500 small-text"}>
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={
          GeistSans.className + " card-content bold500 small-text flex justify-between"
        }
      >
        {children}
      </div>
    );
  }
};

export const CardHead: React.FC<CardProps> = ({ children }) => {
  return <h1 className={GeistSans.className + " bold600 card-head"}>{children}</h1>;
};

export const CardSub: React.FC<CardProps> = ({ children }) => {
  return <h3 className={GeistSans.className + " card-sub"}>{children}</h3>;
};

export default Card;
