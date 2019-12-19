import styled from "styled-components";

export const Boton = styled.button`
  padding: 10px 20px;
  margin: 0 15px;
  border: 0;
  background: #ffffff;
  text-transform: uppercase;
  color: #1a237e;
  border-radius: 30px;
  border: 2px solid #1a237e;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #ffffff;
    background: #1a237e;
  }
`;

export const BotonFilled = styled(Boton)`
  color: #ffffff;
  background: #1a237e;
  max-width: 300px;
  &:hover {
    color: #1a237e;
    background: #ffffff;
  }
`;
