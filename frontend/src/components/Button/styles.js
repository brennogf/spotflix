import styled from "styled-components";

export const ButtonLink = styled.button`
  cursor: pointer;
  background: var(--black);
  color: var(--white);
  border: 1px solid var(--white);
  padding: 16px 24px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    border: 1px solid var(--primary);
    color: var(--primary);
  }
`;
