import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #383838;
`;

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;
  background-color: #201d1d;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: lighter;
  }

  p {
    color: white;
    font-size: bold;
    font-weight: bold;
  }

  a {
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }

  label {
    color: #fff;
    font-size: 1rem;
  }
`;
