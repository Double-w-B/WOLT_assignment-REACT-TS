import styled from "styled-components";

export const DeliveryDistance = styled.div<{ isValue: boolean }>`
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
    color: var(--white-clr);
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    span {
      width: 2.5rem;
      height: 2.5rem;
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
    height: 4rem;
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

    input {
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

    label {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--white-clr);
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
    }
  }
`;
