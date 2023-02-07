import styled from "styled-components";

export const Title = styled.h1`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 0 0.5rem;
  font-weight: 700;
  color: var(--white-clr);
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 650px) {
    font-size: 28px;
  }
`;

export const ValuesSection = styled.section`
  grid-column: 1/8;
  grid-row: 2/3;
  padding: 0 0.5rem 0 1rem;

  @media screen and (max-width: 900px) {
    padding: 0 1rem 0 0.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    padding: 0 2rem;
  }

  @media screen and (max-width: 650px) {
    padding: 0 1rem 0 0.5rem;
  }
  
  @media screen and (max-width: 550px) {
    padding: 0 0.5rem 0 0;
  }
`;
