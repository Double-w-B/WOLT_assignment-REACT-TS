import styled from "styled-components";

export const TotalSection = styled.section`
  grid-column: 8/-1;
  grid-row: 2/3;
  border-radius: 0.5rem;
  margin: 2rem 0.5rem 2rem 0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  .error {
    width: 100%;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--red-clr);
    letter-spacing: 0.5px;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
  }
`;

export const TotalResult = styled.div`
  width: 90%;
  height: 60%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.3px);
  -webkit-backdrop-filter: blur(0.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  p {
    font-weight: bold;
    font-size: 1.8rem;
    color: var(--yellow-clr);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  }

  .value {
    width: 80%;
    height: 50%;
    display: grid;
    place-items: center;
    position: relative;

    p {
      font-size: 1.8rem;
      color: var(--white-clr);
      font-size: 5rem;
      text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    }

    .underline {
      width: 100%;
      height: 5px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--white-clr);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const TotalButtons = styled.div<{ isReady: boolean }>`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-between;

  button {
    width: 45%;
    max-height: 55px;
    background-color: var(--primary-blue-clr);
    color: var(--white-clr);
    font-family: inherit;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: 0.3s linear;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);

    &:last-child {
      color: ${(props) => (props.isReady ? "var(--yellow-clr)" : "var(--white-clr)")};
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
