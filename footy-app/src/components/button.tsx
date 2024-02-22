"use client";

import { GeistSans } from "geist/font/sans";
import React, { ReactNode } from "react";
import "../app/styles/button.css";

export enum componentSize {
  Normal,
  Fill,
}

interface ButtonProps {
  children: ReactNode;
  size?: componentSize;
  onClick?: () => void;
  href?: string;
  extraClass?: string;
}

const Button: React.FC<ButtonProps> = ({ children, size = componentSize.Normal, onClick, extraClass, href }) => {
  const handleClick = () => {
    // If an onClick prop is provided, call it
    if (onClick) {
      onClick();
    }
    // If an href prop is provided, navigate to the specified URL
    if (href) {
      window.location.href = href;
    }
  };

  if (size == componentSize.Normal) {
    return (
      <button className={"button button-normal bold600 " + extraClass} onClick={handleClick}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={"button button-fill bold600 " + extraClass} onClick={handleClick}>
        {children}
      </button>
    );
  }
};

export default Button;
