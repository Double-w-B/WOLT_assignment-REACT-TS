import styled from "styled-components";

export const DeliveryDistance = styled.div<{ isValue: boolean }>`
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
    color: var(--white-clr);
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    span {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.8rem;
      display: grid;
      place-items: center;
      margin: 0 0.5rem;
      border-radius: 50%;
      background-color: var(--primary-blue-clr);
      transition: 0.3s linear;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      svg {
        transform: rotate(-90deg);
        color: ${(props) => props.isValue && "var(--yellow-clr)"};
      }
    }
  }

  .value {
    order: 2;
    width: 230px;
    height: 4.5rem;
    align-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover {
      & ~ p span {
        color: var(--yellow-clr);
      }
    }

    div {
      position: relative;

      input[type="text"] {
        width: 110px;
        height: 40px;
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        border-radius: 0.5rem;
        outline: none;
        color: var(--white-clr);
        text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
        font-family: inherit;
        transition: 0.2s linear;
        background-color: ${(props) =>
          props.isValue ? "rgba(255, 255, 255, 0.2)" : "transparent"};
        box-shadow: ${(props) =>
          props.isValue ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none"};
        backdrop-filter: ${(props) => (props.isValue ? "blur(0.3px)" : "none")};
        -webkit-backdrop-filter: ${(props) =>
          props.isValue ? "blur(0.3px)" : "none"};
        border: ${(props) =>
          props.isValue ? "1px solid rgba(255, 255, 255, 0.3)" : "none"};

        &:hover,
        &:focus {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(0.3px);
          -webkit-backdrop-filter: blur(0.3px);
          border: 1px solid rgba(255, 255, 255, 0.3);

          & ~ p {
            right: -2rem;
          }
        }
        &:focus {
          & ~ p {
            right: -2rem;
          }
        }
      }
      p {
        position: absolute;
        top: 50%;
        right: ${(props) => (props.isValue ? "-2rem" : "1rem")};
        transform: translateY(-50%);
        transition: 0.2s linear;
        padding-bottom: 2px;
        pointer-events: none;
      }
    }

    input[type="range"] {
      width: 100%;
      -webkit-appearance: none;
      background-color: transparent;

      &:focus {
        outline: none;

        &::-webkit-slider-runnable-track {
          background-color: var(--white-clr);
        }

        &::-ms-fill-lower {
          background-color: var(--primary-blue-clr);
        }

        ::-ms-fill-upper {
          background-color: var(--primary-blue-clr);
        }
      }

      &::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        border-width: 16px 0;
        background-color: transparent;
        border-color: transparent;
        color: transparent;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 36px;
        width: 16px;
        border-radius: 0.5rem;
        background-color: var(--primary-blue-clr);
        cursor: grab;
        margin-top: -14px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &:active {
          cursor: grabbing;
        }
      }

      &::-moz-range-thumb {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border: none;
        height: 36px;
        width: 16px;
        border-radius: 0.5rem;
        background-color: var(--primary-blue-clr);
        cursor: grab;

        &:active {
          cursor: grabbing;
        }
      }

      &::-ms-thumb {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        height: 36px;
        width: 16px;
        border-radius: 0.5rem;
        background-color: var(--primary-blue-clr);
        cursor: pointer;
      }

      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background-color: var(--white-clr);
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background-color: var(--white-clr);
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &::-ms-fill-lower {
        background-color: var(--white-clr);
        border-radius: 0.5rem;
      }

      &::-ms-fill-upper {
        background-color: var(--white-clr);
        border-radius: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    p {
      margin-bottom: 0.5rem;
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
    .value div input[type="text"] {
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
        font-size: 1.6rem;
      }
    }
    .value {
      width: 210px;
      div {
        input {
          height: 35px;
        }
        p {
          padding-bottom: 0px;
        }
      }

      input[type="range"] {
        &::-webkit-slider-thumb {
          height: 30px;
          width: 13px;
        }
        &::-moz-range-thumb {
          height: 30px;
          width: 13px;
        }
        &::-ms-thumb {
          height: 30px;
          width: 13px;
        }

        &::-ms-track {
          height: 7px;
        }
        &::-webkit-slider-runnable-track {
          height: 7px;
        }
        &::-moz-range-track {
          height: 7px;
        }
      }
    }
  }
`;
