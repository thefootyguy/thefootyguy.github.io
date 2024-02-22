// components/Card.tsx

import { GeistSans } from "geist/font/sans";
import React, { ReactNode } from "react";
import "../app/styles/card.css";
import { componentSize } from "./button";
// Children Is Content
// Extra Is Extra Class Names
// Size Can Either Fill Parent Or Have A Max Width (Typical Card
interface CardProps {
  children: ReactNode;
  extra?: string;
  size?: componentSize;
}

const Card: React.FC<CardProps> = ({ children, extra, size = componentSize.Normal }) => {
  if (size == componentSize.Normal) {
    return <div className={"card card-normal " + extra}>{children}</div>;
  } else {
    return <div className={"card card-fill " + extra}>{children}</div>;
  }
};

// Contains Two or More Cards
const CardContainer: React.FC<CardProps> = ({ children, extra }) => {
  return <div className=" card-container-double">{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  justify?: boolean;
  extra?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, justify = false, extra }) => {
  if (!justify) {
    return <div className={GeistSans.className + " card-content bold500 small-text " + extra}>{children}</div>;
  } else {
    return (
      <div className={GeistSans.className + " card-content bold500 small-text flex justify-between " + extra}>
        {children}
      </div>
    );
  }
};

export const CardHead: React.FC<CardProps> = ({ children, extra }) => {
  return <h1 className={GeistSans.className + " bold600 card-head " + extra}>{children}</h1>;
};

export const CardSub: React.FC<CardProps> = ({ children, extra }) => {
  return <h3 className={GeistSans.className + " card-sub " + extra}>{children}</h3>;
};

export default Card;
