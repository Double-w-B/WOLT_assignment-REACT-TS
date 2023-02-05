import React from "react";
import * as Styled from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <Styled.Footer>
      <p>
        made by{" "}
        <a
          href="https://github.com/Double-w-B"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Wladyslaw Balandin</span>
        </a>
      </p>
    </Styled.Footer>
  );
};

export default Footer;
