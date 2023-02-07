import styled from "styled-components";

export const CartValue = styled.div<{ isValue: boolean }>`
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  p {
    order: 1;
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    color: var(--white-clr);
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    span {
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      margin: 0 0.5rem;
      background-color: var(--primary-blue-clr);
      border-radius: 50%;
      padding-right: 2px;
      font-size: 1.9rem;
      font-weight: bold;
      transition: 0.3s linear;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      color: ${(props) => props.isValue && "var(--yellow-clr)"};
      text-shadow: none;
    }
  }

  .value {
    order: 2;
    width: 230px;
    height: 3.5rem;
    align-self: end;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      & ~ p span {
        color: var(--yellow-clr);
      }
    }

    input {
      width: 110px;
      height: 40px;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
      border-radius: 0.5rem;
      outline: none;
      color: var(--white-clr);
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(0.3px);
      -webkit-backdrop-filter: blur(0.3px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
      font-family: inherit;
    }

    button {
      padding: 0.2rem;
      outline: none;
      border: none;
      display: grid;
      place-items: center;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: 0.3s linear;
      background-color: var(--primary-blue-clr);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

      &:active {
        transform: scale(0.8);
      }
      &:hover {
        opacity: 0.8;
      }

      svg {
        font-size: 2rem;
        cursor: pointer;
        color: var(--white-clr);
        filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.4));
      }
    }
  }

  @media screen and (max-width: 900px) {
    p {
      margin-bottom: 1rem;
    }
    .value {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;

    p {
      margin-bottom: 0;
    }
    .value {
      margin-bottom: 0;
      align-self: unset;
    }
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 1.6rem;
    }
    .value input {
      font-size: 1.6rem;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 550px) {
    p {
      font-size: 1.5rem;

      span {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.7rem;
      }
    }
    .value {
      width: 210px;
      input {
        height: 35px;
      }

      button {
        padding: 0.1rem;
      }
    }
  }
`;
