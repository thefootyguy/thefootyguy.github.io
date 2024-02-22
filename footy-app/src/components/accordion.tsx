import { ReactNode, useState } from "react";
import "../app/styles/accordion.css";

interface AccordionProps {
  children?: ReactNode;
  extra?: string;
  contentID?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, extra, contentID = "" }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      aria-expanded={isActive}
      aria-controls={contentID}
      onClick={() => {
        setIsActive(!isActive);
        let content = document.getElementById(contentID);
        if (content?.classList.contains("closed")) content.classList.replace("closed", "open");
        else content?.classList.replace("open", "closed");
      }}
      className="accordion bold600"
    >
      {children}
    </button>
  );
};

export const AccordionContent: React.FC<AccordionProps> = ({ children, contentID }) => {
  return (
    <div id={contentID} className="accordion-content closed small-text">
      {children}
    </div>
  );
};

export default Accordion;
