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
    color: #fff;

    span {
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      margin: 0 0.5rem;
      border-radius: 50%;
      background-color: #0081c9;
      transition: 0.3s linear;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      svg {
        transform: rotate(-90deg);
        color: ${(props) => props.isValue && "#ffc93c"};
      }
    }
  }

  .value {
    order: 2;
    width: 230px;
    height: 4rem;
    /* background-color: red; */
    align-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover {
      & ~ p span {
        color: #ffc93c;
      }
    }

    input {
      width: 100%;
      -webkit-appearance: none;
      background: transparent;

      &:focus {
        outline: none;

        &::-webkit-slider-runnable-track {
          background: #fff;
        }

        &::-ms-fill-lower {
          background: #0081c9;
        }

        ::-ms-fill-upper {
          background: #0081c9;
        }
      }

      &::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        border-width: 16px 0;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 36px;
        width: 16px;
        border-radius: 0.5rem;
        background: #3071a9;
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
        background: #0081c9;
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
        background: #0081c9;

        cursor: pointer;
      }

      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: #ffffff;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: #ffffff;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &::-ms-fill-lower {
        background: #ffffff;
        border-radius: 0.5rem;
      }

      &::-ms-fill-upper {
        background: #ffffff;
        border-radius: 0.5rem;
      }
    }

    label {
      font-size: 1.8rem;
      font-weight: bold;
      color: #fff;
    }
  }
`;
