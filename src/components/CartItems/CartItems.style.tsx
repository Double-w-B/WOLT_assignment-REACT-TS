import styled from "styled-components";

export const CartItems = styled.div<{ isValue: boolean }>`
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    order: 1;
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #fff;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    span {
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      margin: 0 0.5rem;
      background-color: #0081c9;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      svg {
        transform: translateY(-2px);
        transition: 0.3s linear;
        color: ${(props) => props.isValue && "#ffc93c"};
      }
    }
  }

  .value {
    order: 2;
    width: 230px;
    height: 3.5rem;
    /* background-color: red; */
    align-self: end;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      & ~ p span svg {
        color: #ffc93c;
      }
    }

    input {
      width: 110px;
      height: 2.5rem;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
      border-radius: 0.5rem;

      outline: none;
      color: #fff;

      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(0.3px);
      -webkit-backdrop-filter: blur(0.3px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
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
      background-color: #0081c9;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      &:active {
        transform: scale(0.8);
      }
      &:hover {
        opacity: 0.8;
      }

      svg {
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
        filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.4))
      }
    }
  }
`;
