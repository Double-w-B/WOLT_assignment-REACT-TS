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
  /* background-color: #d6efff; */
`;

export const TotalResult = styled.div`
  width: 90%;
  height: 60%;
  border-radius: 0.5rem;
  /* background-color: #d6efff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.3px);
  -webkit-backdrop-filter: blur(0.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  p {
    font-weight: bold;

    &:first-child {
      font-size: 1.5rem;
      color: #ffc93c;
      margin-bottom: 3rem;
    }
    
    &:last-child {
      color: #fff;
      font-size: 5rem;
    }
  }
`;

export const TotalButtons = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  /* background-color: tomato; */

  button {
    width: 45%;
    max-height: 55px;
    background-color: #0081c9;
    color: #fff;
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

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
