import styled from "styled-components";

export const Title = styled.h1`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: var(--white-clr);
  display: grid;
  place-items: center;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
`;

export const ValuesSection = styled.section`
  grid-column: 1/8;
  grid-row: 2/3;
  padding: 0 0.5rem 0 1rem;
`;
