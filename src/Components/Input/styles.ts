import styled from 'styled-components';

export const InputCustomized = styled.input`
  font-size: 20px;
  background-color: #e9e9e9;
  border-radius: 8px;
  border: 2px solid #6a6a6a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 16px 20px;
  width: 100%;
  margin: 0.5rem 0;

  &::placeholder {
    font-family: Poppins;
    color: #000000;
    font-size: 1rem;
    opacity: 0.7;
  }
`;
