import styled, { css } from "styled-components";

const commonStyles = css`
  text-align: center;
  font-family: inherit;
  font-weight: bold;
  color: var(--white-clr);
  font-size: 18px;
  text-transform: uppercase;
  outline: none;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.3px);
  -webkit-backdrop-filter: blur(0.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.3s linear;
  cursor: pointer;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
  letter-spacing: 1px;
`;

export const OrderTime = styled.section`
  margin-top: 0.3rem;
  width: 90%;
  display: flex;
  justify-content: space-between;

  input[type="date"] {
    ${commonStyles}
    width: 160px;
    padding: 4px 0;
    margin-right: 0.1rem;

    &::-webkit-calendar-picker-indicator {
      padding: 5px;
      cursor: pointer;
      color-scheme: dark;
    }
  }

  input[type="time"] {
    ${commonStyles}
    padding: 5px;

    &::-webkit-calendar-picker-indicator {
      padding: 5px;
      cursor: pointer;
      color-scheme: dark;
    }
  }

  @media screen and (max-width: 900px) {
    width: 95%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
